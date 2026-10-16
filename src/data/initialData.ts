import {
  AppState,
  SystemParam,
  PartItem,
  BomItem,
  StationItem,
  ShiftPlanItem,
  InventoryItem,
  TrolleyTaskItem,
  WorkReportItem
} from '../types';

export const initialSystemParams: SystemParam[] = [
  {
    id: 'P-01',
    category: 'Currency & Unit',
    code: 'CFG_CURR_SYM',
    name: 'System Currency Symbol',
    value: '$',
    unit: 'Symbol',
    description: 'Global currency display symbol for cost analysis and valuation.'
  },
  {
    id: 'P-02',
    category: 'Currency & Unit',
    code: 'CFG_QTY_UNIT',
    name: 'Base Quantity Unit',
    value: 'PCS',
    unit: 'Unit',
    description: 'System default counting unit for all discrete components and parts.'
  },
  {
    id: 'P-03',
    category: 'Shift & Time',
    code: 'CFG_SHIFTS_PER_DAY',
    name: 'Nominal Shifts per Day',
    value: 2,
    unit: 'Shifts/Day',
    description: 'Standard daily production shifts planned in the shop floor (Shift-1, Shift-2).'
  },
  {
    id: 'P-04',
    category: 'Shift & Time',
    code: 'CFG_SHIFT_HOURS',
    name: 'Standard Shift Duration',
    value: 8.0,
    unit: 'Hours/Shift',
    description: 'Operational hours per shift for standard cycle takt time calculations.'
  },
  {
    id: 'P-05',
    category: 'Buffer & Safety',
    code: 'CFG_SAFE_BUFFER_PCT',
    name: 'Safety Stock Buffer Ratio',
    value: 0.15,
    unit: 'Ratio (15%)',
    description: 'Dynamic buffer factor multiplied with daily consumption to determine safety stock threshold.'
  },
  {
    id: 'P-06',
    category: 'Replenishment',
    code: 'CFG_REPL_EMERG_DAYS',
    name: 'Emergency Replenish Cycle',
    value: 0.50,
    unit: 'Shifts',
    description: 'Threshold below which material shortage triggers an immediate Urgent Replenish signal.'
  },
  {
    id: 'P-07',
    category: 'Logistics Kit',
    code: 'CFG_KIT_FULL_PCT',
    name: 'Full Kit Readiness Threshold',
    value: 1.00,
    unit: 'Ratio (100%)',
    description: 'Minimum stock availability ratio required to flag Trolley delivery as 100% Ready.'
  },
  {
    id: 'P-08',
    category: 'Logistics Kit',
    code: 'CFG_KIT_WARN_PCT',
    name: 'Partial Kit Warning Threshold',
    value: 0.80,
    unit: 'Ratio (80%)',
    description: 'Availability threshold between 80% and 99% flagging trolley dispatch as Partly Ready.'
  },
  {
    id: 'P-09',
    category: 'Packaging',
    code: 'CFG_TROLLEY_MAX_SNP',
    name: 'Trolley Box Capacity Limit',
    value: 12,
    unit: 'Boxes/Trolley',
    description: 'Maximum standard package boxes allowed per trolley to prevent physical overload.'
  },
  {
    id: 'P-10',
    category: 'Quality Control',
    code: 'CFG_SCRAP_TOLERANCE',
    name: 'Scrap Rate Tolerance Threshold',
    value: 0.02,
    unit: 'Ratio (2.0%)',
    description: 'Permissible scrap rate. Reports exceeding 2% trigger an actionable quality anomaly.'
  }
];

