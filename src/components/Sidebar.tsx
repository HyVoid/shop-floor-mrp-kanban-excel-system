import React, { useRef } from 'react';
import {
  LayoutDashboard,
  ClipboardCheck,
  Store,
  Truck,
  CalendarDays,
  Cpu,
  Package,
  GitMerge,
  Factory,
  Sliders,
  Layers,
  FileSpreadsheet,
  Download,
  Upload,
  RotateCcw,
  Clock,
  X,
  AlertOctagon
} from 'lucide-react';
import { ActiveTab, AppState } from '../types';
import { exportBackup, parseBackupFile } from '../utils/storage';

interface SidebarProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  state: AppState;
  onStateUpdate: (newState: AppState) => void;
  onOpenCsvModal: () => void;
  onOpenResetModal: () => void;
  lastSavedText: string;
  shortageCount: number;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

interface NavSection {
  title: string;
  items: {
    id: ActiveTab;
    label: string;
    code: string;
    icon: React.ElementType;
    badgeCount?: number;
  }[];
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onTabChange,
  state,
  onStateUpdate,
  onOpenCsvModal,
  onOpenResetModal,
  lastSavedText,
  shortageCount,
  isOpenMobile,
  onCloseMobile
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const navSections: NavSection[] = [
    {
      title: 'OPERATIONS & FEEDBACK',
      items: [
        {
          id: '10_DSH_Board',
          label: 'Operations Cockpit',
          code: '10_DSH',
          icon: LayoutDashboard
        },
        {
          id: '09_ACT_Report',
          label: 'Work Completion Reports',
          code: '09_ACT',
          icon: ClipboardCheck
        }
      ]
    },
    {
      title: 'EXECUTION & LOGISTICS',
      items: [
        {
          id: '07_INV_Super',
          label: 'Supermarket Inventory',
          code: '07_INV',
          icon: Store,
          badgeCount: shortageCount
        },
        {
          id: '08_LOG_Trolley',
          label: 'Trolley Dispatch Tasks',
          code: '08_LOG',
          icon: Truck
        }
      ]
    },
    {
      title: 'PLANNING & ENGINE',
      items: [
        {
          id: '05_PLN_Shift',
          label: 'Shift Production Plans',
          code: '05_PLN',
          icon: CalendarDays
        },
        {
          id: '06_ENG_Demand',
          label: 'Demand Engine Explosion',
          code: '06_ENG',
          icon: Cpu
        }
      ]
    },
    {
      title: 'SYSTEM & MASTER DATA',
      items: [
        {
          id: '02_MST_Part',
          label: 'Parts Master Catalog',
          code: '02_MST',
          icon: Package
        },
        {
          id: '03_MST_BOM',
          label: 'Welding Assembly BOM',
          code: '03_BOM',
          icon: GitMerge
        },
        {
          id: '04_MST_Station',
          label: 'Workstations & Trolleys',
          code: '04_STN',
          icon: Factory
        },
        {
          id: '01_SYS',
          label: 'Parameters & Config',
          code: '01_SYS',
          icon: Sliders
        }
      ]
    }
  ];

