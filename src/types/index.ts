export type ActiveTab =
  | '10_DSH_Board'
  | '01_SYS'
  | '02_MST_Part'
  | '03_MST_BOM'
  | '04_MST_Station'
  | '05_PLN_Shift'
  | '06_ENG_Demand'
  | '07_INV_Super'
  | '08_LOG_Trolley'
  | '09_ACT_Report';

export type ProcessSource = 'Laser' | 'Bending' | 'Machining';

export type StationType = 'Robot' | 'Manual';

export type PlanStatus = 'Planned' | 'Released' | 'Completed';

export type ReplenishStatus = 'Normal' | 'Replenish' | 'Urgent';

export type KitStatus = 'Ready' | 'Partly' | 'Blocked';

export type TrolleyDispatchStatus = 'Loading' | 'In-Transit' | 'Delivered';

export interface SystemParam {
  id: string;
  category: string;
  code: string;
  name: string;
  value: number | string;
  unit: string;
  description: string;
}

export interface PartItem {
  id: string; // Part ID e.g. P-1001
  name: string;
  processSource: ProcessSource;
  spec: string;
  unit: string;
  location: string; // Supermarket bin e.g. A-02-03
  snp: number; // Standard Number of Package
  dailyConsumption: number;
  safetyStock: number; // Computed or override
  maxStock: number; // 2 * safetyStock
  status: 'ACTIVE' | 'INCOMPLETE';
}

export interface BomItem {
  id: string; // Unique row id
  componentId: string; // Comp ID e.g. WC-001
  componentName: string;
  partId: string;
  qtyPerAssembly: number; // Standard single usage
}

export interface StationItem {
  id: string; // Station ID e.g. ST-ROBOT-01
  name: string;
  type: StationType;
  defaultTrolleyId: string;
  maxBoxes: number;
}

export interface ShiftPlanItem {
  id: string; // Unique schedule row id
  date: string; // YYYY-MM-DD
  shift: string; // Shift-1 | Shift-2
  stationId: string;
  componentId: string;
  plannedQty: number;
  status: PlanStatus;
}

export interface InventoryItem {
  partId: string;
  openingStock: number;
  intakeToday: number; // Arrived from Laser/Bending/Machining today
  stockAdjustment: number; // Audit count correction (+/-)
}

export interface TrolleyTaskItem {
  id: string; // TSK-0001
  shift: string;
  stationId: string;
  trolleyId: string;
  partId: string;
  loadQty: number;
  status: TrolleyDispatchStatus;
  confirmed: boolean;
  deliveryTime: string;
  operator: string;
}

export interface WorkReportItem {
  id: string; // REP-0001
  date: string; // YYYY-MM-DD
  shift: string;
  stationId: string;
  componentId: string;
  actualQty: number;
  scrapQty: number;
  downtimeRemarks: string;
}

export interface AppState {
  params: SystemParam[];
  parts: PartItem[];
  bom: BomItem[];
  stations: StationItem[];
  plans: ShiftPlanItem[];
  inventories: InventoryItem[];
  trolleyTasks: TrolleyTaskItem[];
  reports: WorkReportItem[];
  lastSaved: string;
}

// Calculated models
export interface ComputedDemandItem {
  scheduleKey: string;
  date: string;
  shift: string;
  stationId: string;
  componentId: string;
  componentName: string;
  partId: string;
  partName: string;
  processSource: ProcessSource;
  location: string;
  qtyPerAssembly: number;
  grossDemand: number;
  availableStock: number;
  riskFlag: 'Sufficient' | 'Partial' | 'Critical';
}

export interface ComputedInventoryItem {
  partId: string;
  partName: string;
  location: string;
  processSource: ProcessSource;
  openingStock: number;
  intakeToday: number;
  consumedQty: number;
  stockAdjustment: number;
  physicalStock: number;
  inTransitQty: number;
  netAvailable: number;
  totalDemand: number;
  shortageQty: number;
  replenishStatus: ReplenishStatus;
  suggestedQty: number;
  safetyStock: number;
  maxStock: number;
  snp: number;
}

export interface ComputedTrolleyTaskItem extends TrolleyTaskItem {
  partName: string;
  location: string;
  kitStatus: KitStatus;
  isOverloaded: boolean;
  boxCount: number;
  maxBoxes: number;
}

export interface ComputedReportItem extends WorkReportItem {
  componentName: string;
  matchedPlannedQty: number;
  varianceQty: number;
  scrapRate: number;
  isScrapAlarm: boolean;
  verification: 'VERIFIED' | 'INVALID';
}