export const initialParts: PartItem[] = [
  // Laser cutting parts
  { id: 'P-1001', name: 'Front Crossmember Plate L', processSource: 'Laser', spec: 'Q345B t=6.0mm', unit: 'PCS', location: 'A-01-01', snp: 20, dailyConsumption: 40, safetyStock: 46, maxStock: 92, status: 'ACTIVE' },
  { id: 'P-1002', name: 'Front Crossmember Plate R', processSource: 'Laser', spec: 'Q345B t=6.0mm', unit: 'PCS', location: 'A-01-02', snp: 20, dailyConsumption: 40, safetyStock: 46, maxStock: 92, status: 'ACTIVE' },
  { id: 'P-1003', name: 'Chassis Lateral Stiffener', processSource: 'Laser', spec: 'Q235B t=4.0mm', unit: 'PCS', location: 'A-01-03', snp: 25, dailyConsumption: 50, safetyStock: 75, maxStock: 150, status: 'ACTIVE' },
  { id: 'P-1004', name: 'Sub-Frame Mounting Gusset', processSource: 'Laser', spec: 'Q345B t=8.0mm', unit: 'PCS', location: 'A-02-01', snp: 30, dailyConsumption: 60, safetyStock: 90, maxStock: 180, status: 'ACTIVE' },
  { id: 'P-1005', name: 'Suspension Base Flange', processSource: 'Laser', spec: 'Q345B t=10.0mm', unit: 'PCS', location: 'A-02-02', snp: 15, dailyConsumption: 30, safetyStock: 45, maxStock: 90, status: 'ACTIVE' },
  { id: 'P-1006', name: 'Engine Cradle Web Plate', processSource: 'Laser', spec: 'Q235B t=5.0mm', unit: 'PCS', location: 'A-02-03', snp: 20, dailyConsumption: 35, safetyStock: 60, maxStock: 120, status: 'ACTIVE' },
  { id: 'P-1007', name: 'Rear Pivot End Cap', processSource: 'Laser', spec: 'Q345B t=6.0mm', unit: 'PCS', location: 'A-03-01', snp: 40, dailyConsumption: 80, safetyStock: 120, maxStock: 240, status: 'ACTIVE' },
  { id: 'P-1008', name: 'Exhaust Hanger Bracket', processSource: 'Laser', spec: 'SUS304 t=3.0mm', unit: 'PCS', location: 'A-03-02', snp: 50, dailyConsumption: 50, safetyStock: 100, maxStock: 200, status: 'ACTIVE' },
  { id: 'P-1009', name: 'Tow Hook Reinforcing Plate', processSource: 'Laser', spec: 'Q345B t=12.0mm', unit: 'PCS', location: 'A-03-03', snp: 10, dailyConsumption: 20, safetyStock: 30, maxStock: 60, status: 'ACTIVE' },
  { id: 'P-1010', name: 'Battery Tray Support Tab', processSource: 'Laser', spec: 'Q235B t=3.5mm', unit: 'PCS', location: 'A-04-01', snp: 25, dailyConsumption: 40, safetyStock: 50, maxStock: 100, status: 'ACTIVE' },
  { id: 'P-1011', name: 'Bulkhead Lower Retainer', processSource: 'Laser', spec: 'Q345B t=4.5mm', unit: 'PCS', location: 'A-04-02', snp: 20, dailyConsumption: 30, safetyStock: 40, maxStock: 80, status: 'ACTIVE' },
  { id: 'P-1012', name: 'Radiator Cross Brace Plate', processSource: 'Laser', spec: 'Q235B t=3.0mm', unit: 'PCS', location: 'A-04-03', snp: 30, dailyConsumption: 45, safetyStock: 60, maxStock: 120, status: 'ACTIVE' },
  { id: 'P-1013', name: 'Cab Lock Anchor Plate', processSource: 'Laser', spec: 'Q345B t=8.0mm', unit: 'PCS', location: 'A-05-01', snp: 15, dailyConsumption: 25, safetyStock: 30, maxStock: 60, status: 'ACTIVE' },
  { id: 'P-1014', name: 'Fender Support Gusset', processSource: 'Laser', spec: 'Q235B t=2.5mm', unit: 'PCS', location: 'A-05-02', snp: 50, dailyConsumption: 60, safetyStock: 100, maxStock: 200, status: 'ACTIVE' },
  { id: 'P-1015', name: 'Steering Column Weld Hub', processSource: 'Laser', spec: 'Q345B t=5.0mm', unit: 'PCS', location: 'A-05-03', snp: 20, dailyConsumption: 25, safetyStock: 40, maxStock: 80, status: 'ACTIVE' },

  // Bending parts
  { id: 'P-1016', name: 'U-Channel Crossmember Beam', processSource: 'Bending', spec: 'Q345B t=5.0mm 120x60', unit: 'PCS', location: 'B-01-01', snp: 10, dailyConsumption: 30, safetyStock: 40, maxStock: 80, status: 'ACTIVE' },
  { id: 'P-1017', name: 'Main Frame Side Bracket L', processSource: 'Bending', spec: 'Q345B t=6.0mm 90deg', unit: 'PCS', location: 'B-01-02', snp: 15, dailyConsumption: 30, safetyStock: 45, maxStock: 90, status: 'ACTIVE' },
  { id: 'P-1018', name: 'Main Frame Side Bracket R', processSource: 'Bending', spec: 'Q345B t=6.0mm 90deg', unit: 'PCS', location: 'B-01-03', snp: 15, dailyConsumption: 30, safetyStock: 45, maxStock: 90, status: 'ACTIVE' },
  { id: 'P-1019', name: 'Lower Arm Formed Channel', processSource: 'Bending', spec: 'Q345B t=4.0mm Press-bent', unit: 'PCS', location: 'B-02-01', snp: 20, dailyConsumption: 40, safetyStock: 60, maxStock: 120, status: 'ACTIVE' },
  { id: 'P-1020', name: 'Upper Wishbone Guide Rib', processSource: 'Bending', spec: 'Q345B t=4.0mm C-profile', unit: 'PCS', location: 'B-02-02', snp: 25, dailyConsumption: 50, safetyStock: 75, maxStock: 150, status: 'ACTIVE' },
  { id: 'P-1021', name: 'Hydraulic Tank Cradle Strap', processSource: 'Bending', spec: 'Q235B t=3.0mm Rolled', unit: 'PCS', location: 'B-02-03', snp: 20, dailyConsumption: 20, safetyStock: 40, maxStock: 80, status: 'ACTIVE' },
  { id: 'P-1022', name: 'Cabin Shock Absorber Mount', processSource: 'Bending', spec: 'Q345B t=6.0mm Box-bent', unit: 'PCS', location: 'B-03-01', snp: 10, dailyConsumption: 25, safetyStock: 30, maxStock: 60, status: 'ACTIVE' },
  { id: 'P-1023', name: 'Air Reservoir Saddle Clamp', processSource: 'Bending', spec: 'Q235B t=4.0mm Radius-bent', unit: 'PCS', location: 'B-03-02', snp: 20, dailyConsumption: 30, safetyStock: 40, maxStock: 80, status: 'ACTIVE' },
  { id: 'P-1024', name: 'Bumper Impact Absorber Arch', processSource: 'Bending', spec: 'Q345B t=5.0mm Dual-bent', unit: 'PCS', location: 'B-03-03', snp: 10, dailyConsumption: 20, safetyStock: 30, maxStock: 60, status: 'ACTIVE' },
  { id: 'P-1025', name: 'Rear Axle Truss Channel', processSource: 'Bending', spec: 'Q345B t=7.0mm Heavy Bent', unit: 'PCS', location: 'B-04-01', snp: 10, dailyConsumption: 15, safetyStock: 20, maxStock: 40, status: 'ACTIVE' },
  { id: 'P-1026', name: 'Step Platform Frame Tube', processSource: 'Bending', spec: 'Q235B 40x40 Square Tube', unit: 'PCS', location: 'B-04-02', snp: 15, dailyConsumption: 30, safetyStock: 45, maxStock: 90, status: 'ACTIVE' },
  { id: 'P-1027', name: 'Differential Shield Shell', processSource: 'Bending', spec: 'Q345B t=4.5mm Formed', unit: 'PCS', location: 'B-04-03', snp: 10, dailyConsumption: 15, safetyStock: 20, maxStock: 40, status: 'ACTIVE' },
  { id: 'P-1028', name: 'Torque Rod Bracket L', processSource: 'Bending', spec: 'Q345B t=8.0mm Flanged', unit: 'PCS', location: 'B-05-01', snp: 15, dailyConsumption: 25, safetyStock: 30, maxStock: 60, status: 'ACTIVE' },
  { id: 'P-1029', name: 'Torque Rod Bracket R', processSource: 'Bending', spec: 'Q345B t=8.0mm Flanged', unit: 'PCS', location: 'B-05-02', snp: 15, dailyConsumption: 25, safetyStock: 30, maxStock: 60, status: 'ACTIVE' },
  { id: 'P-1030', name: 'Fifth Wheel Under-rib Arch', processSource: 'Bending', spec: 'Q345B t=10.0mm Formed', unit: 'PCS', location: 'B-05-03', snp: 8, dailyConsumption: 16, safetyStock: 24, maxStock: 48, status: 'ACTIVE' },

  // Machining parts
  { id: 'P-1031', name: 'Pivot Bushing Sleeve Ø45', processSource: 'Machining', spec: '45# Steel Turned L=80', unit: 'PCS', location: 'C-01-01', snp: 30, dailyConsumption: 60, safetyStock: 90, maxStock: 180, status: 'ACTIVE' },
  { id: 'P-1032', name: 'Spherical Joint Boss Ø60', processSource: 'Machining', spec: '40Cr Forged & CNC Machined', unit: 'PCS', location: 'C-01-02', snp: 20, dailyConsumption: 40, safetyStock: 60, maxStock: 120, status: 'ACTIVE' },
  { id: 'P-1033', name: 'Threaded Spindle Pin M24', processSource: 'Machining', spec: '40Cr Hardened & Threaded', unit: 'PCS', location: 'C-01-03', snp: 40, dailyConsumption: 80, safetyStock: 120, maxStock: 240, status: 'ACTIVE' },
  { id: 'P-1034', name: 'Locating Dowel Pin Ø16x50', processSource: 'Machining', spec: 'GCr15 Ground Finish', unit: 'PCS', location: 'C-02-01', snp: 50, dailyConsumption: 100, safetyStock: 150, maxStock: 300, status: 'ACTIVE' },
  { id: 'P-1035', name: 'Heavy Hinge Pivot Pin Ø35', processSource: 'Machining', spec: '45# Steel Induction Hardened', unit: 'PCS', location: 'C-02-02', snp: 20, dailyConsumption: 30, safetyStock: 40, maxStock: 80, status: 'ACTIVE' },
  { id: 'P-1036', name: 'Steering Link Taper Boss', processSource: 'Machining', spec: '40Cr Turned & Milled', unit: 'PCS', location: 'C-02-03', snp: 25, dailyConsumption: 50, safetyStock: 75, maxStock: 150, status: 'ACTIVE' },
  { id: 'P-1037', name: 'Hydraulic Cylinder Trunnion', processSource: 'Machining', spec: 'ZG270-500 Machined', unit: 'PCS', location: 'C-03-01', snp: 10, dailyConsumption: 15, safetyStock: 20, maxStock: 40, status: 'ACTIVE' },
  { id: 'P-1038', name: 'Weld Nut Boss M16x1.5', processSource: 'Machining', spec: 'Q235 Free-cutting Steel', unit: 'PCS', location: 'C-03-02', snp: 100, dailyConsumption: 150, safetyStock: 200, maxStock: 400, status: 'ACTIVE' },
  { id: 'P-1039', name: 'Weld Nut Boss M20x1.5', processSource: 'Machining', spec: 'Q235 Free-cutting Steel', unit: 'PCS', location: 'C-03-03', snp: 100, dailyConsumption: 120, safetyStock: 200, maxStock: 400, status: 'ACTIVE' },
  { id: 'P-1040', name: 'Spacer Collar Ø30xØ18', processSource: 'Machining', spec: '45# Steel Zinc Plated', unit: 'PCS', location: 'C-04-01', snp: 50, dailyConsumption: 80, safetyStock: 100, maxStock: 200, status: 'ACTIVE' },
  { id: 'P-1041', name: 'Centering Ring Ø90/Ø70', processSource: 'Machining', spec: '45# Precision Lathe Turned', unit: 'PCS', location: 'C-04-02', snp: 20, dailyConsumption: 25, safetyStock: 40, maxStock: 80, status: 'ACTIVE' },
  { id: 'P-1042', name: 'Flanged Bearing Retainer', processSource: 'Machining', spec: 'QT500-7 CNC Bored', unit: 'PCS', location: 'C-04-03', snp: 15, dailyConsumption: 20, safetyStock: 30, maxStock: 60, status: 'ACTIVE' },
  { id: 'P-1043', name: 'Tie-Down Anchor Eyelet M20', processSource: 'Machining', spec: 'Forged Steel Threaded', unit: 'PCS', location: 'C-05-01', snp: 30, dailyConsumption: 40, safetyStock: 60, maxStock: 120, status: 'ACTIVE' },
  { id: 'P-1044', name: 'Eccentric Cam Bolt M18', processSource: 'Machining', spec: '40Cr Heat Treated 10.9', unit: 'PCS', location: 'C-05-02', snp: 25, dailyConsumption: 30, safetyStock: 50, maxStock: 100, status: 'ACTIVE' },
  { id: 'P-1045', name: 'Spring Hanger Machined Shackle', processSource: 'Machining', spec: 'QT450-10 CNC Machined', unit: 'PCS', location: 'C-05-03', snp: 15, dailyConsumption: 20, safetyStock: 30, maxStock: 60, status: 'ACTIVE' }
];

