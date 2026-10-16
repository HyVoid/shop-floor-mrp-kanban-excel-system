import React, { useState, useEffect, useCallback } from 'react';
import {
  ActiveTab,
  AppState,
  PartItem,
  BomItem,
  StationItem,
  ShiftPlanItem,
  InventoryItem,
  TrolleyTaskItem,
  WorkReportItem
} from './types';
import { loadSavedState, saveStateToStorage } from './utils/storage';
import { getInitialAppState } from './data/initialData';
import { computeAll } from './utils/engine';
import { Sidebar } from './components/Sidebar';
import { TopHeader } from './components/TopHeader';
import { Footer } from './components/Footer';
import { CsvImportModal } from './components/CsvImportModal';
import { ResetConfirmModal } from './components/ResetConfirmModal';

// Views
import { DashboardView } from './views/DashboardView';
import { SysConfigView } from './views/SysConfigView';
import { PartsMasterView } from './views/PartsMasterView';
import { BomMasterView } from './views/BomMasterView';
import { StationsView } from './views/StationsView';
import { ShiftPlanView } from './views/ShiftPlanView';
import { DemandEngineView } from './views/DemandEngineView';
import { SupermarketView } from './views/SupermarketView';
import { TrolleyTasksView } from './views/TrolleyTasksView';
import { WorkReportsView } from './views/WorkReportsView';

