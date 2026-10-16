import React from 'react';
import { Lightbulb } from 'lucide-react';

interface InsightBlockProps {
  title?: string;
  children: React.ReactNode;
  actionText?: string;
  onAction?: () => void;
  className?: string;
}

export const InsightBlock: React.FC<InsightBlockProps> = ({
  title = 'OPERATIONAL INSIGHT & DECISION SO-WHAT',
  children,
  actionText,
  onAction,
  className = ''
}) => {
  return (
    <div className={`insight-block my-4 ${className}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-2.5">
          <Lightbulb className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
          <div>
            <div className="text-[11px] font-semibold tracking-table-head uppercase text-[var(--color-accent)] mb-1">
              {title}
            </div>
            <div className="text-[13px] leading-relaxed text-[var(--color-body-text)]">
              {children}
            </div>
          </div>
        </div>
        {actionText && onAction && (
          <button
            onClick={onAction}
            className="flex-shrink-0 px-3 py-1 bg-[var(--color-accent)] text-white text-[12px] font-medium rounded-[var(--radius-sm)] hover:opacity-90 transition-opacity"
          >
            {actionText}
          </button>
        )}
      </div>
    </div>
  );
};