export const initialBOM: BomItem[] = [
  // WC-001: Front Axle Sub-Frame Crossmember Assembly
  { id: 'BOM-001', componentId: 'WC-001', componentName: 'Front Axle Sub-Frame Crossmember', partId: 'P-1001', qtyPerAssembly: 1 },
  { id: 'BOM-002', componentId: 'WC-001', componentName: 'Front Axle Sub-Frame Crossmember', partId: 'P-1002', qtyPerAssembly: 1 },
  { id: 'BOM-003', componentId: 'WC-001', componentName: 'Front Axle Sub-Frame Crossmember', partId: 'P-1016', qtyPerAssembly: 1 },
  { id: 'BOM-004', componentId: 'WC-001', componentName: 'Front Axle Sub-Frame Crossmember', partId: 'P-1031', qtyPerAssembly: 2 },
  { id: 'BOM-005', componentId: 'WC-001', componentName: 'Front Axle Sub-Frame Crossmember', partId: 'P-1038', qtyPerAssembly: 4 },

  // WC-002: Lower Suspension Wishbone Assembly L
  { id: 'BOM-006', componentId: 'WC-002', componentName: 'Lower Suspension Wishbone L', partId: 'P-1003', qtyPerAssembly: 2 },
  { id: 'BOM-007', componentId: 'WC-002', componentName: 'Lower Suspension Wishbone L', partId: 'P-1019', qtyPerAssembly: 1 },
  { id: 'BOM-008', componentId: 'WC-002', componentName: 'Lower Suspension Wishbone L', partId: 'P-1032', qtyPerAssembly: 1 },
  { id: 'BOM-009', componentId: 'WC-002', componentName: 'Lower Suspension Wishbone L', partId: 'P-1034', qtyPerAssembly: 2 },

  // WC-003: Lower Suspension Wishbone Assembly R
  { id: 'BOM-010', componentId: 'WC-003', componentName: 'Lower Suspension Wishbone R', partId: 'P-1003', qtyPerAssembly: 2 },
  { id: 'BOM-011', componentId: 'WC-003', componentName: 'Lower Suspension Wishbone R', partId: 'P-1019', qtyPerAssembly: 1 },
  { id: 'BOM-012', componentId: 'WC-003', componentName: 'Lower Suspension Wishbone R', partId: 'P-1032', qtyPerAssembly: 1 },
  { id: 'BOM-013', componentId: 'WC-003', componentName: 'Lower Suspension Wishbone R', partId: 'P-1034', qtyPerAssembly: 2 },

  // WC-004: Engine Mount Cradle Subassembly
  { id: 'BOM-014', componentId: 'WC-004', componentName: 'Engine Mount Cradle Subassembly', partId: 'P-1004', qtyPerAssembly: 2 },
  { id: 'BOM-015', componentId: 'WC-004', componentName: 'Engine Mount Cradle Subassembly', partId: 'P-1006', qtyPerAssembly: 1 },
  { id: 'BOM-016', componentId: 'WC-004', componentName: 'Engine Mount Cradle Subassembly', partId: 'P-1017', qtyPerAssembly: 1 },
  { id: 'BOM-017', componentId: 'WC-004', componentName: 'Engine Mount Cradle Subassembly', partId: 'P-1018', qtyPerAssembly: 1 },
  { id: 'BOM-018', componentId: 'WC-004', componentName: 'Engine Mount Cradle Subassembly', partId: 'P-1039', qtyPerAssembly: 4 },

  // WC-005: Rear Axle Truss Beam Assembly
  { id: 'BOM-019', componentId: 'WC-005', componentName: 'Rear Axle Truss Beam Assembly', partId: 'P-1007', qtyPerAssembly: 2 },
  { id: 'BOM-020', componentId: 'WC-005', componentName: 'Rear Axle Truss Beam Assembly', partId: 'P-1025', qtyPerAssembly: 1 },
  { id: 'BOM-021', componentId: 'WC-005', componentName: 'Rear Axle Truss Beam Assembly', partId: 'P-1028', qtyPerAssembly: 1 },
  { id: 'BOM-022', componentId: 'WC-005', componentName: 'Rear Axle Truss Beam Assembly', partId: 'P-1029', qtyPerAssembly: 1 },
  { id: 'BOM-023', componentId: 'WC-005', componentName: 'Rear Axle Truss Beam Assembly', partId: 'P-1035', qtyPerAssembly: 2 },

  // WC-006: Cabin Shock Damper Tower
  { id: 'BOM-024', componentId: 'WC-006', componentName: 'Cabin Shock Damper Tower', partId: 'P-1005', qtyPerAssembly: 1 },
  { id: 'BOM-025', componentId: 'WC-006', componentName: 'Cabin Shock Damper Tower', partId: 'P-1022', qtyPerAssembly: 1 },
  { id: 'BOM-026', componentId: 'WC-006', componentName: 'Cabin Shock Damper Tower', partId: 'P-1033', qtyPerAssembly: 1 },
  { id: 'BOM-027', componentId: 'WC-006', componentName: 'Cabin Shock Damper Tower', partId: 'P-1040', qtyPerAssembly: 2 },

  // WC-007: Heavy Front Tow Hitch Assembly
  { id: 'BOM-028', componentId: 'WC-007', componentName: 'Heavy Front Tow Hitch Assembly', partId: 'P-1009', qtyPerAssembly: 1 },
  { id: 'BOM-029', componentId: 'WC-007', componentName: 'Heavy Front Tow Hitch Assembly', partId: 'P-1024', qtyPerAssembly: 1 },
  { id: 'BOM-030', componentId: 'WC-007', componentName: 'Heavy Front Tow Hitch Assembly', partId: 'P-1043', qtyPerAssembly: 2 },

  // WC-008: Hydraulic Reservoir Saddle Base
  { id: 'BOM-031', componentId: 'WC-008', componentName: 'Hydraulic Reservoir Saddle Base', partId: 'P-1010', qtyPerAssembly: 2 },
  { id: 'BOM-032', componentId: 'WC-008', componentName: 'Hydraulic Reservoir Saddle Base', partId: 'P-1021', qtyPerAssembly: 2 },
  { id: 'BOM-033', componentId: 'WC-008', componentName: 'Hydraulic Reservoir Saddle Base', partId: 'P-1038', qtyPerAssembly: 4 }
];

