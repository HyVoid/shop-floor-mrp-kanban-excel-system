import React, { useState } from 'react';
import {
  Store,
  Search,
  Filter,
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Truck,
  ArrowUpDown,
  Download
} from 'lucide-react';
import { AppState, InventoryItem } from '../types';
import { computeAll } from '../utils/engine';
import { DataBar } from '../components/DataBar';
import { InsightBlock } from '../components/InsightBlock';

interface SupermarketViewProps {
  state: AppState;
  onUpdateInventory: (partId: string, updates: Partial<InventoryItem>) => void;
}

export const SupermarketView: React.FC<SupermarketViewProps> = ({
  state,
  onUpdateInventory
}) => {
  const { cfg, computedInventory, upstreamReplenishment } = computeAll(state);

  const [searchTerm, setSearchTerm] = useState('');
  const [sourceFilter, setSourceFilter] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 15;

  const filteredItems = computedInventory.filter(item => {
    const matchSearch =
      item.partId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.partName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchSource = sourceFilter === 'ALL' || item.processSource === sourceFilter;
    const matchStatus = statusFilter === 'ALL' || item.replenishStatus === statusFilter;
    return matchSearch && matchSource && matchStatus;
  });

  const totalPages = Math.ceil(filteredItems.length / pageSize) || 1;
  const paginatedItems = filteredItems.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const urgentCount = computedInventory.filter(i => i.replenishStatus === 'Urgent').length;
  const replenishCount = computedInventory.filter(i => i.replenishStatus === 'Replenish').length;

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Header */}
      <div className="bg-white rounded-[var(--radius-md)] p-6 shadow-[var(--shadow-sm)] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--table-header-bg)] flex items-center justify-center text-[var(--color-primary)]">
            <Store className="w-5 h-5 text-[var(--color-primary)]" />
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-[var(--color-primary)] tracking-heading">
              07_INV_Super Supermarket WIP & Inventory Monitor
            </h2>
            <p className="text-xs text-[var(--color-muted)]">
              Central shop-floor supermarket buffer monitoring physical bins, consumption feedback, net availability, and upstream pull replenishment orders.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <div className="text-right">
            <span className="text-[10px] uppercase font-semibold tracking-table-head text-[var(--color-muted)] block">
              Suggested Upstream Replenish
            </span>
            <span className="font-heading text-xl font-bold text-[var(--color-accent)]">
              {upstreamReplenishment.Total.toLocaleString()} {cfg.qtyUnit}
            </span>
          </div>
        </div>
      </div>

      {/* Insight */}
      {urgentCount > 0 ? (
        <InsightBlock
          title="CRITICAL SUPERMARKET SHORTAGE ALERT"
          className="anomaly-row"
        >
          {urgentCount} part(s) are in an <strong>Urgent Stockout State</strong> (Net Available &le; 0). Immediate material transfers from upstream Laser, Bending, and Machining cells are required to prevent welding station starvation. Use the pale yellow editable cells to log incoming intake shipments.
        </InsightBlock>
      ) : replenishCount > 0 ? (
        <InsightBlock title="SAFETY BUFFER REPLENISHMENT REQUIRED">
          {replenishCount} part(s) have fallen below calculated Safety Stock thresholds. Upstream kanban production orders should be scheduled based on the suggested batch quantities aligned to standard pack (SNP) multipliers.
        </InsightBlock>
      ) : (
        <InsightBlock title="SUPERMARKET BUFFERS BALANCED">
          All supermarket part inventory balances are above safety stock thresholds. Zero material shortages recorded across all active shift schedules.
        </InsightBlock>
      )}

      {/* Filter / Search Bar */}
      <div className="bg-white rounded-[var(--radius-md)] p-4 shadow-[var(--shadow-sm)] flex flex-wrap items-center justify-between gap-4">
        <div className="relative flex-1 min-w-[240px] max-w-md">
          <Search className="w-4 h-4 text-[var(--color-muted)] absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search Part ID, Name, or Bin Location..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-9 pr-4 py-1.5 text-xs border border-[var(--color-border)] rounded-[var(--radius-sm)] focus:outline-none focus:border-[var(--color-accent)]"
          />
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs">
          {/* Source */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-semibold uppercase tracking-table-head text-[var(--color-muted)]">
              Source:
            </span>
            <select
              value={sourceFilter}
              onChange={(e) => {
                setSourceFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="px-2.5 py-1 text-xs border border-[var(--color-border)] rounded-[var(--radius-sm)] bg-white"
            >
              <option value="ALL">All Sources ({computedInventory.length})</option>
              <option value="Laser">Laser Cutting</option>
              <option value="Bending">Press Bending</option>
              <option value="Machining">Precision Machining</option>
            </select>
          </div>

          {/* Status */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-semibold uppercase tracking-table-head text-[var(--color-muted)]">
              Replenish Status:
            </span>
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="px-2.5 py-1 text-xs border border-[var(--color-border)] rounded-[var(--radius-sm)] bg-white"
            >
              <option value="ALL">All States ({computedInventory.length})</option>
              <option value="Urgent">🚨 Urgent Stockout ({urgentCount})</option>
              <option value="Replenish">⚠️ Replenish Required ({replenishCount})</option>
              <option value="Normal">🟢 Normal Safe ({computedInventory.length - urgentCount - replenishCount})</option>
            </select>
          </div>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-[var(--radius-md)] shadow-[var(--shadow-sm)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[var(--table-header-bg)] text-[var(--color-primary)] uppercase tracking-table-head font-semibold border-b border-[var(--table-header-sep)]">
              <tr>
                <th className="px-4 py-3">Part ID</th>
                <th className="px-4 py-3">Part Name [Supermarket Bin]</th>
                <th className="px-4 py-3">Source Process</th>
                <th className="px-4 py-3 text-right">Opening Stock (Edit)</th>
                <th className="px-4 py-3 text-right">Today Intake (Edit)</th>
                <th className="px-4 py-3 text-right">Consumed (Live)</th>
                <th className="px-4 py-3 text-right">Stock Adj (Edit)</th>
                <th className="px-4 py-3 text-right">Physical On-Hand</th>
                <th className="px-4 py-3 text-right">In-Transit Locked</th>
                <th className="px-4 py-3 text-right font-bold text-[var(--color-accent)]">Net Available</th>
                <th className="px-4 py-3 text-right">Plan Demand</th>
                <th className="px-4 py-3 text-right">Shortage</th>
                <th className="px-4 py-3 text-right">Suggested Replenish</th>
                <th className="px-4 py-3 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
              {paginatedItems.length === 0 ? (
                <tr>
                  <td colSpan={14} className="px-6 py-8 text-center text-[var(--color-muted)]">
                    No parts match your filter criteria.
                  </td>
                </tr>
              ) : (
                paginatedItems.map((item) => {
                  const isUrgent = item.replenishStatus === 'Urgent';
                  const isReplenish = item.replenishStatus === 'Replenish';

                  return (
                    <tr
                      key={item.partId}
                      className={isUrgent ? 'anomaly-row' : 'hover:bg-gray-50/50 transition-colors'}
                    >
                      <td className="px-4 py-3 font-mono font-bold text-[var(--color-primary)]">
                        {item.partId}
                      </td>
                      <td className="px-4 py-3 text-[var(--color-body-text)]">
                        <span className="font-medium">{item.partName}</span>{' '}
                        <span className="font-mono text-[11px] text-[var(--color-muted)] font-normal">[{item.location}]</span>
                      </td>
                      <td className="px-4 py-3 text-[var(--color-muted)]">
                        {item.processSource}
                      </td>

                      {/* Opening Stock (Editable) */}
                      <td className="px-4 py-2 text-right">
                        <input
                          type="number"
                          min="0"
                          value={item.openingStock}
                          onChange={(e) => onUpdateInventory(item.partId, { openingStock: Math.max(0, parseInt(e.target.value) || 0) })}
                          className="input-editable px-2 py-1 text-right font-mono text-xs w-16"
                        />
                      </td>

                      {/* Today Intake (Editable) */}
                      <td className="px-4 py-2 text-right">
                        <input
                          type="number"
                          min="0"
                          value={item.intakeToday}
                          onChange={(e) => onUpdateInventory(item.partId, { intakeToday: Math.max(0, parseInt(e.target.value) || 0) })}
                          className="input-editable px-2 py-1 text-right font-mono text-xs w-16"
                        />
                      </td>

                      {/* Consumed (Live from Reports) */}
                      <td className="px-4 py-3 text-right font-mono text-[var(--color-muted)]">
                        {item.consumedQty}
                      </td>

                      {/* Stock Adjustment (Editable) */}
                      <td className="px-4 py-2 text-right">
                        <input
                          type="number"
                          value={item.stockAdjustment}
                          onChange={(e) => onUpdateInventory(item.partId, { stockAdjustment: parseInt(e.target.value) || 0 })}
                          className="input-editable px-2 py-1 text-right font-mono text-xs w-16"
                        />
                      </td>

                      {/* Physical Stock */}
                      <td className="px-4 py-3 text-right font-mono font-bold text-[var(--color-primary)]">
                        {item.physicalStock}
                      </td>

                      {/* In-Transit Locked */}
                      <td className="px-4 py-3 text-right font-mono text-[var(--color-muted)]">
                        {item.inTransitQty > 0 ? (
                          <span className="text-[var(--color-accent)] font-semibold flex items-center justify-end gap-1">
                            <Truck className="w-3 h-3" /> {item.inTransitQty}
                          </span>
                        ) : (
                          '0'
                        )}
                      </td>

                      {/* Net Available */}
                      <td className="px-4 py-3 text-right font-mono font-bold">
                        <span className={item.netAvailable <= 0 ? 'text-[var(--color-negative)]' : 'text-[var(--color-primary)]'}>
                          {item.netAvailable}
                        </span>
                      </td>

                      {/* Planned Demand */}
                      <td className="px-4 py-3 text-right font-mono text-[var(--color-muted)]">
                        {item.totalDemand}
                      </td>

                      {/* Shortage Qty */}
                      <td className="px-4 py-3 text-right font-mono font-bold">
                        <span className={item.shortageQty > 0 ? 'text-[var(--color-negative)]' : 'text-[var(--color-muted)]'}>
                          {item.shortageQty}
                        </span>
                      </td>

                      {/* Suggested Replenish (Aligned to SNP) */}
                      <td className="px-4 py-3 text-right">
                        <DataBar
                          value={item.suggestedQty}
                          max={Math.max(...computedInventory.map(c => c.suggestedQty), 100)}
                          label={item.suggestedQty}
                          unit={cfg.qtyUnit}
                          isNegativeAlert={item.shortageQty > 0}
                        />
                      </td>

                      {/* Replenish Status Pill */}
                      <td className="px-4 py-3 text-center">
                        {isUrgent ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-white bg-[var(--color-negative)] px-2.5 py-0.5 rounded-full">
                            <AlertOctagon className="w-3 h-3" /> Urgent
                          </span>
                        ) : isReplenish ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-yellow-800 bg-yellow-100 px-2.5 py-0.5 rounded-full">
                            <AlertTriangle className="w-3 h-3" /> Replenish
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[var(--color-positive)] bg-green-50 px-2.5 py-0.5 rounded-full">
                            <CheckCircle className="w-3 h-3" /> Normal
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

        {/* Pagination */}
        <div className="px-6 py-3 border-t border-[var(--color-border)] flex items-center justify-between text-xs text-[var(--color-muted)]">
          <div>
            Showing <span className="font-semibold text-[var(--color-primary)]">{(currentPage - 1) * pageSize + 1}</span> to{' '}
            <span className="font-semibold text-[var(--color-primary)]">
              {Math.min(currentPage * pageSize, filteredItems.length)}
            </span> of <span className="font-semibold text-[var(--color-primary)]">{filteredItems.length}</span> parts
          </div>

          <div className="flex items-center gap-1.5">
            <button
              disabled={currentPage <= 1}
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              className="px-2.5 py-1 border border-[var(--color-border)] rounded-[var(--radius-sm)] bg-white disabled:opacity-40"
            >
              Previous
            </button>
            <span className="px-2 font-mono">
              {currentPage} / {totalPages}
            </span>
            <button
              disabled={currentPage >= totalPages}
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              className="px-2.5 py-1 border border-[var(--color-border)] rounded-[var(--radius-sm)] bg-white disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
