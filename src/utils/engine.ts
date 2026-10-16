import {
  AppState,
  ComputedDemandItem,
  ComputedInventoryItem,
  ComputedTrolleyTaskItem,
  ComputedReportItem,
  PartItem,
  ProcessSource
} from '../types';

export function getSystemConfig(state: AppState) {
  const findParam = (code: string, defaultVal: number | string) => {
    const p = state.params.find(item => item.code === code);
    return p !== undefined ? p.value : defaultVal;
  };

  return {
    currSym: String(findParam('CFG_CURR_SYM', '$')),
    qtyUnit: String(findParam('CFG_QTY_UNIT', 'PCS')),
    shiftsPerDay: Number(findParam('CFG_SHIFTS_PER_DAY', 2)),
    shiftHours: Number(findParam('CFG_SHIFT_HOURS', 8.0)),
    safeBufferPct: Number(findParam('CFG_SAFE_BUFFER_PCT', 0.15)),
    replEmergDays: Number(findParam('CFG_REPL_EMERG_DAYS', 0.50)),
    kitFullPct: Number(findParam('CFG_KIT_FULL_PCT', 1.00)),
    kitWarnPct: Number(findParam('CFG_KIT_WARN_PCT', 0.80)),
    trolleyMaxSnp: Number(findParam('CFG_TROLLEY_MAX_SNP', 12)),
    scrapTolerance: Number(findParam('CFG_SCRAP_TOLERANCE', 0.02))
  };
}

export function computePartsWithParams(parts: PartItem[], safeBufferPct: number): PartItem[] {
  return parts.map(part => {
    const rawSafety = part.dailyConsumption * (1 + safeBufferPct);
    const snp = part.snp > 0 ? part.snp : 1;
    const safetyStock = Math.ceil(rawSafety / snp) * snp;
    const maxStock = safetyStock * 2;
    const status = (!part.location || !part.snp || part.snp <= 0) ? 'INCOMPLETE' : 'ACTIVE';
    return {
      ...part,
      safetyStock,
      maxStock,
      status
    };
  });
}

export function computeEngineDemand(
  state: AppState,
  computedPartsMap: Map<string, PartItem>,
  netAvailableMap: Map<string, number>
): ComputedDemandItem[] {
  const result: ComputedDemandItem[] = [];

  const releasedPlans = state.plans.filter(p => p.status === 'Released');

  for (const plan of releasedPlans) {
    const bomRows = state.bom.filter(b => b.componentId === plan.componentId);

    for (const b of bomRows) {
      const part = computedPartsMap.get(b.partId);
      const grossDemand = plan.plannedQty * b.qtyPerAssembly;
      const availableStock = netAvailableMap.get(b.partId) ?? 0;

      let riskFlag: 'Sufficient' | 'Partial' | 'Critical' = 'Sufficient';
      if (availableStock <= 0) {
        riskFlag = 'Critical';
      } else if (availableStock < grossDemand) {
        riskFlag = 'Partial';
      }

      result.push({
        scheduleKey: `${plan.date}_${plan.shift}_${plan.stationId}_${plan.componentId}`,
        date: plan.date,
        shift: plan.shift,
        stationId: plan.stationId,
        componentId: plan.componentId,
        componentName: b.componentName || plan.componentId,
        partId: b.partId,
        partName: part ? part.name : 'Unknown Part',
        processSource: part ? part.processSource : 'Laser',
        location: part ? part.location : 'N/A',
        qtyPerAssembly: b.qtyPerAssembly,
        grossDemand,
        availableStock,
        riskFlag
      });
    }
  }

  return result;
}