export const initialStations: StationItem[] = [
  { id: 'ST-ROBOT-01', name: 'Robot Station #1 (Front Sub-Frame)', type: 'Robot', defaultTrolleyId: 'TR-01', maxBoxes: 12 },
  { id: 'ST-ROBOT-02', name: 'Robot Station #2 (Wishbones L/R)', type: 'Robot', defaultTrolleyId: 'TR-02', maxBoxes: 12 },
  { id: 'ST-ROBOT-03', name: 'Robot Station #3 (Engine Cradle)', type: 'Robot', defaultTrolleyId: 'TR-03', maxBoxes: 12 },
  { id: 'ST-ROBOT-04', name: 'Robot Station #4 (Rear Axle Truss)', type: 'Robot', defaultTrolleyId: 'TR-04', maxBoxes: 12 },
  { id: 'ST-ROBOT-05', name: 'Robot Station #5 (Damper Tower)', type: 'Robot', defaultTrolleyId: 'TR-05', maxBoxes: 12 },
  { id: 'ST-ROBOT-06', name: 'Robot Station #6 (Tow Hitch Base)', type: 'Robot', defaultTrolleyId: 'TR-06', maxBoxes: 12 },
  { id: 'ST-MANUAL-01', name: 'Manual Bay #1 (Tack & Fit-Up)', type: 'Manual', defaultTrolleyId: 'TR-07', maxBoxes: 12 },
  { id: 'ST-MANUAL-02', name: 'Manual Bay #2 (Hydraulic Saddle)', type: 'Manual', defaultTrolleyId: 'TR-08', maxBoxes: 12 },
  { id: 'ST-MANUAL-03', name: 'Manual Bay #3 (Custom Bracket)', type: 'Manual', defaultTrolleyId: 'TR-09', maxBoxes: 12 },
  { id: 'ST-MANUAL-04', name: 'Manual Bay #4 (Post-Weld Dressing)', type: 'Manual', defaultTrolleyId: 'TR-10', maxBoxes: 12 }
];

