import React from 'react';
import { Settings, ShieldCheck, AlertCircle, RefreshCw } from 'lucide-react';
import { AppState, SystemParam } from '../types';
import { InsightBlock } from '../components/InsightBlock';

interface SysConfigViewProps {
  state: AppState;
  onUpdateParam: (id: string, newValue: number | string) => void;
}

export const SysConfigView: React.FC<SysConfigViewProps> = ({
  state,
  onUpdateParam
}) => {
  const validateParam = (param: SystemParam): { text: string; isError: boolean } => {
    if (typeof param.value === 'number') {
      if (param.value < 0) return { text: '❌ Negative value forbidden', isError: true };
      if (param.code.includes('PCT') && param.value > 2.0) {
        return { text: '⚠️ Ratio unusually high (>200%)', isError: true };
      }
    }
    return { text: '✅ Verified Valid', isError: false };
  };

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Header */}
      <div className="bg-white rounded-[var(--radius-md)] p-6 shadow-[var(--shadow-sm)]">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--table-header-bg)] flex items-center justify-center text-[var(--color-primary)]">
            <Settings className="w-5 h-5 text-[var(--color-primary)]" />
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-[var(--color-primary)] tracking-heading">
              01_SYS System Parameters & Threshold Configuration
            </h2>
            <p className="text-xs text-[var(--color-muted)]">
              Centralized master control for buffer ratios, shift takt times, kit readiness thresholds, and quality scrap tolerance.
            </p>
          </div>
        </div>
      </div>

      {/* Insight */}
      <InsightBlock title="ZERO HARDCODED PRINCIPLE & CASCADE RECALCULATION">
        Every formula across the entire application references these parameters dynamically. Modifying the Safety Buffer Ratio (e.g. from 15% to 20%) or the Trolley Box Limit immediately recalculates all 500 parts, supermarket pull order quantities, and delivery dispatch readiness in real time.
      </InsightBlock>

      {/* Table */}
      <div className="bg-white rounded-[var(--radius-md)] shadow-[var(--shadow-sm)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[var(--table-header-bg)] text-[var(--color-primary)] uppercase tracking-table-head font-semibold border-b border-[var(--table-header-sep)]">
              <tr>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Param Code</th>
                <th className="px-4 py-3">Business Parameter Name</th>
                <th className="px-4 py-3 text-right">Configured Value (Editable)</th>
                <th className="px-4 py-3">Unit / Metric</th>
                <th className="px-4 py-3">Formatted Dynamic Reference</th>
                <th className="px-4 py-3 text-center">Audit Validation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
              {state.params.map((param) => {
                const validation = validateParam(param);

                return (
                  <tr key={param.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-4 py-3 font-medium text-[var(--color-muted)]">
                      {param.category}
                    </td>
                    <td className="px-4 py-3 font-mono font-bold text-[var(--color-primary)]">
                      {param.code}
                    </td>
                    <td className="px-4 py-3 font-medium text-[var(--color-body-text)]">
                      {param.name}
                    </td>
                    <td className="px-4 py-2 text-right">
                      <input
                        type={typeof param.value === 'number' ? 'number' : 'text'}
                        step={param.code.includes('PCT') || param.code.includes('TOLERANCE') ? '0.01' : '1'}
                        value={param.value}
                        onChange={(e) => {
                          const val = typeof param.value === 'number'
                            ? parseFloat(e.target.value) || 0
                            : e.target.value;
                          onUpdateParam(param.id, val);
                        }}
                        className="input-editable px-2.5 py-1 text-right font-mono font-bold text-[var(--color-primary)] text-xs w-28 focus:w-32 transition-all"
                      />
                    </td>
                    <td className="px-4 py-3 text-[var(--color-muted)] font-mono">
                      {param.unit}
                    </td>
                    <td className="px-4 py-3 text-[var(--color-body-text)] font-mono text-[11px]">
                      {`${param.name} : ${param.value} (${param.unit})`}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium ${
                          validation.isError
                            ? 'bg-[var(--anomaly-bg)] text-[var(--color-negative)]'
                            : 'bg-green-50 text-[var(--color-positive)]'
                        }`}
                      >
                        {validation.text}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
