import React, { useState } from 'react';
import {
  TrendingUp,
  AlertOctagon,
  Boxes,
  Truck,
  ArrowRight,
  ShieldAlert,
  Flame,
  CheckCircle,
  Filter
} from 'lucide-react';
import { AppState } from '../types';
import { computeAll } from '../utils/engine';
import { DataBar } from '../components/DataBar';
import { InsightBlock } from '../components/InsightBlock';
import { ActiveTab } from '../components/Navbar';

interface DashboardViewProps {
  state: AppState;
  onNavigateTab: (tab: ActiveTab) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  state,
  onNavigateTab
}) => {
  const [selectedDate, setSelectedDate] = useState<string>('2026-10-08');
  const [selectedShift, setSelectedShift] = useState<string>('ALL');
  const [selectedStation, setSelectedStation] = useState<string>('ALL');

  const {
    cfg,
    computedInventory,
    computedTrolleyTasks,
    computedReports,
    upstreamReplenishment,
    topShortages
  } = computeAll(state);

  // Filter plans and reports based on slicers
  const filteredPlans = state.plans.filter(p => {
    if (selectedDate && p.date !== selectedDate) return false;
    if (selectedShift !== 'ALL' && p.shift !== selectedShift) return false;
    if (selectedStation !== 'ALL' && p.stationId !== selectedStation) return false;
    return true;
  });

  const filteredReports = computedReports.filter(r => {
    if (selectedDate && r.date !== selectedDate) return false;
    if (selectedShift !== 'ALL' && r.shift !== selectedShift) return false;
    if (selectedStation !== 'ALL' && r.stationId !== selectedStation) return false;
    return true;
  });

  const filteredTasks = computedTrolleyTasks.filter(t => {
    if (selectedShift !== 'ALL' && t.shift !== selectedShift) return false;
    if (selectedStation !== 'ALL' && t.stationId !== selectedStation) return false;
    return true;
  });

  const totalPlannedUnits = filteredPlans.reduce((sum, p) => sum + p.plannedQty, 0);
  const totalActualUnits = filteredReports.reduce((sum, r) => sum + r.actualQty, 0);
  const planAchievementRate = totalPlannedUnits > 0
    ? Math.round((totalActualUnits / totalPlannedUnits) * 1000) / 10
    : 0;

  const totalTasks = filteredTasks.length;
  const readyTasks = filteredTasks.filter(t => t.kitStatus === 'Ready').length;
  const kitSupplyRate = totalTasks > 0
    ? Math.round((readyTasks / totalTasks) * 1000) / 10
    : 100.0;

  const blockedStations = Array.from(
    new Set(filteredTasks.filter(t => t.kitStatus === 'Blocked').map(t => t.stationId))
  );

  const stockoutPartsCount = computedInventory.filter(i => i.shortageQty > 0).length;

  return (
    <div className="space-y-8 animate-fade-up">
      {/* Slicer / Query Bar */}
      <div className="bg-white rounded-[var(--radius-md)] p-4 shadow-[var(--shadow-sm)] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-[var(--color-primary)]" />
          <span className="font-heading text-[16px] font-bold text-[var(--color-primary)]">
            Operations Slicers
          </span>
          <span className="text-[11px] text-[var(--color-muted)] font-mono ml-2">
            [10_DSH_Board § Query Slicers]
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs">
          {/* Date */}
          <div className="flex items-center gap-2">
            <label className="text-[11px] font-semibold tracking-table-head uppercase text-[var(--color-muted)]">
              Date:
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-2.5 py-1 text-xs border border-[var(--color-border)] rounded-[var(--radius-sm)] focus:outline-none focus:border-[var(--color-accent)] font-mono bg-white"
            />
          </div>

          {/* Shift */}
          <div className="flex items-center gap-2">
            <label className="text-[11px] font-semibold tracking-table-head uppercase text-[var(--color-muted)]">
              Shift:
            </label>
            <select
              value={selectedShift}
              onChange={(e) => setSelectedShift(e.target.value)}
              className="px-2.5 py-1 text-xs border border-[var(--color-border)] rounded-[var(--radius-sm)] focus:outline-none focus:border-[var(--color-accent)] bg-white"
            >
              <option value="ALL">All Shifts</option>
              <option value="Shift-1">Shift-1 (Day)</option>
              <option value="Shift-2">Shift-2 (Night)</option>
            </select>
          </div>

          {/* Station */}
          <div className="flex items-center gap-2">
            <label className="text-[11px] font-semibold tracking-table-head uppercase text-[var(--color-muted)]">
              Station:
            </label>
            <select
              value={selectedStation}
              onChange={(e) => setSelectedStation(e.target.value)}
              className="px-2.5 py-1 text-xs border border-[var(--color-border)] rounded-[var(--radius-sm)] focus:outline-none focus:border-[var(--color-accent)] bg-white"
            >
              <option value="ALL">All Workstations</option>
              {state.stations.map((st) => (
                <option key={st.id} value={st.id}>
                  {st.id} ({st.type})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* KPI 1 */}
        <div className="card-elevated p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-table-head text-[var(--color-muted)]">
              Shift Plan Achievement
            </span>
            <TrendingUp className="w-4 h-4 text-[var(--color-muted)]" />
          </div>
          <div className="font-heading text-[36px] font-bold text-[var(--color-primary)] tracking-display leading-tight">
            {planAchievementRate.toFixed(1)}%
          </div>
          <div className="text-[11px] text-[var(--color-muted)] mt-1 flex items-center justify-between">
            <span>Actual: {totalActualUnits} {cfg.qtyUnit}</span>
            <span>Target: {totalPlannedUnits} {cfg.qtyUnit}</span>
          </div>
        </div>

        {/* KPI 2 */}
        <div className="card-elevated p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-table-head text-[var(--color-muted)]">
              Station Kit Supply Rate
            </span>
            <Boxes className="w-4 h-4 text-[var(--color-muted)]" />
          </div>
          <div className="font-heading text-[36px] font-bold text-[var(--color-primary)] tracking-display leading-tight">
            {kitSupplyRate.toFixed(1)}%
          </div>
          <div className="text-[11px] text-[var(--color-muted)] mt-1 flex items-center justify-between">
            <span>Ready: {readyTasks} Trolleys</span>
            <span>Total Tasks: {totalTasks}</span>
          </div>
        </div>

        {/* KPI 3 */}
        <div className={`card-elevated p-5 ${blockedStations.length > 0 ? 'anomaly-row' : ''}`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-table-head text-[var(--color-muted)]">
              Starvation Risk Stations
            </span>
            <AlertOctagon className={`w-4 h-4 ${blockedStations.length > 0 ? 'text-[var(--color-negative)]' : 'text-[var(--color-muted)]'}`} />
          </div>
          <div className={`font-heading text-[36px] font-bold tracking-display leading-tight ${blockedStations.length > 0 ? 'text-[var(--color-negative)]' : 'text-[var(--color-primary)]'}`}>
            {blockedStations.length} <span className="text-base font-normal text-[var(--color-muted)]">stations</span>
          </div>
          <div className="text-[11px] text-[var(--color-muted)] mt-1 truncate">
            {blockedStations.length > 0
              ? `Action required: ${blockedStations.join(', ')}`
              : 'Zero starvation risk reported'}
          </div>
        </div>

        {/* KPI 4 */}
        <div className={`card-elevated p-5 ${stockoutPartsCount > 0 ? 'anomaly-row' : ''}`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-table-head text-[var(--color-muted)]">
              Supermarket Stockouts
            </span>
            <ShieldAlert className={`w-4 h-4 ${stockoutPartsCount > 0 ? 'text-[var(--color-negative)]' : 'text-[var(--color-muted)]'}`} />
          </div>
          <div className={`font-heading text-[36px] font-bold tracking-display leading-tight ${stockoutPartsCount > 0 ? 'text-[var(--color-negative)]' : 'text-[var(--color-primary)]'}`}>
            {stockoutPartsCount} <span className="text-base font-normal text-[var(--color-muted)]">parts</span>
          </div>
          <div className="text-[11px] text-[var(--color-muted)] mt-1 flex items-center justify-between">
            <span>Shortage parts</span>
            <button
              onClick={() => onNavigateTab('07_INV_Super')}
              className="text-[var(--color-accent)] hover:underline flex items-center gap-0.5"
            >
              View Supermarket <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Upstream Pull Replenishment Volume Summary Bar */}
      <div className="bg-white rounded-[var(--radius-md)] p-6 shadow-[var(--shadow-sm)]">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-heading text-[18px] font-bold text-[var(--color-primary)] tracking-heading">
              Upstream Pull Replenishment Demand (Kanban Pull Signals)
            </h3>
            <p className="text-xs text-[var(--color-muted)]">
              Dynamic orders required from upstream manufacturing processes to sustain continuous assembly takt time.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-table-head text-[var(--color-primary)]">
              Total Pull Volume:
            </span>
            <span className="font-mono text-sm font-bold text-[var(--color-accent)] bg-[var(--insight-bg)] px-2.5 py-1 rounded-[var(--radius-sm)] border border-[var(--color-border)]">
              {upstreamReplenishment.Total.toLocaleString()} {cfg.qtyUnit}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Laser */}
          <div className="border border-[var(--color-border)] rounded-[var(--radius-md)] p-4 bg-[var(--color-bg)]">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-semibold text-[var(--color-primary)]">
                1. Laser Cutting (Laser 切割)
              </span>
              <span className="text-xs text-[var(--color-muted)]">Sheet & Plate Parts</span>
            </div>
            <div className="flex items-baseline justify-between mt-2">
              <span className="font-heading text-2xl font-bold text-[var(--color-primary)]">
                {upstreamReplenishment.Laser.toLocaleString()}
              </span>
              <span className="text-xs text-[var(--color-muted)] font-mono">{cfg.qtyUnit}</span>
            </div>
            <div className="mt-2">
              <DataBar
                value={upstreamReplenishment.Laser}
                max={upstreamReplenishment.Total || 100}
                unit="PCS"
              />
            </div>
          </div>

          {/* Bending */}
          <div className="border border-[var(--color-border)] rounded-[var(--radius-md)] p-4 bg-[var(--color-bg)]">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-semibold text-[var(--color-primary)]">
                2. Press Bending (Bending 折弯)
              </span>
              <span className="text-xs text-[var(--color-muted)]">Channels & Profiles</span>
            </div>
            <div className="flex items-baseline justify-between mt-2">
              <span className="font-heading text-2xl font-bold text-[var(--color-primary)]">
                {upstreamReplenishment.Bending.toLocaleString()}
              </span>
              <span className="text-xs text-[var(--color-muted)] font-mono">{cfg.qtyUnit}</span>
            </div>
            <div className="mt-2">
              <DataBar
                value={upstreamReplenishment.Bending}
                max={upstreamReplenishment.Total || 100}
                unit="PCS"
              />
            </div>
          </div>

          {/* Machining */}
          <div className="border border-[var(--color-border)] rounded-[var(--radius-md)] p-4 bg-[var(--color-bg)]">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-semibold text-[var(--color-primary)]">
                3. Precision Machining (Machining 机加工)
              </span>
              <span className="text-xs text-[var(--color-muted)]">Turned Pins & Bosses</span>
            </div>
            <div className="flex items-baseline justify-between mt-2">
              <span className="font-heading text-2xl font-bold text-[var(--color-primary)]">
                {upstreamReplenishment.Machining.toLocaleString()}
              </span>
              <span className="text-xs text-[var(--color-muted)] font-mono">{cfg.qtyUnit}</span>
            </div>
            <div className="mt-2">
              <DataBar
                value={upstreamReplenishment.Machining}
                max={upstreamReplenishment.Total || 100}
                unit="PCS"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Insight Block */}
      {topShortages.length > 0 ? (
        <InsightBlock
          title="CRITICAL REPLENISHMENT ACTION REQUIRED"
          actionText="Dispatch Replenish Order"
          onAction={() => onNavigateTab('07_INV_Super')}
        >
          {topShortages.length} part(s) exhibit active inventory deficits threatening welding robot line feeding. Part{' '}
          <strong className="text-[var(--color-negative)]">{topShortages[0].partId} ({topShortages[0].partName})</strong> has an immediate shortage of{' '}
          <strong>{topShortages[0].shortageQty} {cfg.qtyUnit}</strong>. Upstream machining and cutting cells should prioritize work orders aligned to the suggested lot sizes below.
        </InsightBlock>
      ) : (
        <InsightBlock title="SHOP-FLOOR BUFFER STATUS OPTIMAL">
          All welding workstations are supplied at normal inventory levels. Supermarket safety stock buffers are above threshold with zero starvation risk identified for the current shift.
        </InsightBlock>
      )}

      {/* Top 10 Shortage Red-Black Table */}
      <div className="bg-white rounded-[var(--radius-md)] shadow-[var(--shadow-sm)] overflow-hidden">
        <div className="px-6 py-4 border-b border-[var(--color-border)] flex items-center justify-between">
          <div>
            <h3 className="font-heading text-[18px] font-bold text-[var(--color-primary)] tracking-heading">
              Critical Shortage & Stockout Ranking (Red-Black Ranking List)
            </h3>
            <p className="text-xs text-[var(--color-muted)]">
              Ranked by net deficit volume. Urgent status indicates immediate action needed from upstream cells.
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('07_INV_Super')}
            className="text-xs text-[var(--color-accent)] font-medium hover:underline flex items-center gap-1"
          >
            Manage Supermarket <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[var(--table-header-bg)] text-[var(--color-primary)] uppercase tracking-table-head font-semibold border-b border-[var(--table-header-sep)]">
              <tr>
                <th className="px-4 py-3">Part ID</th>
                <th className="px-4 py-3">Part Name</th>
                <th className="px-4 py-3">Source Process</th>
                <th className="px-4 py-3">Supermarket Bin</th>
                <th className="px-4 py-3 text-right">Net Available</th>
                <th className="px-4 py-3 text-right">Total Demand</th>
                <th className="px-4 py-3 text-right">Shortage Deficit</th>
                <th className="px-4 py-3 text-right">Suggested Replenish</th>
                <th className="px-4 py-3 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
              {topShortages.length === 0 ? (
                <tr>
                  <td colSpan={9} className="px-6 py-8 text-center text-[var(--color-muted)]">
                    <CheckCircle className="w-5 h-5 mx-auto text-[var(--color-positive)] mb-2" />
                    Zero material shortages recorded. Supermarket inventory meets all scheduled shift demand.
                  </td>
                </tr>
              ) : (
                topShortages.map((item) => {
                  const isUrgent = item.replenishStatus === 'Urgent';
                  return (
                    <tr
                      key={item.partId}
                      className={isUrgent ? 'anomaly-row' : 'hover:bg-gray-50/50 transition-colors'}
                    >
                      <td className="px-4 py-3 font-mono font-bold text-[var(--color-primary)]">
                        {item.partId}
                      </td>
                      <td className="px-4 py-3 text-[var(--color-body-text)] font-medium">
                        {item.partName}
                      </td>
                      <td className="px-4 py-3 text-[var(--color-muted)]">
                        {item.processSource}
                      </td>
                      <td className="px-4 py-3 font-mono text-[var(--color-primary)]">
                        {item.location}
                      </td>
                      <td className="px-4 py-3 text-right font-mono">
                        {item.netAvailable}
                      </td>
                      <td className="px-4 py-3 text-right font-mono">
                        {item.totalDemand}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <span className={`font-mono font-bold ${item.shortageQty > 0 ? 'text-[var(--color-negative)]' : 'text-[var(--color-muted)]'}`}>
                          {item.shortageQty}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <DataBar
                          value={item.suggestedQty}
                          max={Math.max(...topShortages.map(s => s.suggestedQty), 50)}
                          label={item.suggestedQty}
                          unit={cfg.qtyUnit}
                          isNegativeAlert={item.shortageQty > 0}
                        />
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                            isUrgent
                              ? 'bg-[var(--color-negative)] text-white'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {isUrgent ? '🚨 Urgent Action' : '⚠️ Replenish'}
                        </span>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Workstation & Trolley Execution Board */}
      <div className="bg-white rounded-[var(--radius-md)] shadow-[var(--shadow-sm)] p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-heading text-[18px] font-bold text-[var(--color-primary)] tracking-heading">
              Welding Workstation & Trolley Live Status
            </h3>
            <p className="text-xs text-[var(--color-muted)]">
              Operational readiness and trolley container allocation across robotic and manual stations.
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('08_LOG_Trolley')}
            className="text-xs text-[var(--color-accent)] font-medium hover:underline flex items-center gap-1"
          >
            Dispatch Trolleys <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {state.stations.map((st) => {
            const stationTasks = computedTrolleyTasks.filter(t => t.stationId === st.id);
            const hasBlocked = stationTasks.some(t => t.kitStatus === 'Blocked');
            const inTransitTask = stationTasks.find(t => t.status === 'In-Transit');
            const activePlans = state.plans.filter(p => p.stationId === st.id && p.status === 'Released');

            return (
              <div
                key={st.id}
                className={`border rounded-[var(--radius-md)] p-4 transition-all ${
                  hasBlocked
                    ? 'border-red-300 bg-[var(--anomaly-bg)]'
                    : 'border-[var(--color-border)] bg-[var(--color-surface)] hover:shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-[var(--color-primary)]">
                    {st.id}
                  </span>
                  <span className="text-[10px] uppercase font-semibold text-[var(--color-muted)] bg-[var(--color-bg)] px-2 py-0.5 rounded-full border border-[var(--color-border)]">
                    {st.type}
                  </span>
                </div>

                <div className="text-xs font-medium text-[var(--color-body-text)] mb-2 truncate">
                  {st.name}
                </div>

                <div className="text-[11px] text-[var(--color-muted)] space-y-1 pt-2 border-t border-[var(--color-border)]">
                  <div className="flex items-center justify-between">
                    <span>Trolley Container:</span>
                    <span className="font-mono text-[var(--color-primary)] font-semibold">{st.defaultTrolleyId}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Active Release Plan:</span>
                    <span className="font-medium text-[var(--color-primary)]">
                      {activePlans.length > 0 ? `${activePlans[0].componentId} (${activePlans[0].plannedQty} pcs)` : 'Idle / No Plan'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Supply State:</span>
                    {hasBlocked ? (
                      <span className="text-[var(--color-negative)] font-bold">🔴 Delivery Blocked</span>
                    ) : inTransitTask ? (
                      <span className="text-[var(--color-accent)] font-semibold flex items-center gap-1">
                        <Truck className="w-3 h-3" /> In-Transit ({inTransitTask.deliveryTime || 'En-route'})
                      </span>
                    ) : (
                      <span className="text-[var(--color-positive)] font-medium">🟢 Stocked / Ready</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
