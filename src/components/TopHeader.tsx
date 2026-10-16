import React from 'react';
import { Menu, ShieldAlert, CheckCircle2, Clock } from 'lucide-react';
import { ActiveTab } from '../types';

interface TopHeaderProps {
  activeTab: ActiveTab;
  onOpenMobileSidebar: () => void;
  shortageCount: number;
  lastSavedText: string;
}

const TAB_TITLES: Record<ActiveTab, { title: string; category: string; code: string }> = {
  '10_DSH_Board': {
    title: 'Operations Cockpit & Execution Control Board',
    category: 'Control & Feedback',
    code: '10_DSH'
  },
  '07_INV_Super': {
    title: 'Supermarket WIP & Inventory Monitor',
    category: 'Execution & Logistics',
    code: '07_INV'
  },
  '05_PLN_Shift': {
    title: 'Shift Production Planning Schedule',
    category: 'Planning & Demand Engine',
    code: '05_PLN'
  },
  '06_ENG_Demand': {
    title: 'Material Requirement Calculation Engine',
    category: 'Planning & Demand Engine',
    code: '06_ENG'
  },
  '08_LOG_Trolley': {
    title: 'Trolley Loading & Dispatch Execution Tasks',
    category: 'Execution & Logistics',
    code: '08_LOG'
  },
  '09_ACT_Report': {
    title: 'Workstation Work Completion Reporting',
    category: 'Control & Feedback',
    code: '09_ACT'
  },
  '02_MST_Part': {
    title: 'Parts Master Catalog & Supermarket Locations',
    category: 'System & Master Data',
    code: '02_MST'
  },
  '03_MST_BOM': {
    title: 'Welding Assembly Structure (BOM)',
    category: 'System & Master Data',
    code: '03_BOM'
  },
  '04_MST_Station': {
    title: 'Workstations & Trolley Assets',
    category: 'System & Master Data',
    code: '04_STN'
  },
  '01_SYS': {
    title: 'System Parameters & Threshold Configuration',
    category: 'System & Master Data',
    code: '01_SYS'
  }
};

export const TopHeader: React.FC<TopHeaderProps> = ({
  activeTab,
  onOpenMobileSidebar,
  shortageCount,
  lastSavedText
}) => {
  const current = TAB_TITLES[activeTab] || {
    title: 'Material Flow Control',
    category: 'Shop-floor Layer',
    code: 'MFCS'
  };

  return (
    <header className="h-[52px] bg-white border-b border-[var(--color-border)] sticky top-0 z-20 px-6 lg:px-10 flex items-center justify-between select-none shadow-[var(--shadow-nav)]">
      <div className="flex items-center gap-3">
        {/* Mobile menu trigger */}
        <button
          onClick={onOpenMobileSidebar}
          className="lg:hidden p-1.5 -ml-1.5 text-[var(--color-primary)] hover:bg-gray-100 rounded-[var(--radius-sm)] transition-colors"
          title="Open Navigation Menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Breadcrumb info */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-[var(--color-muted)] font-medium hidden sm:inline">
            {current.category}
          </span>
          <span className="text-[var(--color-border)] hidden sm:inline">/</span>
          <span className="font-mono text-[11px] font-bold text-[var(--color-accent)] bg-[var(--insight-bg)] px-2 py-0.5 rounded-[var(--radius-sm)] border border-[var(--color-border)]">
            {current.code}
          </span>
          <span className="font-heading text-[14px] font-bold text-[var(--color-primary)] truncate max-w-[200px] sm:max-w-md">
            {current.title}
          </span>
        </div>
      </div>

      {/* Right status */}
      <div className="flex items-center gap-3 text-xs">
        {shortageCount > 0 ? (
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[var(--color-negative)] bg-[var(--anomaly-bg)] px-2.5 py-1 rounded-full border border-red-200">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>{shortageCount} Shortages</span>
          </div>
        ) : (
          <div className="hidden sm:flex items-center gap-1 text-[11px] font-medium text-[var(--color-positive)] bg-green-50 px-2.5 py-1 rounded-full border border-green-200">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Buffers Optimal</span>
          </div>
        )}

        <div className="hidden md:flex items-center gap-1.5 text-[11px] text-[var(--color-muted)] font-mono">
          <Clock className="w-3 h-3 text-[var(--color-muted)]" />
          <span>Sync: {lastSavedText}</span>
        </div>
      </div>
    </header>
  );
};