  const handleBackupFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const restored = await parseBackupFile(file);
      onStateUpdate(restored);
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (err) {
      alert((err as Error).message);
    }
  };

  const sidebarContent = (
    <div className="flex flex-col h-full bg-[var(--nav-bg)] select-none">
      {/* Brand Header */}
      <div className="p-5 border-b border-[var(--nav-border)] flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => {
            onTabChange('10_DSH_Board');
            onCloseMobile();
          }}
        >
          <div className="w-9 h-9 rounded-[var(--radius-sm)] bg-[var(--color-primary)] flex items-center justify-center text-white font-bold shadow-sm">
            <Layers className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-[17px] font-bold text-[var(--color-primary)] tracking-tight leading-tight">
              MFCS CONTROL
            </span>
            <span className="text-[10px] text-[var(--color-muted)] font-medium uppercase tracking-label leading-tight">
              Shop-floor Pull Engine
            </span>
          </div>
        </div>

        {/* Mobile close button */}
        <button
          onClick={onCloseMobile}
          className="lg:hidden p-1 text-[var(--color-muted)] hover:text-[var(--color-primary)] rounded"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Nav List */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {navSections.map((section, sIdx) => (
          <div key={sIdx}>
            <div className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-table-head text-[var(--color-muted)]">
              {section.title}
            </div>
            <div className="space-y-1">
              {section.items.map((item) => {
                const isActive = activeTab === item.id;
                const IconComponent = item.icon;
                const hasAlert = item.badgeCount && item.badgeCount > 0;

                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onTabChange(item.id);
                      onCloseMobile();
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-[var(--radius-sm)] text-[12px] font-medium transition-all text-left relative group ${
                      isActive
                        ? 'bg-[var(--insight-bg)] text-[var(--color-primary)] font-semibold shadow-2xs'
                        : 'text-[var(--nav-text-inactive)] hover:bg-gray-50 hover:text-[var(--color-primary)]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <IconComponent
                        className={`w-4 h-4 flex-shrink-0 transition-colors ${
                          isActive
                            ? 'text-[var(--color-accent)]'
                            : 'text-[var(--color-muted)] group-hover:text-[var(--color-primary)]'
                        }`}
                      />
                      <span className="truncate">{item.label}</span>
                    </div>

                    <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
                      <span
                        className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                          isActive
                            ? 'bg-blue-100 text-[var(--color-accent)] font-semibold'
                            : 'bg-[var(--color-bg)] text-[var(--color-muted)] border border-[var(--color-border)]'
                        }`}
                      >
                        {item.code}
                      </span>
                      {hasAlert && (
                        <span
                          className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-[var(--color-negative)] text-white"
                          title={`${item.badgeCount} parts with shortage`}
                        >
                          <AlertOctagon className="w-2.5 h-2.5" />
                          {item.badgeCount}
                        </span>
                      )}
                    </div>

                    {/* Left Active indicator bar */}
                    {isActive && (
                      <div className="absolute left-0 top-1.5 bottom-1.5 w-1 bg-[var(--color-accent)] rounded-r" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Utilities & Persistence Bar */}
      <div className="p-4 border-t border-[var(--nav-border)] bg-[var(--color-bg)] space-y-3">
        {/* Last Saved Badge */}
        <div className="flex items-center justify-between px-2.5 py-1.5 bg-white rounded-[var(--radius-sm)] border border-[var(--color-border)] text-[11px] shadow-2xs">
          <div className="flex items-center gap-1.5 text-[var(--color-muted)]">
            <Clock className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            <span>Last saved:</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-positive)] animate-pulse" />
            <span className="font-mono text-[var(--color-body-text)] font-semibold text-[10px]">
              {lastSavedText}
            </span>
          </div>
        </div>

        {/* Action Buttons Grid */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          {/* Bulk CSV */}
          <button
            onClick={onOpenCsvModal}
            className="flex items-center justify-center gap-1.5 px-2 py-1.5 text-[11px] font-medium text-[var(--color-primary)] bg-white border border-[var(--color-border)] rounded-[var(--radius-sm)] hover:bg-gray-50 transition-colors shadow-2xs"
            title="Bulk CSV Import for Parts, BOM, Plans, Inventory, or Reports"
          >
            <FileSpreadsheet className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            <span>Bulk CSV</span>
          </button>

          {/* Export Backup */}
          <button
            onClick={() => exportBackup(state)}
            className="flex items-center justify-center gap-1.5 px-2 py-1.5 text-[11px] font-medium text-[var(--color-primary)] bg-white border border-[var(--color-border)] rounded-[var(--radius-sm)] hover:bg-gray-50 transition-colors shadow-2xs"
            title="Export complete state JSON backup"
          >
            <Download className="w-3.5 h-3.5 text-[var(--color-muted)]" />
            <span>Export</span>
          </button>

          {/* Import Backup */}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center justify-center gap-1.5 px-2 py-1.5 text-[11px] font-medium text-[var(--color-primary)] bg-white border border-[var(--color-border)] rounded-[var(--radius-sm)] hover:bg-gray-50 transition-colors shadow-2xs"
            title="Restore state from JSON backup file"
          >
            <Upload className="w-3.5 h-3.5 text-[var(--color-muted)]" />
            <span>Import</span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json,application/json"
            onChange={handleBackupFileSelect}
            className="hidden"
          />

          {/* Reset Data */}
          <button
            onClick={onOpenResetModal}
            className="flex items-center justify-center gap-1.5 px-2 py-1.5 text-[11px] font-medium text-[var(--color-muted)] bg-white border border-[var(--color-border)] hover:text-[var(--color-negative)] hover:border-red-200 transition-colors rounded-[var(--radius-sm)] shadow-2xs"
            title="Reset data to baseline factory defaults"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden lg:flex w-64 xl:w-72 h-screen sticky top-0 flex-shrink-0 border-r border-[var(--nav-border)] z-30 shadow-[var(--shadow-sm)]">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer Overlay */}
      {isOpenMobile && (
        <div
          className="fixed inset-0 z-50 lg:hidden flex"
          style={{ backgroundColor: 'rgba(5, 28, 44, 0.4)', backdropFilter: 'blur(4px)' }}
        >
          <div className="w-72 h-full bg-white shadow-[var(--shadow-lg)] relative animate-fade-up">
            {sidebarContent}
          </div>
          <div className="flex-1" onClick={onCloseMobile} />
        </div>
      )}
    </>
  );
};
