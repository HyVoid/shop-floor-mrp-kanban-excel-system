import React, { useState } from 'react';
import {
  CalendarDays,
  Plus,
  Trash2,
  PlayCircle,
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react';
import { AppState, ShiftPlanItem, PlanStatus } from '../types';
import { getSystemConfig } from '../utils/engine';
import { InsightBlock } from '../components/InsightBlock';

interface ShiftPlanViewProps {
  state: AppState;
  onUpdatePlan: (planId: string, updates: Partial<ShiftPlanItem>) => void;
  onAddPlan: (newPlan: ShiftPlanItem) => void;
  onDeletePlan: (planId: string) => void;
}

export const ShiftPlanView: React.FC<ShiftPlanViewProps> = ({
  state,
  onUpdatePlan,
  onAddPlan,
  onDeletePlan
}) => {
  const cfg = getSystemConfig(state);
  const [showAddModal, setShowAddModal] = useState(false);

  const uniqueComponents = Array.from(
    new Set(state.bom.map(b => b.componentId))
  ).map(compId => {
    const item = state.bom.find(b => b.componentId === compId);
    return { id: compId, name: item?.componentName || compId };
  });

  const [newPlanForm, setNewPlanForm] = useState<Partial<ShiftPlanItem>>({
    date: '2026-10-08',
    shift: 'Shift-1',
    stationId: state.stations[0]?.id || 'ST-ROBOT-01',
    componentId: uniqueComponents[0]?.id || 'WC-001',
    plannedQty: 20,
    status: 'Released'
  });

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddPlan({
      id: `PLN-${Date.now()}`,
      date: newPlanForm.date || '2026-10-08',
      shift: newPlanForm.shift || 'Shift-1',
      stationId: newPlanForm.stationId || 'ST-ROBOT-01',
      componentId: newPlanForm.componentId || 'WC-001',
      plannedQty: Math.max(1, Number(newPlanForm.plannedQty) || 1),
      status: (newPlanForm.status as PlanStatus) || 'Planned'
    });
    setShowAddModal(false);
  };

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Header */}
      <div className="bg-white rounded-[var(--radius-md)] p-6 shadow-[var(--shadow-sm)] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--table-header-bg)] flex items-center justify-center text-[var(--color-primary)]">
            <CalendarDays className="w-5 h-5 text-[var(--color-primary)]" />
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-[var(--color-primary)] tracking-heading">
              05_PLN_Shift Shift Production Planning Schedule
            </h2>
            <p className="text-xs text-[var(--color-muted)]">
              Primary production drive source. Releasing a plan automatically triggers BOM explosion in the Demand Engine.
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-white bg-[var(--color-accent)] rounded-[var(--radius-sm)] hover:opacity-90 transition-opacity shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>New Shift Plan</span>
        </button>
      </div>

      {/* Insight */}
      <InsightBlock title="INSTANT PULL EXPLOSION ENGINE">
        Whenever a plan status is switched to <strong>Released</strong>, the Demand Engine immediately explodes the assembly into all child components, tests supermarket on-hand inventory, and generates replenishment signals for upstream laser, bending, and machining work centers without any delay.
      </InsightBlock>

      {/* Plans Table */}
      <div className="bg-white rounded-[var(--radius-md)] shadow-[var(--shadow-sm)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[var(--table-header-bg)] text-[var(--color-primary)] uppercase tracking-table-head font-semibold border-b border-[var(--table-header-sep)]">
              <tr>
                <th className="px-4 py-3">Schedule Date</th>
                <th className="px-4 py-3">Shift</th>
                <th className="px-4 py-3">Target Station</th>
                <th className="px-4 py-3">Welding Assembly</th>
                <th className="px-4 py-3">Assembly Description</th>
                <th className="px-4 py-3 text-right">Target Qty (Planned)</th>
                <th className="px-4 py-3 text-center">Part Types</th>
                <th className="px-4 py-3 text-right">Total Parts Gross</th>
                <th className="px-4 py-3 text-center">Plan Status</th>
                <th className="px-4 py-3">Unique Key</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
              {state.plans.map((plan) => {
                const station = state.stations.find(s => s.id === plan.stationId);
                const compBoms = state.bom.filter(b => b.componentId === plan.componentId);
                const partTypesCount = compBoms.length;
                const totalPartsGross = plan.plannedQty * compBoms.reduce((acc, b) => acc + b.qtyPerAssembly, 0);
                const uniqueKey = `${plan.date.replace(/-/g, '')}_${plan.shift}_${plan.stationId}_${plan.componentId}`;

                return (
                  <tr key={plan.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-4 py-3 font-mono font-medium text-[var(--color-primary)]">
                      {plan.date}
                    </td>
                    <td className="px-4 py-3 font-mono font-bold text-[var(--color-primary)]">
                      {plan.shift}
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-mono font-bold text-[var(--color-primary)]">{plan.stationId}</span>
                      <span className="text-[11px] text-[var(--color-muted)] ml-1">({station?.type || 'Robot'})</span>
                    </td>
                    <td className="px-4 py-3 font-mono font-bold text-[var(--color-accent)]">
                      {plan.componentId}
                    </td>
                    <td className="px-4 py-3 font-medium text-[var(--color-body-text)]">
                      {compBoms[0]?.componentName || plan.componentId}
                    </td>
                    <td className="px-4 py-2 text-right">
                      <input
                        type="number"
                        min="1"
                        value={plan.plannedQty}
                        onChange={(e) => onUpdatePlan(plan.id, { plannedQty: Math.max(1, parseInt(e.target.value) || 1) })}
                        className="input-editable px-2 py-1 text-right font-mono font-bold text-xs w-20 text-[var(--color-primary)]"
                      />
                    </td>
                    <td className="px-4 py-3 text-center font-mono">
                      {partTypesCount} types
                    </td>
                    <td className="px-4 py-3 text-right font-mono font-bold text-[var(--color-primary)]">
                      {totalPartsGross.toLocaleString()} {cfg.qtyUnit}
                    </td>
                    <td className="px-4 py-2 text-center">
                      <select
                        value={plan.status}
                        onChange={(e) => onUpdatePlan(plan.id, { status: e.target.value as PlanStatus })}
                        className={`text-xs px-2.5 py-1 rounded-full font-semibold border transition-all cursor-pointer ${
                          plan.status === 'Released'
                            ? 'bg-blue-50 text-[var(--color-accent)] border-[var(--color-accent)]'
                            : plan.status === 'Completed'
                            ? 'bg-green-50 text-[var(--color-positive)] border-green-300'
                            : 'bg-gray-50 text-[var(--color-muted)] border-gray-300'
                        }`}
                      >
                        <option value="Planned">Planned</option>
                        <option value="Released">🚀 Released</option>
                        <option value="Completed">✅ Completed</option>
                      </select>
                    </td>
                    <td className="px-4 py-3 font-mono text-[10px] text-[var(--color-muted)]">
                      {uniqueKey}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => {
                          if (confirm(`Delete plan ${plan.componentId} on ${plan.stationId}?`)) {
                            onDeletePlan(plan.id);
                          }
                        }}
                        className="p-1 text-[var(--color-muted)] hover:text-[var(--color-negative)] transition-colors rounded"
                        title="Delete plan"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Plan Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(5, 28, 44, 0.4)', backdropFilter: 'blur(8px)' }}>
          <div className="bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] w-full max-w-md p-6 animate-fade-up">
            <h3 className="font-heading text-lg font-bold text-[var(--color-primary)] mb-1">
              Create Shift Production Plan
            </h3>
            <p className="text-xs text-[var(--color-muted)] mb-4">
              Schedule target assembly output. When status is 'Released', demand will explode immediately.
            </p>

            <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold uppercase tracking-table-head text-[var(--color-muted)] mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={newPlanForm.date}
                    onChange={(e) => setNewPlanForm({ ...newPlanForm, date: e.target.value })}
                    className="w-full px-3 py-1.5 border border-[var(--color-border)] rounded-[var(--radius-sm)] font-mono"
                  />
                </div>
                <div>
                  <label className="block font-semibold uppercase tracking-table-head text-[var(--color-muted)] mb-1">
                    Shift
                  </label>
                  <select
                    value={newPlanForm.shift}
                    onChange={(e) => setNewPlanForm({ ...newPlanForm, shift: e.target.value })}
                    className="w-full px-3 py-1.5 border border-[var(--color-border)] rounded-[var(--radius-sm)] bg-white font-mono"
                  >
                    <option value="Shift-1">Shift-1 (Day)</option>
                    <option value="Shift-2">Shift-2 (Night)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-table-head text-[var(--color-muted)] mb-1">
                  Target Workstation
                </label>
                <select
                  value={newPlanForm.stationId}
                  onChange={(e) => setNewPlanForm({ ...newPlanForm, stationId: e.target.value })}
                  className="w-full px-3 py-1.5 border border-[var(--color-border)] rounded-[var(--radius-sm)] bg-white"
                >
                  {state.stations.map(s => (
                    <option key={s.id} value={s.id}>{s.id} - {s.name} ({s.type})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-table-head text-[var(--color-muted)] mb-1">
                  Welding Assembly
                </label>
                <select
                  value={newPlanForm.componentId}
                  onChange={(e) => setNewPlanForm({ ...newPlanForm, componentId: e.target.value })}
                  className="w-full px-3 py-1.5 border border-[var(--color-border)] rounded-[var(--radius-sm)] bg-white"
                >
                  {uniqueComponents.map(c => (
                    <option key={c.id} value={c.id}>{c.id} - {c.name}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold uppercase tracking-table-head text-[var(--color-muted)] mb-1">
                    Planned Output (Units)
                  </label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={newPlanForm.plannedQty}
                    onChange={(e) => setNewPlanForm({ ...newPlanForm, plannedQty: parseInt(e.target.value) || 1 })}
                    className="w-full px-3 py-1.5 border border-[var(--color-border)] rounded-[var(--radius-sm)] font-mono"
                  />
                </div>
                <div>
                  <label className="block font-semibold uppercase tracking-table-head text-[var(--color-muted)] mb-1">
                    Initial Status
                  </label>
                  <select
                    value={newPlanForm.status}
                    onChange={(e) => setNewPlanForm({ ...newPlanForm, status: e.target.value as PlanStatus })}
                    className="w-full px-3 py-1.5 border border-[var(--color-border)] rounded-[var(--radius-sm)] bg-white"
                  >
                    <option value="Released">🚀 Released (Active)</option>
                    <option value="Planned">Planned (Draft)</option>
                  </select>
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
                  Confirm & Explode BOM
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