export const initialShiftPlans: ShiftPlanItem[] = [
  {
    id: 'PLN-001',
    date: '2026-10-08',
    shift: 'Shift-1',
    stationId: 'ST-ROBOT-01',
    componentId: 'WC-001',
    plannedQty: 25,
    status: 'Released'
  },
  {
    id: 'PLN-002',
    date: '2026-10-08',
    shift: 'Shift-1',
    stationId: 'ST-ROBOT-02',
    componentId: 'WC-002',
    plannedQty: 30,
    status: 'Released'
  },
  {
    id: 'PLN-003',
    date: '2026-10-08',
    shift: 'Shift-1',
    stationId: 'ST-ROBOT-03',
    componentId: 'WC-004',
    plannedQty: 20,
    status: 'Released'
  },
  {
    id: 'PLN-004',
    date: '2026-10-08',
    shift: 'Shift-1',
    stationId: 'ST-ROBOT-04',
    componentId: 'WC-005',
    plannedQty: 15,
    status: 'Released'
  },
  {
    id: 'PLN-005',
    date: '2026-10-08',
    shift: 'Shift-2',
    stationId: 'ST-ROBOT-01',
    componentId: 'WC-001',
    plannedQty: 20,
    status: 'Planned'
  },
  {
    id: 'PLN-006',
    date: '2026-10-08',
    shift: 'Shift-2',
    stationId: 'ST-ROBOT-02',
    componentId: 'WC-003',
    plannedQty: 25,
    status: 'Planned'
  },
  {
    id: 'PLN-007',
    date: '2026-10-08',
    shift: 'Shift-1',
    stationId: 'ST-MANUAL-02',
    componentId: 'WC-008',
    plannedQty: 15,
    status: 'Released'
  }
];