export function computeAll(state: AppState) {
  const cfg = getSystemConfig(state);
  const parts = computePartsWithParams(state.parts, cfg.safeBufferPct);
  const partsMap = new Map<string, PartItem>(parts.map(p => [p.id, p]));

  // 1. Calculate dynamic consumption per part from Work Reports (09_ACT_Report)
  const consumedMap = new Map<string, number>();
  for (const report of state.reports) {
    const totalAssy = report.actualQty + report.scrapQty;
    if (totalAssy <= 0) continue;

    const childBoms = state.bom.filter(b => b.componentId === report.componentId);
    for (const bom of childBoms) {
      const current = consumedMap.get(bom.partId) || 0;
      consumedMap.set(bom.partId, current + (totalAssy * bom.qtyPerAssembly));
    }
  }

  // 2. Calculate In-Transit locked qty from Trolley Tasks
  const inTransitMap = new Map<string, number>();
  for (const task of state.trolleyTasks) {
    if (task.status === 'In-Transit') {
      const current = inTransitMap.get(task.partId) || 0;
      inTransitMap.set(task.partId, current + task.loadQty);
    }
  }

  // 3. Compute base inventory availability map for demand check
  const netAvailableTempMap = new Map<string, number>();
  for (const part of parts) {
    const inv = state.inventories.find(i => i.partId === part.id) || {
      partId: part.id,
      openingStock: 0,
      intakeToday: 0,
      stockAdjustment: 0
    };
    const consumed = consumedMap.get(part.id) || 0;
    const physical = inv.openingStock + inv.intakeToday - consumed + inv.stockAdjustment;
    const inTransit = inTransitMap.get(part.id) || 0;
    const netAvail = Math.max(0, physical - inTransit);
    netAvailableTempMap.set(part.id, netAvail);
  }

  // 4. Compute Demand
  const computedDemand = computeEngineDemand(state, partsMap, netAvailableTempMap);

  // 5. Total Demand per Part
  const demandSumMap = new Map<string, number>();
  for (const d of computedDemand) {
    const current = demandSumMap.get(d.partId) || 0;
    demandSumMap.set(d.partId, current + d.grossDemand);
  }

  // 6. Compute Full Supermarket Inventory (07_INV_Super)
  const computedInventory: ComputedInventoryItem[] = parts.map(part => {
    const inv = state.inventories.find(i => i.partId === part.id) || {
      partId: part.id,
      openingStock: 0,
      intakeToday: 0,
      stockAdjustment: 0
    };
    const consumed = consumedMap.get(part.id) || 0;
    const inTransit = inTransitMap.get(part.id) || 0;
    const physicalStock = inv.openingStock + inv.intakeToday - consumed + inv.stockAdjustment;
    const netAvailable = Math.max(0, physicalStock - inTransit);
    const totalDemand = demandSumMap.get(part.id) || 0;
    const shortageQty = Math.max(0, totalDemand - netAvailable);

    let replenishStatus: 'Normal' | 'Replenish' | 'Urgent' = 'Normal';
    if (netAvailable <= 0) {
      replenishStatus = 'Urgent';
    } else if (netAvailable < part.safetyStock) {
      replenishStatus = 'Replenish';
    }

    // Suggested replenishment quantity aligned to SNP
    const snp = part.snp > 0 ? part.snp : 1;
    const rawNeed = Math.max(0, (totalDemand + part.safetyStock) - (netAvailable + inv.intakeToday));
    const suggestedQty = rawNeed > 0 ? Math.ceil(rawNeed / snp) * snp : 0;

    return {
      partId: part.id,
      partName: part.name,
      location: part.location,
      processSource: part.processSource,
      openingStock: inv.openingStock,
      intakeToday: inv.intakeToday,
      consumedQty: consumed,
      stockAdjustment: inv.stockAdjustment,
      physicalStock,
      inTransitQty: inTransit,
      netAvailable,
      totalDemand,
      shortageQty,
      replenishStatus,
      suggestedQty,
      safetyStock: part.safetyStock,
      maxStock: part.maxStock,
      snp: part.snp
    };
  });

  // 7. Compute Trolley Logistics Tasks (08_LOG_Trolley)
  const computedTrolleyTasks: ComputedTrolleyTaskItem[] = state.trolleyTasks.map(task => {
    const part = partsMap.get(task.partId);
    const netAvail = netAvailableTempMap.get(task.partId) ?? 0;
    const kitRatio = task.loadQty > 0 ? netAvail / task.loadQty : 1;

    let kitStatus: 'Ready' | 'Partly' | 'Blocked' = 'Blocked';
    if (kitRatio >= cfg.kitFullPct) {
      kitStatus = 'Ready';
    } else if (kitRatio >= cfg.kitWarnPct) {
      kitStatus = 'Partly';
    }

    const snp = part && part.snp > 0 ? part.snp : 1;
    const boxCount = Math.ceil(task.loadQty / snp);
    const isOverloaded = boxCount > cfg.trolleyMaxSnp;

    return {
      ...task,
      partName: part ? part.name : 'Unknown Part',
      location: part ? part.location : 'N/A',
      kitStatus,
      boxCount,
      maxBoxes: cfg.trolleyMaxSnp,
      isOverloaded
    };
  });

  // 8. Compute Work Completion Reports (09_ACT_Report)
  const computedReports: ComputedReportItem[] = state.reports.map(report => {
    const matchedPlan = state.plans.find(
      p => p.date === report.date &&
           p.shift === report.shift &&
           p.stationId === report.stationId &&
           p.componentId === report.componentId
    );

    const plannedQty = matchedPlan ? matchedPlan.plannedQty : 0;
    const varianceQty = report.actualQty - plannedQty;
    const totalProduced = report.actualQty + report.scrapQty;
    const scrapRate = totalProduced > 0 ? report.scrapQty / totalProduced : 0;
    const isScrapAlarm = scrapRate > cfg.scrapTolerance;

    const stationValid = state.stations.some(s => s.id === report.stationId);
    const compValid = state.bom.some(b => b.componentId === report.componentId);
    const verification = (stationValid && compValid && report.actualQty >= 0) ? 'VERIFIED' : 'INVALID';

    const bomName = state.bom.find(b => b.componentId === report.componentId)?.componentName;

    return {
      ...report,
      componentName: bomName || report.componentId,
      matchedPlannedQty: plannedQty,
      varianceQty,
      scrapRate,
      isScrapAlarm,
      verification
    };
  });

  // 9. Upstream pull replenishment volumes
  const upstreamReplenishment = {
    Laser: computedInventory
      .filter(i => i.processSource === 'Laser')
      .reduce((acc, curr) => acc + curr.suggestedQty, 0),
    Bending: computedInventory
      .filter(i => i.processSource === 'Bending')
      .reduce((acc, curr) => acc + curr.suggestedQty, 0),
    Machining: computedInventory
      .filter(i => i.processSource === 'Machining')
      .reduce((acc, curr) => acc + curr.suggestedQty, 0),
    Total: computedInventory.reduce((acc, curr) => acc + curr.suggestedQty, 0)
  };

  // 10. Critical Shortage Top 10 Red-Black List
  const topShortages = [...computedInventory]
    .filter(i => i.shortageQty > 0 || i.replenishStatus === 'Urgent')
    .sort((a, b) => b.shortageQty - a.shortageQty)
    .slice(0, 10);

  return {
    cfg,
    parts,
    partsMap,
    computedDemand,
    computedInventory,
    computedTrolleyTasks,
    computedReports,
    upstreamReplenishment,
    topShortages
  };
}
