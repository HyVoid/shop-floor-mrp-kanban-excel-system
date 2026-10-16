import React, { useState } from 'react';
import {
  Truck,
  Plus,
  Trash2,
  CheckCircle2,
  AlertTriangle,
  AlertOctagon,
  Clock,
  Sparkles,
  PackageCheck
} from 'lucide-react';
import { AppState, TrolleyTaskItem, TrolleyDispatchStatus } from '../types';
import { computeAll } from '../utils/engine';
import { InsightBlock } from '../components/InsightBlock';

interface TrolleyTasksViewProps {
  state: AppState;
  onUpdateTask: (taskId: string, updates: Partial<TrolleyTaskItem>) => void;
  onAddTask: (newTask: TrolleyTaskItem) => void;
  onDeleteTask: (taskId: string) => void;
  onAutoGenerateTasks: () => void;
}

export const TrolleyTasksView: React.FC<TrolleyTasksViewProps> = ({
  state,
  onUpdateTask,
  onAddTask,
  onDeleteTask,
  onAutoGenerateTasks
}) => {
  const { cfg, computedTrolleyTasks } = computeAll(state);
  const [showAddModal, setShowAddModal] = useState(false);

  const [newTaskForm, setNewTaskForm] = useState<Partial<TrolleyTaskItem>>({
    id: `TSK-${String(state.trolleyTasks.length + 1).padStart(4, '0')}`,
    shift: 'Shift-1',
    stationId: state.stations[0]?.id || 'ST-ROBOT-01',
    trolleyId: state.stations[0]?.defaultTrolleyId || 'TR-01',
    partId: state.parts[0]?.id || 'P-1001',
    loadQty: 25,
    status: 'Loading',
    confirmed: false,
    deliveryTime: '',
    operator: 'Logistics Team'
  });

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const st = state.stations.find(s => s.id === newTaskForm.stationId);

    onAddTask({
      id: newTaskForm.id || `TSK-${Date.now()}`,
      shift: newTaskForm.shift || 'Shift-1',
      stationId: newTaskForm.stationId || 'ST-ROBOT-01',
      trolleyId: st ? st.defaultTrolleyId : 'TR-01',
      partId: newTaskForm.partId || 'P-1001',
      loadQty: Math.max(1, Number(newTaskForm.loadQty) || 1),
      status: (newTaskForm.status as TrolleyDispatchStatus) || 'Loading',
      confirmed: !!newTaskForm.confirmed,
      deliveryTime: newTaskForm.deliveryTime || '',
      operator: newTaskForm.operator || 'Logistics Operator'
    });

    setShowAddModal(false);
  };

  const blockedCount = computedTrolleyTasks.filter(t => t.kitStatus === 'Blocked').length;
  const inTransitCount = computedTrolleyTasks.filter(t => t.status === 'In-Transit').length;

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Header */}
      <div className="bg-white rounded-[var(--radius-md)] p-6 shadow-[var(--shadow-sm)] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--table-header-bg)] flex items-center justify-center text-[var(--color-primary)]">
            <Truck className="w-5 h-5 text-[var(--color-primary)]" />
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-[var(--color-primary)] tracking-heading">
              08_LOG_Trolley Loading & Dispatch Execution Tasks
            </h2>
            <p className="text-xs text-[var(--color-muted)]">
              Kitting picklists and transfer missions transporting standard pack bins from Supermarket to Welding Stations via Trolley containers.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onAutoGenerateTasks}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[var(--color-accent)] bg-[var(--insight-bg)] border border-[var(--color-accent)] rounded-[var(--radius-sm)] hover:bg-blue-50 transition-colors shadow-2xs"
            title="Auto-generate picklist tasks from released plans"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Generate Picklists from Plans</span>
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-white bg-[var(--color-accent)] rounded-[var(--radius-sm)] hover:opacity-90 transition-opacity shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>New Trolley Task</span>
          </button>
        </div>
      </div>

      {/* Insight */}
      {blockedCount > 0 ? (
        <InsightBlock
          title="MATERIAL SHORTAGE BLOCKING TROLLEY DISPATCH"
          className="anomaly-row"
        >
          {blockedCount} trolley delivery task(s) are in a <strong>Blocked Status</strong> because net available supermarket inventory is below the minimum kitting threshold (&lt;80%). Dispatching partial kits creates welding line halts and loose parts disorder.
        </InsightBlock>
      ) : (
        <InsightBlock title="ALL TROLLEYS PRE-KITTED & CLEARED">
          All trolley dispatch tasks are verified as 100% Ready or currently In-Transit. Zero blocked transport containers.
        </InsightBlock>
      )}

      {/* Tasks Table */}
      <div className="bg-white rounded-[var(--radius-md)] shadow-[var(--shadow-sm)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[var(--table-header-bg)] text-[var(--color-primary)] uppercase tracking-table-head font-semibold border-b border-[var(--table-header-sep)]">
              <tr>
                <th className="px-4 py-3">Task ID</th>
                <th className="px-4 py-3">Shift</th>
                <th className="px-4 py-3">Destination Station</th>
                <th className="px-4 py-3">Trolley Container</th>
                <th className="px-4 py-3">Pick Part ID</th>
                <th className="px-4 py-3">Part Name [Supermarket Bin]</th>
                <th className="px-4 py-3 text-right">Load Qty</th>
                <th className="px-4 py-3 text-center">Kit Readiness Status</th>
                <th className="px-4 py-3 text-center">Trolley Volume (Boxes)</th>
                <th className="px-4 py-3 text-center">Dispatch Status</th>
                <th className="px-4 py-3">Delivery Time</th>
                <th className="px-4 py-3">Logistics Handler</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
              {computedTrolleyTasks.length === 0 ? (
                <tr>
                  <td colSpan={13} className="px-6 py-8 text-center text-[var(--color-muted)]">
                    No active trolley logistics tasks. Click "Generate Picklists from Plans" or "New Trolley Task".
                  </td>
                </tr>
              ) : (
                computedTrolleyTasks.map((task) => {
                  const isBlocked = task.kitStatus === 'Blocked';
                  const isDelivered = task.status === 'Delivered';

                  return (
                    <tr
                      key={task.id}
                      className={isBlocked ? 'anomaly-row' : 'hover:bg-gray-50/50 transition-colors'}
                    >
                      <td className="px-4 py-3 font-mono font-bold text-[var(--color-primary)]">
                        {task.id}
                      </td>
                      <td className="px-4 py-3 font-mono font-bold text-[var(--color-primary)]">
                        {task.shift}
                      </td>
                      <td className="px-4 py-3 font-mono font-bold text-[var(--color-primary)]">
                        {task.stationId}
                      </td>
                      <td className="px-4 py-3 font-mono text-[var(--color-accent)] font-semibold">
                        {task.trolleyId}
                      </td>
                      <td className="px-4 py-3 font-mono font-bold text-[var(--color-primary)]">
                        {task.partId}
                      </td>
                      <td className="px-4 py-3 text-[var(--color-body-text)]">
                        <span className="font-medium">{task.partName}</span>{' '}
                        <span className="font-mono text-[11px] text-[var(--color-muted)]">[{task.location}]</span>
                      </td>
                      <td className="px-4 py-2 text-right">
                        <input
                          type="number"
                          min="1"
                          value={task.loadQty}
                          onChange={(e) => onUpdateTask(task.id, { loadQty: Math.max(1, parseInt(e.target.value) || 1) })}
                          className="input-editable px-2 py-1 text-right font-mono font-bold text-xs w-18 text-[var(--color-primary)]"
                        />
                      </td>

                      {/* Kit Readiness */}
                      <td className="px-4 py-3 text-center">
                        {task.kitStatus === 'Ready' ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[var(--color-positive)] bg-green-50 px-2.5 py-0.5 rounded-full">
                            <CheckCircle2 className="w-3 h-3" /> Ready (100%)
                          </span>
                        ) : task.kitStatus === 'Partly' ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-yellow-800 bg-yellow-100 px-2.5 py-0.5 rounded-full">
                            <AlertTriangle className="w-3 h-3" /> Partly Ready
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-white bg-[var(--color-negative)] px-2.5 py-0.5 rounded-full">
                            <AlertOctagon className="w-3 h-3" /> Blocked (Hold)
                          </span>
                        )}
                      </td>

                      {/* Overload check */}
                      <td className="px-4 py-3 text-center font-mono">
                        {task.isOverloaded ? (
                          <span className="text-[var(--color-negative)] font-bold text-[11px]">
                            ⚠️ {task.boxCount}/{task.maxBoxes} Boxes (Overload)
                          </span>
                        ) : (
                          <span className="text-[var(--color-muted)]">
                            {task.boxCount} / {task.maxBoxes} Boxes
                          </span>
                        )}
                      </td>

                      {/* Dispatch Status */}
                      <td className="px-4 py-2 text-center">
                        <select
                          value={task.status}
                          onChange={(e) => {
                            const newStatus = e.target.value as TrolleyDispatchStatus;
                            const nowTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                            onUpdateTask(task.id, {
                              status: newStatus,
                              confirmed: newStatus !== 'Loading',
                              deliveryTime: newStatus === 'Delivered' ? nowTime : task.deliveryTime
                            });
                          }}
                          className={`text-xs px-2.5 py-1 rounded-full font-semibold border cursor-pointer ${
                            task.status === 'Delivered'
                              ? 'bg-green-50 text-[var(--color-positive)] border-green-300'
                              : task.status === 'In-Transit'
                              ? 'bg-blue-50 text-[var(--color-accent)] border-[var(--color-accent)]'
                              : 'bg-gray-50 text-[var(--color-muted)] border-gray-300'
                          }`}
                        >
                          <option value="Loading">Loading (Supermarket)</option>
                          <option value="In-Transit">🚚 In-Transit</option>
                          <option value="Delivered">✅ Delivered</option>
                        </select>
                      </td>

                      {/* Delivery Time */}
                      <td className="px-4 py-2">
                        <input
                          type="text"
                          placeholder="e.g. 08:30"
                          value={task.deliveryTime}
                          onChange={(e) => onUpdateTask(task.id, { deliveryTime: e.target.value })}
                          className="input-editable px-2 py-1 font-mono text-xs w-20 text-center"
                        />
                      </td>

                      {/* Handler */}
                      <td className="px-4 py-2">
                        <input
                          type="text"
                          value={task.operator}
                          onChange={(e) => onUpdateTask(task.id, { operator: e.target.value })}
                          className="input-editable px-2 py-1 text-xs w-32"
                        />
                      </td>

                      <td className="px-4 py-3 text-center">
                        <button
                          onClick={() => {
                            if (confirm(`Remove task ${task.id}?`)) {
                              onDeleteTask(task.id);
                            }
                          }}
                          className="p-1 text-[var(--color-muted)] hover:text-[var(--color-negative)] transition-colors rounded"
                          title="Delete task"
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

      {/* Add Task Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(5, 28, 44, 0.4)', backdropFilter: 'blur(8px)' }}>
          <div className="bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] w-full max-w-md p-6 animate-fade-up">
            <h3 className="font-heading text-lg font-bold text-[var(--color-primary)] mb-1">
              Create Trolley Loading Task
            </h3>
            <p className="text-xs text-[var(--color-muted)] mb-4">
              Schedule a material transport mission from the Supermarket to a welding workstation.
            </p>

            <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold uppercase tracking-table-head text-[var(--color-muted)] mb-1">
                    Task Code
                  </label>
                  <input
                    type="text"
                    required
                    value={newTaskForm.id}
                    onChange={(e) => setNewTaskForm({ ...newTaskForm, id: e.target.value })}
                    className="w-full px-3 py-1.5 border border-[var(--color-border)] rounded-[var(--radius-sm)] font-mono"
                  />
                </div>
                <div>
                  <label className="block font-semibold uppercase tracking-table-head text-[var(--color-muted)] mb-1">
                    Shift
                  </label>
                  <select
                    value={newTaskForm.shift}
                    onChange={(e) => setNewTaskForm({ ...newTaskForm, shift: e.target.value })}
                    className="w-full px-3 py-1.5 border border-[var(--color-border)] rounded-[var(--radius-sm)] bg-white font-mono"
                  >
                    <option value="Shift-1">Shift-1</option>
                    <option value="Shift-2">Shift-2</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-table-head text-[var(--color-muted)] mb-1">
                  Destination Workstation
                </label>
                <select
                  value={newTaskForm.stationId}
                  onChange={(e) => {
                    const st = state.stations.find(s => s.id === e.target.value);
                    setNewTaskForm({
                      ...newTaskForm,
                      stationId: e.target.value,
                      trolleyId: st ? st.defaultTrolleyId : 'TR-01'
                    });
                  }}
                  className="w-full px-3 py-1.5 border border-[var(--color-border)] rounded-[var(--radius-sm)] bg-white"
                >
                  {state.stations.map(s => (
                    <option key={s.id} value={s.id}>{s.id} - {s.name} ({s.defaultTrolleyId})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-table-head text-[var(--color-muted)] mb-1">
                  Part to Transport
                </label>
                <select
                  value={newTaskForm.partId}
                  onChange={(e) => setNewTaskForm({ ...newTaskForm, partId: e.target.value })}
                  className="w-full px-3 py-1.5 border border-[var(--color-border)] rounded-[var(--radius-sm)] bg-white"
                >
                  {state.parts.map(p => (
                    <option key={p.id} value={p.id}>{p.id} - {p.name} [{p.location}]</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold uppercase tracking-table-head text-[var(--color-muted)] mb-1">
                    Load Quantity (PCS)
                  </label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={newTaskForm.loadQty}
                    onChange={(e) => setNewTaskForm({ ...newTaskForm, loadQty: parseInt(e.target.value) || 1 })}
                    className="w-full px-3 py-1.5 border border-[var(--color-border)] rounded-[var(--radius-sm)] font-mono"
                  />
                </div>
                <div>
                  <label className="block font-semibold uppercase tracking-table-head text-[var(--color-muted)] mb-1">
                    Assigned Operator
                  </label>
                  <input
                    type="text"
                    value={newTaskForm.operator}
                    onChange={(e) => setNewTaskForm({ ...newTaskForm, operator: e.target.value })}
                    className="w-full px-3 py-1.5 border border-[var(--color-border)] rounded-[var(--radius-sm)]"
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
                  Save Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
