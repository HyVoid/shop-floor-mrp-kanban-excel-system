import React, { useState } from 'react';
import { X, Upload, Download, FileText, CheckCircle2, AlertTriangle } from 'lucide-react';
import { CsvImportType, downloadCsvTemplate, parseCsvText } from '../utils/csv';
import { AppState, PartItem, BomItem, ShiftPlanItem, InventoryItem, WorkReportItem } from '../types';

interface CsvImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  state: AppState;
  onImportSuccess: (newState: AppState) => void;
}

export const CsvImportModal: React.FC<CsvImportModalProps> = ({
  isOpen,
  onClose,
  state,
  onImportSuccess
}) => {
  const [importType, setImportType] = useState<CsvImportType>('parts');
  const [mode, setMode] = useState<'append' | 'replace'>('append');
  const [parsedRows, setParsedRows] = useState<string[][]>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  const [fileName, setFileName] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMsg('');
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        const matrix = parseCsvText(text);
        if (matrix.length < 2) {
          setErrorMsg('CSV must contain a header row and at least one data row.');
          setParsedRows([]);
          setHeaders([]);
          return;
        }
        setHeaders(matrix[0]);
        setParsedRows(matrix.slice(1));
      } catch (err) {
        setErrorMsg('Failed to parse CSV file: ' + (err as Error).message);
      }
    };
    reader.readAsText(file);
  };

  const handleExecuteImport = () => {
    if (parsedRows.length === 0) {
      setErrorMsg('No rows to import.');
      return;
    }

    try {
      const nextState: AppState = JSON.parse(JSON.stringify(state));

      if (importType === 'parts') {
        const newItems: PartItem[] = parsedRows.map((r, idx) => ({
          id: r[0] || `P-${Date.now()}-${idx}`,
          name: r[1] || 'Unnamed Part',
          processSource: (r[2] === 'Bending' || r[2] === 'Machining') ? r[2] : 'Laser',
          spec: r[3] || 'Standard',
          unit: 'PCS',
          location: r[4] || 'A-01-01',
          snp: Math.max(1, parseInt(r[5], 10) || 10),
          dailyConsumption: Math.max(1, parseInt(r[6], 10) || 20),
          safetyStock: 0,
          maxStock: 0,
          status: 'ACTIVE'
        }));

        if (mode === 'replace') {
          nextState.parts = newItems;
        } else {
          // Merge by ID
          const existingMap = new Map(nextState.parts.map(p => [p.id, p]));
          for (const item of newItems) {
            existingMap.set(item.id, item);
          }
          nextState.parts = Array.from(existingMap.values());
        }
      } else if (importType === 'bom') {
        const newItems: BomItem[] = parsedRows.map((r, idx) => ({
          id: `BOM-${Date.now()}-${idx}`,
          componentId: r[0] || 'WC-001',
          componentName: r[1] || 'Assembly',
          partId: r[2] || 'P-1001',
          qtyPerAssembly: Math.max(1, parseInt(r[3], 10) || 1)
        }));

        if (mode === 'replace') {
          nextState.bom = newItems;
        } else {
          nextState.bom = [...nextState.bom, ...newItems];
        }
      } else if (importType === 'plans') {
        const newItems: ShiftPlanItem[] = parsedRows.map((r, idx) => ({
          id: `PLN-${Date.now()}-${idx}`,
          date: r[0] || new Date().toISOString().slice(0, 10),
          shift: r[1] || 'Shift-1',
          stationId: r[2] || 'ST-ROBOT-01',
          componentId: r[3] || 'WC-001',
          plannedQty: Math.max(1, parseInt(r[4], 10) || 20),
          status: (r[5] === 'Released' || r[5] === 'Completed') ? r[5] : 'Planned'
        }));

        if (mode === 'replace') {
          nextState.plans = newItems;
        } else {
          nextState.plans = [...nextState.plans, ...newItems];
        }
      } else if (importType === 'inventories') {
        const newItems: InventoryItem[] = parsedRows.map(r => ({
          partId: r[0] || 'P-1001',
          openingStock: parseInt(r[1], 10) || 0,
          intakeToday: parseInt(r[2], 10) || 0,
          stockAdjustment: parseInt(r[3], 10) || 0
        }));

        if (mode === 'replace') {
          nextState.inventories = newItems;
        } else {
          const invMap = new Map(nextState.inventories.map(i => [i.partId, i]));
          for (const item of newItems) {
            invMap.set(item.partId, item);
          }
          nextState.inventories = Array.from(invMap.values());
        }
      } else if (importType === 'reports') {
        const newItems: WorkReportItem[] = parsedRows.map((r, idx) => ({
          id: r[0] || `REP-${Date.now()}-${idx}`,
          date: r[1] || new Date().toISOString().slice(0, 10),
          shift: r[2] || 'Shift-1',
          stationId: r[3] || 'ST-ROBOT-01',
          componentId: r[4] || 'WC-001',
          actualQty: Math.max(0, parseInt(r[5], 10) || 0),
          scrapQty: Math.max(0, parseInt(r[6], 10) || 0),
          downtimeRemarks: r[7] || ''
        }));

        if (mode === 'replace') {
          nextState.reports = newItems;
        } else {
          nextState.reports = [...nextState.reports, ...newItems];
        }
      }

      onImportSuccess(nextState);
      onClose();
    } catch (err) {
      setErrorMsg('Failed to apply import: ' + (err as Error).message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(5, 28, 44, 0.4)', backdropFilter: 'blur(8px)' }}>
      <div className="bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-fade-up">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[var(--color-border)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Upload className="w-5 h-5 text-[var(--color-accent)]" />
            <div>
              <h3 className="font-heading text-lg font-bold text-[var(--color-primary)]">
                Bulk CSV Import Engine
              </h3>
              <p className="text-xs text-[var(--color-muted)]">
                Import and batch-update manufacturing data with real-time recalculation
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          {/* Target selection */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-table-head text-[var(--color-primary)] mb-1.5">
                Target Data Domain
              </label>
              <select
                value={importType}
                onChange={(e) => {
                  setImportType(e.target.value as CsvImportType);
                  setParsedRows([]);
                  setHeaders([]);
                  setFileName('');
                  setErrorMsg('');
                }}
                className="w-full text-xs px-3 py-2 border border-[var(--color-border)] rounded-[var(--radius-sm)] focus:outline-none focus:border-[var(--color-accent)]"
              >
                <option value="parts">02_MST_Part (Part Master Data)</option>
                <option value="bom">03_MST_BOM (Welding Structure BOM)</option>
                <option value="plans">05_PLN_Shift (Shift Production Plans)</option>
                <option value="inventories">07_INV_Super (Supermarket Inventory)</option>
                <option value="reports">09_ACT_Report (Work Completion Reports)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-table-head text-[var(--color-primary)] mb-1.5">
                Import Strategy
              </label>
              <div className="flex gap-4 mt-2">
                <label className="flex items-center gap-2 text-xs cursor-pointer">
                  <input
                    type="radio"
                    name="importMode"
                    value="append"
                    checked={mode === 'append'}
                    onChange={() => setMode('append')}
                    className="accent-[var(--color-accent)]"
                  />
                  <span>Append / Update</span>
                </label>
                <label className="flex items-center gap-2 text-xs cursor-pointer">
                  <input
                    type="radio"
                    name="importMode"
                    value="replace"
                    checked={mode === 'replace'}
                    onChange={() => setMode('replace')}
                    className="accent-[var(--color-accent)]"
                  />
                  <span>Replace Table</span>
                </label>
              </div>
            </div>
          </div>

          {/* Template Download */}
          <div className="bg-[var(--color-bg)] rounded-[var(--radius-md)] p-3.5 flex items-center justify-between border border-[var(--color-border)]">
            <div className="flex items-center gap-2.5">
              <FileText className="w-4 h-4 text-[var(--color-accent)]" />
              <span className="text-xs text-[var(--color-body-text)] font-medium">
                Standard {importType.toUpperCase()} CSV Template
              </span>
            </div>
            <button
              onClick={() => downloadCsvTemplate(importType)}
              className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-accent)] hover:underline"
            >
              <Download className="w-3.5 h-3.5" />
              Download Template
            </button>
          </div>

          {/* File Picker */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-table-head text-[var(--color-primary)] mb-1.5">
              Upload CSV File
            </label>
            <div className="border-2 border-dashed border-[var(--color-border)] hover:border-[var(--color-accent)] rounded-[var(--radius-md)] p-6 text-center cursor-pointer transition-colors relative">
              <input
                type="file"
                accept=".csv,text/csv"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              />
              <Upload className="w-8 h-8 text-[var(--color-muted)] mx-auto mb-2" />
              <p className="text-xs text-[var(--color-primary)] font-medium">
                {fileName ? fileName : 'Click or drag & drop CSV file here'}
              </p>
              <p className="text-[11px] text-[var(--color-muted)] mt-1">
                UTF-8 encoded comma-separated values (.csv)
              </p>
            </div>
          </div>

          {errorMsg && (
            <div className="flex items-center gap-2 text-xs text-[var(--color-negative)] bg-[var(--anomaly-bg)] p-3 rounded-[var(--radius-sm)]">
              <AlertTriangle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Preview */}
          {parsedRows.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-table-head text-[var(--color-primary)]">
                  Preview (First {Math.min(parsedRows.length, 5)} of {parsedRows.length} rows)
                </span>
                <span className="text-xs text-[var(--color-positive)] font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {parsedRows.length} rows parsed
                </span>
              </div>
              <div className="max-h-40 overflow-auto border border-[var(--color-border)] rounded-[var(--radius-sm)]">
                <table className="w-full text-[11px] text-left">
                  <thead className="bg-[var(--table-header-bg)] text-[var(--color-primary)] font-semibold border-b border-[var(--color-border)]">
                    <tr>
                      {headers.map((h, i) => (
                        <th key={i} className="px-2.5 py-1.5 whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {parsedRows.slice(0, 5).map((row, rIdx) => (
                      <tr key={rIdx} className="border-b border-[var(--color-border)]">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="px-2.5 py-1 whitespace-nowrap text-[var(--color-body-text)]">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[var(--color-bg)] border-t border-[var(--color-border)] flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium text-[var(--color-primary)] bg-white border border-[var(--color-border)] rounded-[var(--radius-sm)] hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            disabled={parsedRows.length === 0}
            onClick={handleExecuteImport}
            className="px-4 py-1.5 text-xs font-medium text-white bg-[var(--color-accent)] rounded-[var(--radius-sm)] hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Apply & Recalculate ({parsedRows.length} rows)
          </button>
        </div>
      </div>
    </div>
  );
};
