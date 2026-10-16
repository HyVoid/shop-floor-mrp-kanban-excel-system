import React, { useState } from 'react';
import {
  GitMerge,
  Search,
  Plus,
  Trash2,
  Filter,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import { AppState, BomItem } from '../types';
import { getSystemConfig } from '../utils/engine';

interface BomMasterViewProps {
  state: AppState;
  onUpdateBom: (bomId: string, qty: number) => void;
  onAddBomItem: (newItem: BomItem) => void;
  onDeleteBomItem: (bomId: string) => void;
}

export const BomMasterView: React.FC<BomMasterViewProps> = ({
  state,
  onUpdateBom,
  onAddBomItem,
  onDeleteBomItem
}) => {
  const cfg = getSystemConfig(state);
  const [selectedComp, setSelectedComp] = useState<string>('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  // Unique list of components
  const uniqueComponents = Array.from(
    new Set(state.bom.map(b => b.componentId))
  ).map(compId => {
    const item = state.bom.find(b => b.componentId === compId);
    return { id: compId, name: item?.componentName || compId };
  });

  const [newBomForm, setNewBomForm] = useState({
    componentId: uniqueComponents[0]?.id || 'WC-001',
    componentName: uniqueComponents[0]?.name || 'Welding Assembly',
    partId: state.parts[0]?.id || 'P-1001',
    qtyPerAssembly: 1
  });

  const partsMap = new Map(state.parts.map(p => [p.id, p]));

  const filteredBom = state.bom.filter(b => {
    const part = partsMap.get(b.partId);
    const matchComp = selectedComp === 'ALL' || b.componentId === selectedComp;
    const matchSearch =
      b.componentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.componentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.partId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (part && part.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchComp && matchSearch;
  });

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existingComp = uniqueComponents.find(c => c.id === newBomForm.componentId);

    onAddBomItem({
      id: `BOM-${Date.now()}`,
      componentId: newBomForm.componentId,
      componentName: existingComp ? existingComp.name : newBomForm.componentName,
      partId: newBomForm.partId,
      qtyPerAssembly: Math.max(1, Number(newBomForm.qtyPerAssembly) || 1)
    });

    setShowAddModal(false);
  };

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Header */}
      <div className="bg-white rounded-[var(--radius-md)] p-6 shadow-[var(--shadow-sm)] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--table-header-bg)] flex items-center justify-center text-[var(--color-primary)]">
            <GitMerge className="w-5 h-5 text-[var(--color-primary)]" />
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-[var(--color-primary)] tracking-heading">
              03_MST_BOM Welding Assembly Structure (BOM)
            </h2>
            <p className="text-xs text-[var(--color-muted)]">
              Lightweight parent-child BOM definitions mapping 50 welding assemblies to 500 discrete structural sub-components.
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-white bg-[var(--color-accent)] rounded-[var(--radius-sm)] hover:opacity-90 transition-opacity shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Add Part to BOM</span>
        </button>
      </div>

      {/* Filter / Search Bar */}
      <div className="bg-white rounded-[var(--radius-md)] p-4 shadow-[var(--shadow-sm)] flex flex-wrap items-center justify-between gap-4">
        <div className="relative flex-1 min-w-[240px] max-w-md">
          <Search className="w-4 h-4 text-[var(--color-muted)] absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search Component ID, Name, or Child Part..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 text-xs border border-[var(--color-border)] rounded-[var(--radius-sm)] focus:outline-none focus:border-[var(--color-accent)]"
          />
        </div>

        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-[var(--color-muted)]" />
            <span className="text-[11px] font-semibold uppercase tracking-table-head text-[var(--color-muted)]">
              Filter Assembly:
            </span>
          </div>
          <select
            value={selectedComp}
            onChange={(e) => setSelectedComp(e.target.value)}
            className="px-2.5 py-1.5 text-xs border border-[var(--color-border)] rounded-[var(--radius-sm)] focus:outline-none focus:border-[var(--color-accent)] bg-white max-w-[280px]"
          >
            <option value="ALL">All Assemblies ({uniqueComponents.length})</option>
            {uniqueComponents.map((c) => (
              <option key={c.id} value={c.id}>
                {c.id} - {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* BOM Table */}
      <div className="bg-white rounded-[var(--radius-md)] shadow-[var(--shadow-sm)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[var(--table-header-bg)] text-[var(--color-primary)] uppercase tracking-table-head font-semibold border-b border-[var(--table-header-sep)]">
              <tr>
                <th className="px-4 py-3">Assembly ID</th>
                <th className="px-4 py-3">Assembly Name</th>
                <th className="px-4 py-3">Child Part ID</th>
                <th className="px-4 py-3">Part Name (Looked up)</th>
                <th className="px-4 py-3">Source Process</th>
                <th className="px-4 py-3">Supermarket Bin</th>
                <th className="px-4 py-3 text-right">Unit Qty (Qty per Assy)</th>
                <th className="px-4 py-3 text-center">Structure Validity</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
              {filteredBom.length === 0 ? (
                <tr>
                  <td colSpan={9} className="px-6 py-8 text-center text-[var(--color-muted)]">
                    No BOM records match your selection.
                  </td>
                </tr>
              ) : (
                filteredBom.map((item) => {
                  const part = partsMap.get(item.partId);
                  const isValid = !!part && item.qtyPerAssembly > 0;

                  return (
                    <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-4 py-3 font-mono font-bold text-[var(--color-primary)]">
                        {item.componentId}
                      </td>
                      <td className="px-4 py-3 font-medium text-[var(--color-body-text)]">
                        {item.componentName}
                      </td>
                      <td className="px-4 py-3 font-mono font-semibold text-[var(--color-accent)]">
                        {item.partId}
                      </td>
                      <td className="px-4 py-3 text-[var(--color-body-text)]">
                        {part ? part.name : <span className="text-[var(--color-negative)]">Unknown Part</span>}
                      </td>
                      <td className="px-4 py-3 text-[var(--color-muted)]">
                        {part ? part.processSource : 'N/A'}
                      </td>
                      <td className="px-4 py-3 font-mono text-[var(--color-muted)]">
                        {part ? part.location : 'N/A'}
                      </td>
                      <td className="px-4 py-2 text-right">
                        <input
                          type="number"
                          min="1"
                          value={item.qtyPerAssembly}
                          onChange={(e) => onUpdateBom(item.id, Math.max(1, parseInt(e.target.value) || 1))}
                          className="input-editable px-2 py-1 text-right font-mono font-bold text-xs w-18 text-[var(--color-primary)]"
                        />
                      </td>
                      <td className="px-4 py-3 text-center">
                        {isValid ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[var(--color-positive)] bg-green-50 px-2 py-0.5 rounded-full">
                            <CheckCircle className="w-3 h-3" /> Valid Link
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[var(--color-negative)] bg-red-50 px-2 py-0.5 rounded-full">
                            <AlertTriangle className="w-3 h-3" /> Unregistered Part
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <button
                          onClick={() => {
                            if (confirm(`Remove ${item.partId} from ${item.componentId}?`)) {
                              onDeleteBomItem(item.id);
                            }
                          }}
                          className="p-1 text-[var(--color-muted)] hover:text-[var(--color-negative)] transition-colors rounded"
                          title="Delete BOM item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add BOM Item Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(5, 28, 44, 0.4)', backdropFilter: 'blur(8px)' }}>
          <div className="bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] w-full max-w-md p-6 animate-fade-up">
            <h3 className="font-heading text-lg font-bold text-[var(--color-primary)] mb-1">
              Add Component to Assembly BOM
            </h3>
            <p className="text-xs text-[var(--color-muted)] mb-4">
              Bind a child structural part to an assembly and define standard usage quantity.
            </p>

            <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold uppercase tracking-table-head text-[var(--color-muted)] mb-1">
                  Target Welding Assembly
                </label>
                <select
                  value={newBomForm.componentId}
                  onChange={(e) => {
                    const comp = uniqueComponents.find(c => c.id === e.target.value);
                    setNewBomForm({
                      ...newBomForm,
                      componentId: e.target.value,
                      componentName: comp ? comp.name : newBomForm.componentName
                    });
                  }}
                  className="w-full px-3 py-1.5 border border-[var(--color-border)] rounded-[var(--radius-sm)] bg-white"
                >
                  {uniqueComponents.map(c => (
                    <option key={c.id} value={c.id}>{c.id} - {c.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-table-head text-[var(--color-muted)] mb-1">
                  Child Part
                </label>
                <select
                  value={newBomForm.partId}
                  onChange={(e) => setNewBomForm({ ...newBomForm, partId: e.target.value })}
                  className="w-full px-3 py-1.5 border border-[var(--color-border)] rounded-[var(--radius-sm)] bg-white"
                >
                  {state.parts.map(p => (
                    <option key={p.id} value={p.id}>{p.id} - {p.name} ({p.processSource})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-table-head text-[var(--color-muted)] mb-1">
                  Single Unit Usage (Qty per Assembly)
                </label>
                <input
                  type="number"
                  min="1"
                  required
                  value={newBomForm.qtyPerAssembly}
                  onChange={(e) => setNewBomForm({ ...newBomForm, qtyPerAssembly: parseInt(e.target.value) || 1 })}
                  className="w-full px-3 py-1.5 border border-[var(--color-border)] rounded-[var(--radius-sm)] font-mono"
                />
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
                  Save BOM Link
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
