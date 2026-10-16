import React, { useState } from 'react';
import {
  Cpu,
  Plus,
  Trash2,
  Truck,
  CheckCircle,
  AlertCircle,
  Clock
} from 'lucide-react';
import { AppState, StationItem, StationType } from '../types';
import { getSystemConfig } from '../utils/engine';

interface StationsViewProps {
  state: AppState;
  onUpdateStation: (stationId: string, updates: Partial<StationItem>) => void;
  onAddStation: (newStation: StationItem) => void;
  onDeleteStation: (stationId: string) => void;
}

export const StationsView: React.FC<StationsViewProps> = ({
  state,
  onUpdateStation,
  onAddStation,
  onDeleteStation
}) => {
  const cfg = getSystemConfig(state);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newStationForm, setNewStationForm] = useState<Partial<StationItem>>({
    id: `ST-ROBOT-${String(state.stations.length + 1).padStart(2, '0')}`,
    name: 'Welding Workstation',
    type: 'Robot',
    defaultTrolleyId: `TR-${String(state.stations.length + 1).padStart(2, '0')}`,
    maxBoxes: cfg.trolleyMaxSnp
  });

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStationForm.id || !newStationForm.name) return;

    onAddStation({
      id: newStationForm.id,
      name: newStationForm.name,
      type: (newStationForm.type as StationType) || 'Robot',
      defaultTrolleyId: newStationForm.defaultTrolleyId || 'TR-01',
      maxBoxes: cfg.trolleyMaxSnp
    });

    setShowAddModal(false);
  };

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
              04_MST_Station Workstations & Trolley Assets
            </h2>
            <p className="text-xs text-[var(--color-muted)]">
              Welding robot cells and manual fabrication bays, coupled with designated material transport trolleys.
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-white bg-[var(--color-accent)] rounded-[var(--radius-sm)] hover:opacity-90 transition-opacity shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Register Workstation</span>
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-[var(--radius-md)] shadow-[var(--shadow-sm)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[var(--table-header-bg)] text-[var(--color-primary)] uppercase tracking-table-head font-semibold border-b border-[var(--table-header-sep)]">
              <tr>
                <th className="px-4 py-3">Station Code</th>
                <th className="px-4 py-3">Workstation Name</th>
                <th className="px-4 py-3">Technology Type</th>
                <th className="px-4 py-3">Designated Trolley ID</th>
                <th className="px-4 py-3 text-right">Max Box Capacity</th>
                <th className="px-4 py-3 text-center">Active Schedules</th>
                <th className="px-4 py-3 text-center">Trolley Asset State</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
              {state.stations.map((st) => {
                const activePlanCount = state.plans.filter(p => p.stationId === st.id && p.status === 'Released').length;
                const activeTrolleyTasks = state.trolleyTasks.filter(t => t.trolleyId === st.defaultTrolleyId);
                const isDelivering = activeTrolleyTasks.some(t => t.status === 'In-Transit');

                return (
                  <tr key={st.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-4 py-3 font-mono font-bold text-[var(--color-primary)]">
                      {st.id}
                    </td>
                    <td className="px-4 py-2">
                      <input
                        type="text"
                        value={st.name}
                        onChange={(e) => onUpdateStation(st.id, { name: e.target.value })}
                        className="input-editable px-2 py-1 text-xs w-full max-w-sm font-medium"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                        st.type === 'Robot'
                          ? 'bg-blue-50 text-[var(--color-accent)]'
                          : 'bg-gray-100 text-[var(--color-primary)]'
                      }`}>
                        {st.type} Welding
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <input
                        type="text"
                        value={st.defaultTrolleyId}
                        onChange={(e) => onUpdateStation(st.id, { defaultTrolleyId: e.target.value })}
                        className="input-editable px-2 py-1 font-mono text-xs w-24 font-bold text-[var(--color-primary)]"
                      />
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-[var(--color-body-text)]">
                      {cfg.trolleyMaxSnp} Boxes / Trolley
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium ${
                        activePlanCount > 0
                          ? 'bg-blue-50 text-[var(--color-accent)] font-semibold'
                          : 'bg-gray-100 text-[var(--color-muted)]'
                      }`}>
                        {activePlanCount > 0 ? `🚀 ${activePlanCount} Active Plan(s)` : '⚪ Idle'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      {isDelivering ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[var(--color-accent)] bg-blue-50 px-2.5 py-0.5 rounded-full">
                          <Truck className="w-3 h-3" /> In-Transit Dispatch
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[var(--color-positive)] bg-green-50 px-2.5 py-0.5 rounded-full">
                          <CheckCircle className="w-3 h-3" /> Ready / Parked
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => {
                          if (confirm(`Delete station ${st.id}?`)) {
                            onDeleteStation(st.id);
                          }
                        }}
                        className="p-1 text-[var(--color-muted)] hover:text-[var(--color-negative)] transition-colors rounded"
                        title="Delete station"
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

      {/* Add Station Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(5, 28, 44, 0.4)', backdropFilter: 'blur(8px)' }}>
          <div className="bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] w-full max-w-md p-6 animate-fade-up">
            <h3 className="font-heading text-lg font-bold text-[var(--color-primary)] mb-1">
              Register New Welding Workstation
            </h3>
            <p className="text-xs text-[var(--color-muted)] mb-4">
              Add robotic workstation or manual welding stall to the factory routing floor.
            </p>

            <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold uppercase tracking-table-head text-[var(--color-muted)] mb-1">
                  Station Code (ID)
                </label>
                <input
                  type="text"
                  required
                  value={newStationForm.id}
                  onChange={(e) => setNewStationForm({ ...newStationForm, id: e.target.value })}
                  className="w-full px-3 py-1.5 border border-[var(--color-border)] rounded-[var(--radius-sm)] font-mono"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-table-head text-[var(--color-muted)] mb-1">
                  Workstation Name
                </label>
                <input
                  type="text"
                  required
                  value={newStationForm.name}
                  onChange={(e) => setNewStationForm({ ...newStationForm, name: e.target.value })}
                  className="w-full px-3 py-1.5 border border-[var(--color-border)] rounded-[var(--radius-sm)]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold uppercase tracking-table-head text-[var(--color-muted)] mb-1">
                    Station Type
                  </label>
                  <select
                    value={newStationForm.type}
                    onChange={(e) => setNewStationForm({ ...newStationForm, type: e.target.value as StationType })}
                    className="w-full px-3 py-1.5 border border-[var(--color-border)] rounded-[var(--radius-sm)] bg-white"
                  >
                    <option value="Robot">Robot Welding</option>
                    <option value="Manual">Manual Welding</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold uppercase tracking-table-head text-[var(--color-muted)] mb-1">
                    Assigned Trolley ID
                  </label>
                  <input
                    type="text"
                    required
                    value={newStationForm.defaultTrolleyId}
                    onChange={(e) => setNewStationForm({ ...newStationForm, defaultTrolleyId: e.target.value })}
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
                  Save Station
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