export const initialInventories: InventoryItem[] = [
  { partId: 'P-1001', openingStock: 60, intakeToday: 40, stockAdjustment: 0 },
  { partId: 'P-1002', openingStock: 50, intakeToday: 40, stockAdjustment: 0 },
  { partId: 'P-1003', openingStock: 80, intakeToday: 50, stockAdjustment: 0 },
  { partId: 'P-1004', openingStock: 70, intakeToday: 60, stockAdjustment: 0 },
  { partId: 'P-1005', openingStock: 40, intakeToday: 20, stockAdjustment: 0 },
  { partId: 'P-1006', openingStock: 35, intakeToday: 20, stockAdjustment: 0 },
  { partId: 'P-1007', openingStock: 60, intakeToday: 40, stockAdjustment: 0 },
  { partId: 'P-1008', openingStock: 90, intakeToday: 50, stockAdjustment: 0 },
  { partId: 'P-1009', openingStock: 25, intakeToday: 10, stockAdjustment: 0 },
  { partId: 'P-1010', openingStock: 45, intakeToday: 25, stockAdjustment: 0 },
  { partId: 'P-1016', openingStock: 30, intakeToday: 20, stockAdjustment: 0 },
  { partId: 'P-1017', openingStock: 35, intakeToday: 30, stockAdjustment: 0 },
  { partId: 'P-1018', openingStock: 35, intakeToday: 30, stockAdjustment: 0 },
  { partId: 'P-1019', openingStock: 50, intakeToday: 40, stockAdjustment: 0 },
  { partId: 'P-1021', openingStock: 30, intakeToday: 20, stockAdjustment: 0 },
  { partId: 'P-1025', openingStock: 18, intakeToday: 10, stockAdjustment: 0 },
  { partId: 'P-1028', openingStock: 25, intakeToday: 15, stockAdjustment: 0 },
  { partId: 'P-1029', openingStock: 25, intakeToday: 15, stockAdjustment: 0 },
  { partId: 'P-1031', openingStock: 80, intakeToday: 60, stockAdjustment: 0 },
  { partId: 'P-1032', openingStock: 50, intakeToday: 40, stockAdjustment: 0 },
  // Intentionally trigger a low stock / partial shortage for demo of actionable anomaly!
  { partId: 'P-1034', openingStock: 15, intakeToday: 0, stockAdjustment: 0 },
  { partId: 'P-1035', openingStock: 28, intakeToday: 20, stockAdjustment: 0 },
  { partId: 'P-1038', openingStock: 160, intakeToday: 100, stockAdjustment: 0 },
  { partId: 'P-1039', openingStock: 120, intakeToday: 100, stockAdjustment: 0 }
];

