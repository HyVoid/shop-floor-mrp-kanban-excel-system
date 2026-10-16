import React from 'react';
import { ShieldCheck, HardDrive } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 pt-8 pb-12 border-t border-[var(--color-border)] text-center text-xs text-[var(--color-muted)]">
      <div className="max-w-[1400px] mx-auto px-10 flex flex-col items-center justify-center space-y-2">
        <div className="flex items-center gap-2 text-[var(--color-primary)] font-medium text-[12px]">
          <HardDrive className="w-4 h-4 text-[var(--color-accent)]" />
          <span>Shop-floor Material Flow Control System (MFCS)</span>
          <span className="text-[var(--color-border)]">|</span>
          <span className="text-[var(--color-muted)] font-normal">SaaS Execution & Replenishment Layer</span>
        </div>
        <p className="flex items-center justify-center gap-1.5 text-[11px] text-[var(--color-muted)] max-w-2xl leading-relaxed">
          <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-muted)] flex-shrink-0" />
          <span>
            All storage functions of this tool are maintained in localStorage. The application does not store or transmit any user data to external servers.
          </span>
        </p>
        <p className="text-[10px] text-[var(--color-muted)] opacity-70">
          Client-side reactive computation engine • Zero external tracking • Offline & GitHub Pages ready
        </p>
      </div>
    </footer>
  );
};
