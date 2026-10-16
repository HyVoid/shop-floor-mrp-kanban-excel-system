import React from 'react';

interface DataBarProps {
  value: number;
  max: number;
  label?: string | number;
  unit?: string;
  isNegativeAlert?: boolean;
}

export const DataBar: React.FC<DataBarProps> = ({
  value,
  max,
  label,
  unit,
  isNegativeAlert = false
}) => {
  const safeMax = max > 0 ? max : 100;
  const percentage = Math.min(100, Math.max(0, (value / safeMax) * 100));
  const displayText = label !== undefined ? label : value;

  return (
    <div className="flex items-center justify-end gap-2 w-full">
      <span className={`text-[12px] font-mono font-medium ${isNegativeAlert ? 'text-[var(--color-negative)] font-semibold' : 'text-[var(--color-primary)]'}`}>
        {displayText} {unit ? <span className="text-[10px] text-[var(--color-muted)] font-normal">{unit}</span> : null}
      </span>
      <div
        className="w-16 h-2 rounded-sm overflow-hidden flex-shrink-0"
        style={{ backgroundColor: 'rgba(5, 28, 44, 0.10)' }}
      >
        <div
          className="h-full rounded-sm transition-all duration-300"
          style={{
            width: `${percentage}%`,
            backgroundColor: isNegativeAlert ? 'var(--color-negative)' : 'var(--color-accent)'
          }}
        />
      </div>
    </div>
  );
};