export const initialTrolleyTasks: TrolleyTaskItem[] = [
  {
    id: 'TSK-0001',
    shift: 'Shift-1',
    stationId: 'ST-ROBOT-01',
    trolleyId: 'TR-01',
    partId: 'P-1001',
    loadQty: 25,
    status: 'In-Transit',
    confirmed: true,
    deliveryTime: '08:15',
    operator: 'Marcus Vance'
  },
  {
    id: 'TSK-0002',
    shift: 'Shift-1',
    stationId: 'ST-ROBOT-01',
    trolleyId: 'TR-01',
    partId: 'P-1016',
    loadQty: 25,
    status: 'In-Transit',
    confirmed: true,
    deliveryTime: '08:20',
    operator: 'Marcus Vance'
  },
  {
    id: 'TSK-0003',
    shift: 'Shift-1',
    stationId: 'ST-ROBOT-02',
    trolleyId: 'TR-02',
    partId: 'P-1019',
    loadQty: 30,
    status: 'Delivered',
    confirmed: true,
    deliveryTime: '08:05',
    operator: 'Elena Rostova'
  },
  {
    id: 'TSK-0004',
    shift: 'Shift-1',
    stationId: 'ST-ROBOT-02',
    trolleyId: 'TR-02',
    partId: 'P-1034',
    loadQty: 60,
    status: 'Loading',
    confirmed: false,
    deliveryTime: '',
    operator: 'David Chen'
  },
  {
    id: 'TSK-0005',
    shift: 'Shift-1',
    stationId: 'ST-ROBOT-03',
    trolleyId: 'TR-03',
    partId: 'P-1004',
    loadQty: 40,
    status: 'Delivered',
    confirmed: true,
    deliveryTime: '08:10',
    operator: 'David Chen'
  }
];

