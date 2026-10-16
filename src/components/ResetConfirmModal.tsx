import React from 'react';
import { RotateCcw, AlertTriangle } from 'lucide-react';

interface ResetConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const ResetConfirmModal: React.FC<ResetConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(5, 28, 44, 0.4)', backdropFilter: 'blur(8px)' }}>
      <div className="bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] w-full max-w-md p-6 animate-fade-up">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-[var(--anomaly-bg)] flex items-center justify-center text-[var(--color-negative)]">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold text-[var(--color-primary)]">
              Reset All Factory Data?
            </h3>
            <p className="text-xs text-[var(--color-muted)]">
              This action restores initial parameters, parts, BOM, and shift schedules.
            </p>
          </div>
        </div>

        <p className="text-xs text-[var(--color-body-text)] mb-6 leading-relaxed">
          All modifications stored in your local browser session will be overwritten with the baseline manufacturing reference dataset. Are you sure you want to proceed?
        </p>

        <div className="flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-[var(--color-primary)] bg-white border border-[var(--color-border)] rounded-[var(--radius-sm)] hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-[var(--color-negative)] rounded-[var(--radius-sm)] hover:opacity-90 transition-opacity"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Yes, Reset All Data
          </button>
        </div>
      </div>
    </div>
  );
};
