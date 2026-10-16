import React, { useState } from 'react';
import {
  Package,
  Search,
  Plus,
  Trash2,
  Filter,
  CheckCircle,
  AlertTriangle,
  ArrowUpDown
} from 'lucide-react';
import { AppState, PartItem, ProcessSource } from '../types';
import { computePartsWithParams, getSystemConfig } from '../utils/engine';
import { DataBar } from '../components/DataBar';

interface PartsMasterViewProps {
  state: AppState;
  onUpdatePart: (partId: string, updates: Partial<PartItem>) => void;
  onAddPart: (newPart: PartItem) => void;
  onDeletePart: (partId: string) => void;
}

export const PartsMasterView: React.FC<PartsMasterViewProps> = ({
  state,
  onUpdatePart,
  onAddPart,
  onDeletePart
}) => {
  const cfg = getSystemConfig(state);
  const computedParts = computePartsWithParams(state.parts, cfg.safeBufferPct);

  const [searchTerm, setSearchTerm] = useState('');
  const [sourceFilter, setSourceFilter] = useState<string>('ALL');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 15;

  const [showAddModal, setShowAddModal] = useState(false);
  const [newPartForm, setNewPartForm] = useState<Partial<PartItem>>({
    id: `P-${1000 + state.parts.length + 1}`,
    name: '',
    processSource: 'Laser',
    spec: 'Q345B t=6.0mm',
    location: 'A-01-01',
    snp: 20,
    dailyConsumption: 30
  });

  const filteredParts = computedParts.filter(part => {
    const matchSearch =
      part.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      part.spec.toLowerCase().includes(searchTerm.toLowerCase()) ||
      part.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchSource = sourceFilter === 'ALL' || part.processSource === sourceFilter;
    return matchSearch && matchSource;
  });

  const totalPages = Math.ceil(filteredParts.length / pageSize) || 1;
  const paginatedParts = filteredParts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPartForm.name || !newPartForm.id) return;

    onAddPart({
      id: newPartForm.id,
      name: newPartForm.name,
      processSource: newPartForm.processSource as ProcessSource,
      spec: newPartForm.spec || 'Standard',
      unit: cfg.qtyUnit,
      location: newPartForm.location || 'A-01-01',
      snp: Number(newPartForm.snp) || 10,
      dailyConsumption: Number(newPartForm.dailyConsumption) || 20,
      safetyStock: 0,
      maxStock: 0,
      status: 'ACTIVE'
    });

    setShowAddModal(false);
    setNewPartForm({
      id: `P-${1000 + state.parts.length + 2}`,
      name: '',
      processSource: 'Laser',
      spec: 'Q345B t=6.0mm',
      location: 'A-01-01',
      snp: 20,
      dailyConsumption: 30
    });
  };

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Top Header */}
      <div className="bg-white rounded-[var(--radius-md)] p-6 shadow-[var(--shadow-sm)] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--table-header-bg)] flex items-center justify-center text-[var(--color-primary)]">
            <Package className="w-5 h-5 text-[var(--color-primary)]" />
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-[var(--color-primary)] tracking-heading">
              02_MST_Part Master Part & Location Catalog
            </h2>
            <p className="text-xs text-[var(--color-muted)]">
              Master repository of 500+ individual component parts, upstream process classification, and supermarket bin locations.
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-white bg-[var(--color-accent)] rounded-[var(--radius-sm)] hover:opacity-90 transition-opacity shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Register New Part</span>
        </button>
      </div>

      {/* Filter / Search Bar */}
      <div className="bg-white rounded-[var(--radius-md)] p-4 shadow-[var(--shadow-sm)] flex flex-wrap items-center justify-between gap-4">
        <div className="relative flex-1 min-w-[240px] max-w-md">
          <Search className="w-4 h-4 text-[var(--color-muted)] absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search by Part ID, Name, Spec, or Supermarket Bin..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-9 pr-4 py-1.5 text-xs border border-[var(--color-border)] rounded-[var(--radius-sm)] focus:outline-none focus:border-[var(--color-accent)]"
          />
        </div>

        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-[var(--color-muted)]" />
            <span className="text-[11px] font-semibold uppercase tracking-table-head text-[var(--color-muted)]">
              Process Source:
            </span>
          </div>
          <select
            value={sourceFilter}
            onChange={(e) => {
              setSourceFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="px-2.5 py-1.5 text-xs border border-[var(--color-border)] rounded-[var(--radius-sm)] focus:outline-none focus:border-[var(--color-accent)] bg-white"
          >
            <option value="ALL">All Sources ({computedParts.length})</option>
            <option value="Laser">Laser Cutting ({computedParts.filter(p => p.processSource === 'Laser').length})</option>
            <option value="Bending">Press Bending ({computedParts.filter(p => p.processSource === 'Bending').length})</option>
            <option value="Machining">Machining ({computedParts.filter(p => p.processSource === 'Machining').length})</option>
          </select>
        </div>
      </div>

      {/* Parts Table */}
      <div className="bg-white rounded-[var(--radius-md)] shadow-[var(--shadow-sm)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[var(--table-header-bg)] text-[var(--color-primary)] uppercase tracking-table-head font-semibold border-b border-[var(--table-header-sep)]">
              <tr>
                <th className="px-4 py-3">Part ID</th>
                <th className="px-4 py-3">Part Name</th>
                <th className="px-4 py-3">Process Source</th>
                <th className="px-4 py-3">Material / Spec</th>
                <th className="px-4 py-3">Supermarket Bin</th>
                <th className="px-4 py-3 text-right">SNP (Box)</th>
                <th className="px-4 py-3 text-right">Daily Avg Qty</th>
                <th className="px-4 py-3 text-right">Safety Stock</th>
                <th className="px-4 py-3 text-right">Max Stock</th>
                <th className="px-4 py-3 text-center">Status</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
              {paginatedParts.length === 0 ? (
                <tr>
                  <td colSpan={11} className="px-6 py-8 text-center text-[var(--color-muted)]">
                    No parts match your filter criteria.
                  </td>
                </tr>
              ) : (
                paginatedParts.map((part) => (
                  <tr key={part.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-4 py-3 font-mono font-bold text-[var(--color-primary)]">
                      {part.id}
                    </td>
                    <td className="px-4 py-3 font-medium text-[var(--color-body-text)]">
                      {part.name}
                    </td>
                    <td className="px-4 py-3 text-[var(--color-muted)]">
                      <span className="inline-block px-2 py-0.5 rounded-full text-[11px] font-mono bg-[var(--color-bg)] border border-[var(--color-border)]">
                        {part.processSource}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-[var(--color-muted)] text-[11px]">
                      {part.spec}
                    </td>
                    <td className="px-4 py-2">
                      <input
                        type="text"
                        value={part.location}
                        onChange={(e) => onUpdatePart(part.id, { location: e.target.value })}
                        className="input-editable px-2 py-1 font-mono text-xs w-24 text-[var(--color-primary)] font-semibold"
                      />
                    </td>
                    <td className="px-4 py-2 text-right">
                      <input
                        type="number"
                        min="1"
                        value={part.snp}
                        onChange={(e) => onUpdatePart(part.id, { snp: Math.max(1, parseInt(e.target.value) || 1) })}
                        className="input-editable px-2 py-1 text-right font-mono text-xs w-16"
                      />
                    </td>
                    <td className="px-4 py-2 text-right">
                      <input
                        type="number"
                        min="0"
                        value={part.dailyConsumption}
                        onChange={(e) => onUpdatePart(part.id, { dailyConsumption: Math.max(0, parseInt(e.target.value) || 0) })}
                        className="input-editable px-2 py-1 text-right font-mono text-xs w-18"
                      />
                    </td>
                    <td className="px-4 py-3 text-right">
                      <DataBar
                        value={part.safetyStock}
                        max={part.maxStock || 100}
                        label={part.safetyStock}
                        unit={cfg.qtyUnit}
                      />
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-[var(--color-muted)]">
                      {part.maxStock} {cfg.qtyUnit}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[var(--color-positive)] bg-green-50 px-2 py-0.5 rounded-full">
                        <CheckCircle className="w-3 h-3" /> ACTIVE
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => {
                          if (confirm(`Remove part ${part.id} (${part.name})?`)) {
                            onDeletePart(part.id);
                          }
                        }}
                        className="p-1 text-[var(--color-muted)] hover:text-[var(--color-negative)] transition-colors rounded"
                        title="Delete part"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Bar */}
        <div className="px-6 py-3 border-t border-[var(--color-border)] flex items-center justify-between text-xs text-[var(--color-muted)]">
          <div>
            Showing <span className="font-semibold text-[var(--color-primary)]">{(currentPage - 1) * pageSize + 1}</span> to{' '}
            <span className="font-semibold text-[var(--color-primary)]">
              {Math.min(currentPage * pageSize, filteredParts.length)}
            </span> of <span className="font-semibold text-[var(--color-primary)]">{filteredParts.length}</span> parts
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

      {/* Add Part Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(5, 28, 44, 0.4)', backdropFilter: 'blur(8px)' }}>
          <div className="bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] w-full max-w-lg p-6 animate-fade-up">
            <h3 className="font-heading text-lg font-bold text-[var(--color-primary)] mb-1">
              Register New Manufacturing Part
            </h3>
            <p className="text-xs text-[var(--color-muted)] mb-4">
              Enter part attributes. Safety stock is auto-calculated using the global buffer factor.
            </p>

            <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold uppercase tracking-table-head text-[var(--color-muted)] mb-1">
                    Part ID
                  </label>
                  <input
                    type="text"
                    required
                    value={newPartForm.id}
                    onChange={(e) => setNewPartForm({ ...newPartForm, id: e.target.value })}
                    className="w-full px-3 py-1.5 border border-[var(--color-border)] rounded-[var(--radius-sm)] font-mono"
                  />
                </div>
                <div>
                  <label className="block font-semibold uppercase tracking-table-head text-[var(--color-muted)] mb-1">
                    Process Source
                  </label>
                  <select
                    value={newPartForm.processSource}
                    onChange={(e) => setNewPartForm({ ...newPartForm, processSource: e.target.value as ProcessSource })}
                    className="w-full px-3 py-1.5 border border-[var(--color-border)] rounded-[var(--radius-sm)] bg-white"
                  >
                    <option value="Laser">Laser Cutting</option>
                    <option value="Bending">Press Bending</option>
                    <option value="Machining">Precision Machining</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-table-head text-[var(--color-muted)] mb-1">
                  Part Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Front Gusset Plate"
                  value={newPartForm.name}
                  onChange={(e) => setNewPartForm({ ...newPartForm, name: e.target.value })}
                  className="w-full px-3 py-1.5 border border-[var(--color-border)] rounded-[var(--radius-sm)]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold uppercase tracking-table-head text-[var(--color-muted)] mb-1">
                    Material / Spec
                  </label>
                  <input
                    type="text"
                    value={newPartForm.spec}
                    onChange={(e) => setNewPartForm({ ...newPartForm, spec: e.target.value })}
                    className="w-full px-3 py-1.5 border border-[var(--color-border)] rounded-[var(--radius-sm)]"
                  />
                </div>
                <div>
                  <label className="block font-semibold uppercase tracking-table-head text-[var(--color-muted)] mb-1">
                    Supermarket Bin Location
                  </label>
                  <input
                    type="text"
                    value={newPartForm.location}
                    onChange={(e) => setNewPartForm({ ...newPartForm, location: e.target.value })}
                    className="w-full px-3 py-1.5 border border-[var(--color-border)] rounded-[var(--radius-sm)] font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold uppercase tracking-table-head text-[var(--color-muted)] mb-1">
                    SNP (Standard Pack Qty)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={newPartForm.snp}
                    onChange={(e) => setNewPartForm({ ...newPartForm, snp: parseInt(e.target.value) || 1 })}
                    className="w-full px-3 py-1.5 border border-[var(--color-border)] rounded-[var(--radius-sm)] font-mono"
                  />
                </div>
                <div>
                  <label className="block font-semibold uppercase tracking-table-head text-[var(--color-muted)] mb-1">
                    Daily Base Consumption
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={newPartForm.dailyConsumption}
                    onChange={(e) => setNewPartForm({ ...newPartForm, dailyConsumption: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-1.5 border border-[var(--color-border)] rounded-[var(--radius-sm)] font-mono"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[var(--color-border)]">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 border border-[var(--color-border)] rounded-[var(--radius-sm)] hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[var(--color-accent)] text-white rounded-[var(--radius-sm)] hover:opacity-90"
                >
                  Save & Calculate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