export const initialReports: WorkReportItem[] = [
  {
    id: 'REP-0001',
    date: '2026-10-08',
    shift: 'Shift-1',
    stationId: 'ST-ROBOT-01',
    componentId: 'WC-001',
    actualQty: 24,
    scrapQty: 1,
    downtimeRemarks: 'Smooth weld cycle, 1 seam porosity reject on tack.'
  },
  {
    id: 'REP-0002',
    date: '2026-10-08',
    shift: 'Shift-1',
    stationId: 'ST-ROBOT-02',
    componentId: 'WC-002',
    actualQty: 28,
    scrapQty: 0,
    downtimeRemarks: 'Optimal torch feed, zero defects.'
  },
  {
    id: 'REP-0003',
    date: '2026-10-08',
    shift: 'Shift-1',
    stationId: 'ST-ROBOT-03',
    componentId: 'WC-004',
    actualQty: 18,
    scrapQty: 1,
    downtimeRemarks: 'Minor torch nozzle spatter cleaning (8 min).'
  }
];

export function getInitialAppState(): AppState {
  return {
    params: initialSystemParams,
    parts: initialParts,
    bom: initialBOM,
    stations: initialStations,
    plans: initialShiftPlans,
    inventories: initialInventories,
    trolleyTasks: initialTrolleyTasks,
    reports: initialReports,
    lastSaved: new Date().toISOString()
  };
}
