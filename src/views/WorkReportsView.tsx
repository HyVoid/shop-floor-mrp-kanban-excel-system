import React, { useState } from 'react';
import {
  ClipboardCheck,
  Plus,
  Trash2,
  AlertTriangle,
  CheckCircle,
  Clock,
  RotateCcw
} from 'lucide-react';
import { AppState, WorkReportItem } from '../types';
import { computeAll, getSystemConfig } from '../utils/engine';
import { InsightBlock } from '../components/InsightBlock';

interface WorkReportsViewProps {
  state: AppState;
  onUpdateReport: (reportId: string, updates: Partial<WorkReportItem>) => void;
  onAddReport: (newReport: WorkReportItem) => void;
  onDeleteReport: (reportId: string) => void;
}

export const WorkReportsView: React.FC<WorkReportsViewProps> = ({
  state,
  onUpdateReport,
  onAddReport,
  onDeleteReport
}) => {
  const { cfg, computedReports } = computeAll(state);
  const [showAddModal, setShowAddModal] = useState(false);

  const uniqueComponents = Array.from(
    new Set(state.bom.map(b => b.componentId))
  ).map(compId => {
    const item = state.bom.find(b => b.componentId === compId);
    return { id: compId, name: item?.componentName || compId };
  });

  const [newReportForm, setNewReportForm] = useState<Partial<WorkReportItem>>({
    id: `REP-${String(state.reports.length + 1).padStart(4, '0')}`,
    date: '2026-10-08',
    shift: 'Shift-1',
    stationId: state.stations[0]?.id || 'ST-ROBOT-01',
    componentId: uniqueComponents[0]?.id || 'WC-001',
    actualQty: 24,
    scrapQty: 0,
    downtimeRemarks: 'Nominal welding cycle'
  });

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddReport({
      id: newReportForm.id || `REP-${Date.now()}`,
      date: newReportForm.date || '2026-10-08',
      shift: newReportForm.shift || 'Shift-1',
      stationId: newReportForm.stationId || 'ST-ROBOT-01',
      componentId: newReportForm.componentId || 'WC-001',
      actualQty: Math.max(0, Number(newReportForm.actualQty) || 0),
      scrapQty: Math.max(0, Number(newReportForm.scrapQty) || 0),
      downtimeRemarks: newReportForm.downtimeRemarks || ''
    });

    setShowAddModal(false);
  };

  const scrapAlarmCount = computedReports.filter(r => r.isScrapAlarm).length;

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Header */}
      <div className="bg-white rounded-[var(--radius-md)] p-6 shadow-[var(--shadow-sm)] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--table-header-bg)] flex items-center justify-center text-[var(--color-primary)]">
            <ClipboardCheck className="w-5 h-5 text-[var(--color-primary)]" />
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-[var(--color-primary)] tracking-heading">
              09_ACT_Report Workstation Work Completion Reporting
            </h2>
            <p className="text-xs text-[var(--color-muted)]">
              Daily closed-loop driver: Reporting completed assemblies immediately consumes BOM parts from Supermarket stock in real time.
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-white bg-[var(--color-accent)] rounded-[var(--radius-sm)] hover:opacity-90 transition-opacity shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Submit Work Report</span>
        </button>
      </div>

      {/* Insight */}
      {scrapAlarmCount > 0 ? (
        <InsightBlock
          title="QUALITY CONTROL ANOMALY: SCRAP RATE EXCEEDED"
          className="anomaly-row"
        >
          {scrapAlarmCount} station production report(s) show scrap rates exceeding the <strong>{((cfg.scrapTolerance || 0.02) * 100).toFixed(1)}% tolerance limit</strong>. Robotic torch alignment, shielding gas flow, or weld fit-up tolerances should be inspected immediately on the flagged stations.
        </InsightBlock>
      ) : (
        <InsightBlock title="DAILY SELF-REGULATING CLOSED LOOP ACTIVE">
          Every piece reported here automatically backflushes the corresponding child components across the Supermarket Inventory. Current scrap rates across all workstations are within tolerance.
        </InsightBlock>
      )}

      {/* Reports Table */}
      <div className="bg-white rounded-[var(--radius-md)] shadow-[var(--shadow-sm)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[var(--table-header-bg)] text-[var(--color-primary)] uppercase tracking-table-head font-semibold border-b border-[var(--table-header-sep)]">
              <tr>
                <th className="px-4 py-3">Report ID</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Shift</th>
                <th className="px-4 py-3">Station</th>
                <th className="px-4 py-3">Assembly ID</th>
                <th className="px-4 py-3">Assembly Name</th>
                <th className="px-4 py-3 text-right">Actual Output</th>
                <th className="px-4 py-3 text-right">Scrap Units</th>
                <th className="px-4 py-3 text-right">Plan Target</th>
                <th className="px-4 py-3 text-right">Plan Variance</th>
                <th className="px-4 py-3 text-center">Scrap Alarm</th>
                <th className="px-4 py-3">Downtime Remarks</th>
                <th className="px-4 py-3 text-center">Status</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
              {computedReports.length === 0 ? (
                <tr>
                  <td colSpan={14} className="px-6 py-8 text-center text-[var(--color-muted)]">
                    No work completion reports logged yet.
                  </td>
                </tr>
              ) : (
                computedReports.map((report) => {
                  const isAlarm = report.isScrapAlarm;

                  return (
                    <tr
                      key={report.id}
                      className={isAlarm ? 'anomaly-row' : 'hover:bg-gray-50/50 transition-colors'}
                    >
                      <td className="px-4 py-3 font-mono font-bold text-[var(--color-primary)]">
                        {report.id}
                      </td>
                      <td className="px-4 py-3 font-mono text-[var(--color-body-text)]">
                        {report.date}
                      </td>
                      <td className="px-4 py-3 font-mono font-bold text-[var(--color-primary)]">
                        {report.shift}
                      </td>
                      <td className="px-4 py-3 font-mono font-bold text-[var(--color-primary)]">
                        {report.stationId}
                      </td>
                      <td className="px-4 py-3 font-mono font-bold text-[var(--color-accent)]">
                        {report.componentId}
                      </td>
                      <td className="px-4 py-3 font-medium text-[var(--color-body-text)]">
                        {report.componentName}
                      </td>

                      {/* Actual Output (Editable) */}
                      <td className="px-4 py-2 text-right">
                        <input
                          type="number"
                          min="0"
                          value={report.actualQty}
                          onChange={(e) => onUpdateReport(report.id, { actualQty: Math.max(0, parseInt(e.target.value) || 0) })}
                          className="input-editable px-2 py-1 text-right font-mono font-bold text-xs w-18 text-[var(--color-primary)]"
                        />
                      </td>

                      {/* Scrap Units (Editable) */}
                      <td className="px-4 py-2 text-right">
                        <input
                          type="number"
                          min="0"
                          value={report.scrapQty}
                          onChange={(e) => onUpdateReport(report.id, { scrapQty: Math.max(0, parseInt(e.target.value) || 0) })}
                          className="input-editable px-2 py-1 text-right font-mono font-bold text-xs w-16 text-[var(--color-negative)]"
                        />
                      </td>

                      {/* Matched Plan */}
                      <td className="px-4 py-3 text-right font-mono text-[var(--color-muted)]">
                        {report.matchedPlannedQty} {cfg.qtyUnit}
                      </td>

                      {/* Variance */}
                      <td className="px-4 py-3 text-right font-mono font-bold">
                        <span className={report.varianceQty < 0 ? 'text-[var(--color-muted)]' : 'text-[var(--color-primary)]'}>
                          {report.varianceQty > 0 ? `+${report.varianceQty}` : report.varianceQty}
                        </span>
                      </td>

                      {/* Scrap Alarm */}
                      <td className="px-4 py-3 text-center">
                        {report.isScrapAlarm ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-white bg-[var(--color-negative)] px-2.5 py-0.5 rounded-full">
                            <AlertTriangle className="w-3 h-3" /> {(report.scrapRate * 100).toFixed(1)}% Exceeded
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[var(--color-positive)] bg-green-50 px-2 py-0.5 rounded-full">
                            <CheckCircle className="w-3 h-3" /> {(report.scrapRate * 100).toFixed(1)}% OK
                          </span>
                        )}
                      </td>

                      {/* Remarks (Editable) */}
                      <td className="px-4 py-2">
                        <input
                          type="text"
                          value={report.downtimeRemarks}
                          onChange={(e) => onUpdateReport(report.id, { downtimeRemarks: e.target.value })}
                          className="input-editable px-2 py-1 text-xs w-52 truncate"
                        />
                      </td>

                      {/* Verification */}
                      <td className="px-4 py-3 text-center">
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold text-[var(--color-positive)] bg-green-50">
                          {report.verification}
                        </span>
                      </td>

                      <td className="px-4 py-3 text-center">
                        <button
                          onClick={() => {
                            if (confirm(`Remove report ${report.id}?`)) {
                              onDeleteReport(report.id);
                            }
                          }}
                          className="p-1 text-[var(--color-muted)] hover:text-[var(--color-negative)] transition-colors rounded"
                          title="Delete report"
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

      {/* Add Report Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(5, 28, 44, 0.4)', backdropFilter: 'blur(8px)' }}>
          <div className="bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] w-full max-w-md p-6 animate-fade-up">
            <h3 className="font-heading text-lg font-bold text-[var(--color-primary)] mb-1">
              Log Station Work Completion Report
            </h3>
            <p className="text-xs text-[var(--color-muted)] mb-4">
              Record qualified output and scrap units to trigger automatic supermarket backflushing.
            </p>

            <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold uppercase tracking-table-head text-[var(--color-muted)] mb-1">
                    Report ID
                  </label>
                  <input
                    type="text"
                    required
                    value={newReportForm.id}
                    onChange={(e) => setNewReportForm({ ...newReportForm, id: e.target.value })}
                    className="w-full px-3 py-1.5 border border-[var(--color-border)] rounded-[var(--radius-sm)] font-mono"
                  />
                </div>
                <div>
                  <label className="block font-semibold uppercase tracking-table-head text-[var(--color-muted)] mb-1">
                    Shift
                  </label>
                  <select
                    value={newReportForm.shift}
                    onChange={(e) => setNewReportForm({ ...newReportForm, shift: e.target.value })}
                    className="w-full px-3 py-1.5 border border-[var(--color-border)] rounded-[var(--radius-sm)] bg-white font-mono"
                  >
                    <option value="Shift-1">Shift-1</option>
                    <option value="Shift-2">Shift-2</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold uppercase tracking-table-head text-[var(--color-muted)] mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={newReportForm.date}
                    onChange={(e) => setNewReportForm({ ...newReportForm, date: e.target.value })}
                    className="w-full px-3 py-1.5 border border-[var(--color-border)] rounded-[var(--radius-sm)] font-mono"
                  />
                </div>
                <div>
                  <label className="block font-semibold uppercase tracking-table-head text-[var(--color-muted)] mb-1">
                    Station
                  </label>
                  <select
                    value={newReportForm.stationId}
                    onChange={(e) => setNewReportForm({ ...newReportForm, stationId: e.target.value })}
                    className="w-full px-3 py-1.5 border border-[var(--color-border)] rounded-[var(--radius-sm)] bg-white"
                  >
                    {state.stations.map(s => (
                      <option key={s.id} value={s.id}>{s.id} ({s.type})</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-table-head text-[var(--color-muted)] mb-1">
                  Welding Assembly Produced
                </label>
                <select
                  value={newReportForm.componentId}
                  onChange={(e) => setNewReportForm({ ...newReportForm, componentId: e.target.value })}
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
                    Actual Output (Qualified)
                  </label>
                  <input
                    type="number"
                    min="0"
                    required
                    value={newReportForm.actualQty}
                    onChange={(e) => setNewReportForm({ ...newReportForm, actualQty: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-1.5 border border-[var(--color-border)] rounded-[var(--radius-sm)] font-mono"
                  />
                </div>
                <div>
                  <label className="block font-semibold uppercase tracking-table-head text-[var(--color-muted)] mb-1">
                    Scrap Defect Units
                  </label>
                  <input
                    type="number"
                    min="0"
                    required
                    value={newReportForm.scrapQty}
                    onChange={(e) => setNewReportForm({ ...newReportForm, scrapQty: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-1.5 border border-[var(--color-border)] rounded-[var(--radius-sm)] font-mono text-[var(--color-negative)]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-table-head text-[var(--color-muted)] mb-1">
                  Downtime / Anomaly Remarks
                </label>
                <input
                  type="text"
                  placeholder="e.g. 5 min torch tip cleaning"
                  value={newReportForm.downtimeRemarks}
                  onChange={(e) => setNewReportForm({ ...newReportForm, downtimeRemarks: e.target.value })}
                  className="w-full px-3 py-1.5 border border-[var(--color-border)] rounded-[var(--radius-sm)]"
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
                  Submit & Backflush Stock
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