export default function App() {
  const [state, setState] = useState<AppState>(() => loadSavedState());
  const [activeTab, setActiveTab] = useState<ActiveTab>('10_DSH_Board');
  const [lastSavedFormatted, setLastSavedFormatted] = useState<string>('');
  const [isOpenMobile, setIsOpenMobile] = useState<boolean>(false);

  const [isCsvModalOpen, setIsCsvModalOpen] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  // Format last saved time
  useEffect(() => {
    try {
      const d = state.lastSaved ? new Date(state.lastSaved) : new Date();
      setLastSavedFormatted(
        d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
      );
    } catch {
      setLastSavedFormatted('Just now');
    }
  }, [state.lastSaved]);

  // Auto-save to localStorage on state changes
  useEffect(() => {
    const timer = setTimeout(() => {
      const newTimestamp = saveStateToStorage(state);
      const d = new Date(newTimestamp);
      setLastSavedFormatted(
        d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
      );
    }, 400);

    return () => clearTimeout(timer);
  }, [state]);

  // Compute live calculations
  const { computedInventory } = computeAll(state);
  const shortageCount = computedInventory.filter(i => i.shortageQty > 0).length;

  // State Mutators with immediate propagation
  const handleUpdateParam = useCallback((paramId: string, newValue: number | string) => {
    setState(prev => ({
      ...prev,
      params: prev.params.map(p => p.id === paramId ? { ...p, value: newValue } : p)
    }));
  }, []);

  const handleUpdatePart = useCallback((partId: string, updates: Partial<PartItem>) => {
    setState(prev => ({
      ...prev,
      parts: prev.parts.map(p => p.id === partId ? { ...p, ...updates } : p)
    }));
  }, []);

  const handleAddPart = useCallback((newPart: PartItem) => {
    setState(prev => ({
      ...prev,
      parts: [...prev.parts, newPart]
    }));
  }, []);

  const handleDeletePart = useCallback((partId: string) => {
    setState(prev => ({
      ...prev,
      parts: prev.parts.filter(p => p.id !== partId),
      bom: prev.bom.filter(b => b.partId !== partId),
      inventories: prev.inventories.filter(i => i.partId !== partId)
    }));
  }, []);

  const handleUpdateBom = useCallback((bomId: string, qty: number) => {
    setState(prev => ({
      ...prev,
      bom: prev.bom.map(b => b.id === bomId ? { ...b, qtyPerAssembly: qty } : b)
    }));
  }, []);

  const handleAddBomItem = useCallback((newItem: BomItem) => {
    setState(prev => ({
      ...prev,
      bom: [...prev.bom, newItem]
    }));
  }, []);

  const handleDeleteBomItem = useCallback((bomId: string) => {
    setState(prev => ({
      ...prev,
      bom: prev.bom.filter(b => b.id !== bomId)
    }));
  }, []);

  const handleUpdateStation = useCallback((stationId: string, updates: Partial<StationItem>) => {
    setState(prev => ({
      ...prev,
      stations: prev.stations.map(s => s.id === stationId ? { ...s, ...updates } : s)
    }));
  }, []);

  const handleAddStation = useCallback((newStation: StationItem) => {
    setState(prev => ({
      ...prev,
      stations: [...prev.stations, newStation]
    }));
  }, []);

  const handleDeleteStation = useCallback((stationId: string) => {
    setState(prev => ({
      ...prev,
      stations: prev.stations.filter(s => s.id !== stationId)
    }));
  }, []);

  const handleUpdatePlan = useCallback((planId: string, updates: Partial<ShiftPlanItem>) => {
    setState(prev => ({
      ...prev,
      plans: prev.plans.map(p => p.id === planId ? { ...p, ...updates } : p)
    }));
  }, []);

  const handleAddPlan = useCallback((newPlan: ShiftPlanItem) => {
    setState(prev => ({
      ...prev,
      plans: [...prev.plans, newPlan]
    }));
  }, []);

  const handleDeletePlan = useCallback((planId: string) => {
    setState(prev => ({
      ...prev,
      plans: prev.plans.filter(p => p.id !== planId)
    }));
  }, []);

  const handleUpdateInventory = useCallback((partId: string, updates: Partial<InventoryItem>) => {
    setState(prev => {
      const existing = prev.inventories.find(i => i.partId === partId);
      if (existing) {
        return {
          ...prev,
          inventories: prev.inventories.map(i => i.partId === partId ? { ...i, ...updates } : i)
        };
      } else {
        return {
          ...prev,
          inventories: [
            ...prev.inventories,
            {
              partId,
              openingStock: updates.openingStock ?? 0,
              intakeToday: updates.intakeToday ?? 0,
              stockAdjustment: updates.stockAdjustment ?? 0
            }
          ]
        };
      }
    });
  }, []);

  const handleUpdateTask = useCallback((taskId: string, updates: Partial<TrolleyTaskItem>) => {
    setState(prev => ({
      ...prev,
      trolleyTasks: prev.trolleyTasks.map(t => t.id === taskId ? { ...t, ...updates } : t)
    }));
  }, []);

  const handleAddTask = useCallback((newTask: TrolleyTaskItem) => {
    setState(prev => ({
      ...prev,
      trolleyTasks: [...prev.trolleyTasks, newTask]
    }));
  }, []);

  const handleDeleteTask = useCallback((taskId: string) => {
    setState(prev => ({
      ...prev,
      trolleyTasks: prev.trolleyTasks.filter(t => t.id !== taskId)
    }));
  }, []);

  const handleAutoGenerateTasks = useCallback(() => {
    setState(prev => {
      const releasedPlans = prev.plans.filter(p => p.status === 'Released');
      const newTasks: TrolleyTaskItem[] = [];
      let taskIdx = prev.trolleyTasks.length + 1;

      for (const plan of releasedPlans) {
        const station = prev.stations.find(s => s.id === plan.stationId);
        const childBoms = prev.bom.filter(b => b.componentId === plan.componentId);

        for (const bom of childBoms) {
          const loadQty = plan.plannedQty * bom.qtyPerAssembly;
          const existing = prev.trolleyTasks.some(
            t => t.stationId === plan.stationId && t.shift === plan.shift && t.partId === bom.partId
          );
          if (!existing) {
            newTasks.push({
              id: `TSK-${String(taskIdx++).padStart(4, '0')}`,
              shift: plan.shift,
              stationId: plan.stationId,
              trolleyId: station ? station.defaultTrolleyId : 'TR-01',
              partId: bom.partId,
              loadQty,
              status: 'Loading',
              confirmed: false,
              deliveryTime: '',
              operator: 'Logistics Fleet'
            });
          }
        }
      }

      if (newTasks.length === 0) {
        alert('All released plan requirements are already assigned to existing trolley tasks.');
        return prev;
      }

      return {
        ...prev,
        trolleyTasks: [...prev.trolleyTasks, ...newTasks]
      };
    });
  }, []);

  const handleUpdateReport = useCallback((reportId: string, updates: Partial<WorkReportItem>) => {
    setState(prev => ({
      ...prev,
      reports: prev.reports.map(r => r.id === reportId ? { ...r, ...updates } : r)
    }));
  }, []);

  const handleAddReport = useCallback((newReport: WorkReportItem) => {
    setState(prev => ({
      ...prev,
      reports: [...prev.reports, newReport]
    }));
  }, []);

  const handleDeleteReport = useCallback((reportId: string) => {
    setState(prev => ({
      ...prev,
      reports: prev.reports.filter(r => r.id !== reportId)
    }));
  }, []);

  const handleResetData = useCallback(() => {
    const fresh = getInitialAppState();
    setState(fresh);
    saveStateToStorage(fresh);
  }, []);

  return (
    <div className="min-h-screen flex bg-[var(--color-bg)] text-[var(--color-body-text)]">
      {/* Left Sidebar Navigation */}
      <Sidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        state={state}
        onStateUpdate={setState}
        onOpenCsvModal={() => setIsCsvModalOpen(true)}
        onOpenResetModal={() => setIsResetModalOpen(true)}
        lastSavedText={lastSavedFormatted}
        shortageCount={shortageCount}
        isOpenMobile={isOpenMobile}
        onCloseMobile={() => setIsOpenMobile(false)}
      />

      {/* Main Content Body */}
      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        {/* Top Header Bar */}
        <TopHeader
          activeTab={activeTab}
          onOpenMobileSidebar={() => setIsOpenMobile(true)}
          shortageCount={shortageCount}
          lastSavedText={lastSavedFormatted}
        />

        {/* Dynamic Sheet Content */}
        <main className="flex-1 w-full max-w-[1400px] mx-auto px-6 lg:px-10 py-8">
          {activeTab === '10_DSH_Board' && (
            <DashboardView state={state} onNavigateTab={setActiveTab} />
          )}

          {activeTab === '01_SYS' && (
            <SysConfigView state={state} onUpdateParam={handleUpdateParam} />
          )}

          {activeTab === '02_MST_Part' && (
            <PartsMasterView
              state={state}
              onUpdatePart={handleUpdatePart}
              onAddPart={handleAddPart}
              onDeletePart={handleDeletePart}
            />
          )}

          {activeTab === '03_MST_BOM' && (
            <BomMasterView
              state={state}
              onUpdateBom={handleUpdateBom}
              onAddBomItem={handleAddBomItem}
              onDeleteBomItem={handleDeleteBomItem}
            />
          )}

          {activeTab === '04_MST_Station' && (
            <StationsView
              state={state}
              onUpdateStation={handleUpdateStation}
              onAddStation={handleAddStation}
              onDeleteStation={handleDeleteStation}
            />
          )}

          {activeTab === '05_PLN_Shift' && (
            <ShiftPlanView
              state={state}
              onUpdatePlan={handleUpdatePlan}
              onAddPlan={handleAddPlan}
              onDeletePlan={handleDeletePlan}
            />
          )}

          {activeTab === '06_ENG_Demand' && (
            <DemandEngineView state={state} onNavigateTab={setActiveTab} />
          )}

          {activeTab === '07_INV_Super' && (
            <SupermarketView
              state={state}
              onUpdateInventory={handleUpdateInventory}
            />
          )}

          {activeTab === '08_LOG_Trolley' && (
            <TrolleyTasksView
              state={state}
              onUpdateTask={handleUpdateTask}
              onAddTask={handleAddTask}
              onDeleteTask={handleDeleteTask}
              onAutoGenerateTasks={handleAutoGenerateTasks}
            />
          )}

          {activeTab === '09_ACT_Report' && (
            <WorkReportsView
              state={state}
              onUpdateReport={handleUpdateReport}
              onAddReport={handleAddReport}
              onDeleteReport={handleDeleteReport}
            />
          )}
        </main>

        {/* Footer with Privacy Notice */}
        <Footer />
      </div>

      {/* Bulk CSV Import Modal */}
      <CsvImportModal
        isOpen={isCsvModalOpen}
        onClose={() => setIsCsvModalOpen(false)}
        state={state}
        onImportSuccess={setState}
      />

      {/* Reset Confirmation Modal */}
      <ResetConfirmModal
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
        onConfirm={handleResetData}
      />
    </div>
  );
}
