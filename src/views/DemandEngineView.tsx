import React, { useState } from 'react';
import {
  Cpu,
  Search,
  Filter,
  AlertTriangle,
  CheckCircle,
  AlertOctagon,
  ArrowRight
} from 'lucide-react';
import { AppState } from '../types';
import { computeAll } from '../utils/engine';
import { DataBar } from '../components/DataBar';
import { InsightBlock } from '../components/InsightBlock';
import { ActiveTab } from '../components/Navbar';

interface DemandEngineViewProps {
  state: AppState;
  onNavigateTab: (tab: ActiveTab) => void;
}

export const DemandEngineView: React.FC<DemandEngineViewProps> = ({
  state,
  onNavigateTab
}) => {
  const { cfg, computedDemand } = computeAll(state);

  const [searchTerm, setSearchTerm] = useState('');
  const [shiftFilter, setShiftFilter] = useState('ALL');
  const [riskFilter, setRiskFilter] = useState('ALL');

  const filteredDemand = computedDemand.filter(d => {
    const matchSearch =
      d.scheduleKey.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.componentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.partId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.partName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchShift = shiftFilter === 'ALL' || d.shift === shiftFilter;
    const matchRisk = riskFilter === 'ALL' || d.riskFlag === riskFilter;
    return matchSearch && matchShift && matchRisk;
  });

  const criticalCount = computedDemand.filter(d => d.riskFlag === 'Critical').length;
  const partialCount = computedDemand.filter(d => d.riskFlag === 'Partial').length;
  const totalGrossUnits = computedDemand.reduce((sum, d) => sum + d.grossDemand, 0);

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Header */}
      <div className="bg-white rounded-[var(--radius-md)] p-6 shadow-[var(--shadow-sm)] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--table-header-bg)] flex items-center justify-center text-[var(--color-primary)]">
            <Cpu className="w-5 h-5 text-[var(--color-primary)]" />
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-[var(--color-primary)] tracking-heading">
              06_ENG_Demand Material Requirement Calculation Engine
            </h2>
            <p className="text-xs text-[var(--color-muted)]">
              Dynamic multi-dimensional array explosion: Plan &times; BOM &rarr; Gross part demands matched live against supermarket availability.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-[10px] uppercase font-semibold tracking-table-head text-[var(--color-muted)] block">
              Total Gross Parts Demand
            </span>
            <span className="font-heading text-xl font-bold text-[var(--color-primary)]">
              {totalGrossUnits.toLocaleString()} {cfg.qtyUnit}
            </span>
          </div>
        </div>
      </div>

      {/* Insight */}
      {criticalCount > 0 ? (
        <InsightBlock
          title="ACTIVE MATERIAL RISK DETECTED IN ENGINE"
          actionText="Inspect Supermarket Buffer"
          onAction={() => onNavigateTab('07_INV_Super')}
        >
          {criticalCount} exploded BOM requirement line(s) exhibit complete stockouts (zero available inventory in supermarket). Stations relying on these components cannot fulfill current shift release targets without immediate restocking from upstream cutting/bending/machining departments.
        </InsightBlock>
      ) : (
        <InsightBlock title="ENGINE EXPLOSION FULLY BALANCED">
          All {computedDemand.length} active demand lines from released shift schedules are supported by supermarket net available stock. Zero stockouts detected.
        </InsightBlock>
      )}

      {/* Filter / Search Bar */}
      <div className="bg-white rounded-[var(--radius-md)] p-4 shadow-[var(--shadow-sm)] flex flex-wrap items-center justify-between gap-4">
        <div className="relative flex-1 min-w-[240px] max-w-md">
          <Search className="w-4 h-4 text-[var(--color-muted)] absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search Schedule Key, Component, Part ID, or Name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 text-xs border border-[var(--color-border)] rounded-[var(--radius-sm)] focus:outline-none focus:border-[var(--color-accent)]"
          />
        </div>

        <div className="flex items-center gap-4 text-xs">
          {/* Shift */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-semibold uppercase tracking-table-head text-[var(--color-muted)]">
              Shift:
            </span>
            <select
              value={shiftFilter}
              onChange={(e) => setShiftFilter(e.target.value)}
              className="px-2.5 py-1 text-xs border border-[var(--color-border)] rounded-[var(--radius-sm)] bg-white"
            >
              <option value="ALL">All Shifts</option>
              <option value="Shift-1">Shift-1</option>
              <option value="Shift-2">Shift-2</option>
            </select>
          </div>

          {/* Risk */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-semibold uppercase tracking-table-head text-[var(--color-muted)]">
              Shortage Risk:
            </span>
            <select
              value={riskFilter}
              onChange={(e) => setRiskFilter(e.target.value)}
              className="px-2.5 py-1 text-xs border border-[var(--color-border)] rounded-[var(--radius-sm)] bg-white"
            >
              <option value="ALL">All States ({computedDemand.length})</option>
              <option value="Critical">Critical Stockout ({criticalCount})</option>
              <option value="Partial">Partial Shortage ({partialCount})</option>
              <option value="Sufficient">Sufficient ({computedDemand.length - criticalCount - partialCount})</option>
            </select>
          </div>
        </div>
      </div>

      {/* Demand Table */}
      <div className="bg-white rounded-[var(--radius-md)] shadow-[var(--shadow-sm)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[var(--table-header-bg)] text-[var(--color-primary)] uppercase tracking-table-head font-semibold border-b border-[var(--table-header-sep)]">
              <tr>
                <th className="px-4 py-3">Schedule Ref</th>
                <th className="px-4 py-3">Date / Shift</th>
                <th className="px-4 py-3">Station</th>
                <th className="px-4 py-3">Component ID</th>
                <th className="px-4 py-3">Child Part ID</th>
                <th className="px-4 py-3">Part Name</th>
                <th className="px-4 py-3">Supermarket Bin</th>
                <th className="px-4 py-3 text-right">Unit Usage</th>
                <th className="px-4 py-3 text-right">Gross Demand</th>
                <th className="px-4 py-3 text-right">Net Available</th>
                <th className="px-4 py-3 text-center">Shortage Risk Flag</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
              {filteredDemand.length === 0 ? (
                <tr>
                  <td colSpan={11} className="px-6 py-8 text-center text-[var(--color-muted)]">
                    No exploded demand lines found. Make sure at least one shift plan is marked as 'Released'.
                  </td>
                </tr>
              ) : (
                filteredDemand.map((item, idx) => {
                  const isCritical = item.riskFlag === 'Critical';
                  const isPartial = item.riskFlag === 'Partial';

                  return (
                    <tr
                      key={`${item.scheduleKey}_${item.partId}_${idx}`}
                      className={isCritical ? 'anomaly-row' : 'hover:bg-gray-50/50 transition-colors'}
                    >
                      <td className="px-4 py-3 font-mono text-[10px] text-[var(--color-muted)] truncate max-w-[140px]">
                        {item.scheduleKey}
                      </td>
                      <td className="px-4 py-3 font-mono text-[var(--color-body-text)]">
                        {item.date} <span className="font-bold text-[var(--color-primary)]">[{item.shift}]</span>
                      </td>
                      <td className="px-4 py-3 font-mono font-bold text-[var(--color-primary)]">
                        {item.stationId}
                      </td>
                      <td className="px-4 py-3 font-mono font-bold text-[var(--color-accent)]">
                        {item.componentId}
                      </td>
                      <td className="px-4 py-3 font-mono font-semibold text-[var(--color-primary)]">
                        {item.partId}
                      </td>
                      <td className="px-4 py-3 font-medium text-[var(--color-body-text)]">
                        {item.partName}
                      </td>
                      <td className="px-4 py-3 font-mono text-[var(--color-muted)]">
                        {item.location}
                      </td>
                      <td className="px-4 py-3 text-right font-mono">
                        {item.qtyPerAssembly}
                      </td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-[var(--color-primary)]">
                        {item.grossDemand} {cfg.qtyUnit}
                      </td>
                      <td className="px-4 py-3 text-right font-mono">
                        <span className={isCritical ? 'text-[var(--color-negative)] font-bold' : 'text-[var(--color-primary)]'}>
                          {item.availableStock} {cfg.qtyUnit}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        {isCritical ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-white bg-[var(--color-negative)] px-2.5 py-0.5 rounded-full">
                            <AlertOctagon className="w-3 h-3" /> Critical Stockout
                          </span>
                        ) : isPartial ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-yellow-800 bg-yellow-100 px-2.5 py-0.5 rounded-full">
                            <AlertTriangle className="w-3 h-3" /> Partial Shortage
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[var(--color-positive)] bg-green-50 px-2.5 py-0.5 rounded-full">
                            <CheckCircle className="w-3 h-3" /> Sufficient
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
