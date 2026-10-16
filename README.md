# Shop-floor Material Flow Control System

**A lightweight production-to-material control framework for welding-driven manufacturing operations.**

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
![Platform: Browser + Excel](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-217346)
![Tool Type: Production Control](https://img.shields.io/badge/Tool-Production%20Control-2251FF)

**Turn shift-level welding plans into actionable material requirements, supermarket replenishment signals, trolley delivery tasks, and production feedback—with a structured control framework designed to reduce avoidable shortages and manual coordination.**

> **Access and availability**
>
> - **Browser version:** Free, no signup or installation required. Add the published HTML demo URL here when available.
> - **Excel version:** Add the workbook download or product release URL here when available.
> - **Excel licensing:** The project documentation specifies Apache License 2.0. Confirm that the distributed workbook and all included assets are covered by the repository license before publishing a downloadable file.
>
> No live demo or downloadable workbook URL has been supplied with the current implementation specification.

## What It Helps You Track

- **Material demand by shift and welding station** — identify which individual parts are required for each planned assembly before production begins.
- **Physical material location and availability** — distinguish inventory quantity from where the material is actually held, including supermarket locations, trolleys, and production stations.
- **Shortages and replenishment priorities** — identify material gaps and determine which upstream manufacturing source needs to replenish the supermarket.
- **Trolley loading and delivery readiness** — organize material picking and delivery around production requirements, packaging constraints, and kit completeness.
- **Planned versus actual production consumption** — use completed assembly reports and recorded scrap to reconcile expected material usage with shop-floor activity.
- **Production interruption and logistics risk** — bring shortage exposure, station readiness, replenishment needs, and delivery status into one operational monitoring view.

## Quick Start Workflow

The operating model follows a repeatable cycle: configure the rules, maintain the master data, enter the shift plan, execute material movements, and feed actual production results back into the control process.

### 1. Configure the operating parameters

Establish the global settings used throughout the workbook, including shift duration, shifts per day, safety-stock buffer, emergency replenishment threshold, kit-readiness thresholds, trolley packaging capacity, and scrap tolerance.

These parameters form the shared control basis for downstream calculations. Changes should be deliberate and reviewed against actual shop-floor operating conditions.

### 2. Maintain the material and production master data

Register the individual parts, their manufacturing sources, supermarket locations, standard packaging quantities, and average daily consumption.

Define the bill of materials (BOM) for each welding assembly. Register the welding stations, identify robot and manual workstations, and assign trolley resources.

The reference operating scale is approximately 500 individual parts and 50 welding assemblies. Actual data volumes depend on the deployment.

### 3. Enter the shift production plan

Record the production date, shift, target station, assembly, planned quantity, and plan status.

The demand engine expands the assembly plan through the BOM to determine the required individual parts. Inventory monitoring then identifies shortages, while the logistics layer organizes material-picking and delivery requirements.

### 4. Execute, report, and refresh

Record upstream receipts, material adjustments, trolley dispatch and delivery confirmations, and actual station production.

Completed production and recorded scrap feed back into the material-consumption model. The inventory and monitoring views are then recalculated to support the next replenishment and delivery decisions.

**Configure the rules. Maintain the master data. Enter the shift plan. Execute and report. Repeat the daily control cycle.**

## Why I Built This

In a welding-driven workshop, a production plan can look feasible while the material required to execute it is unavailable at the point of use.

The failure is often not a complete absence of inventory. It is a mismatch between the planned assembly mix, the individual parts required by each assembly, the material physically available in the supermarket, and the delivery status of the trolley assigned to a station.

A static inventory list cannot resolve that mismatch on its own.

Consider a shift scheduled to produce several welding assemblies across robot and manual welding stations. Each assembly consumes a different combination of laser-cut, bent, and machined parts. A shortage of one critical component can block a station even when most of its required materials are available. Meanwhile, the same part may appear in the inventory records without a clear indication of whether it is in the supermarket, in transit, or already allocated to another task.

The proposed control framework connects these separate operational facts.

Instead of reviewing the production plan, BOM, inventory balance, and trolley list independently, the workflow translates planned assembly quantities into component-level demand, compares requirements with material availability, identifies replenishment needs, and organizes deliveries around station requirements.

Actual production reports then close the loop. As completed assemblies and scrap are recorded, expected consumption is reconciled with shop-floor activity and the remaining material position is recalculated.

The result is a **productized operating framework rather than a one-off inventory spreadsheet**. Its purpose is to make recurring material-flow decisions more consistent, visible, and auditable without requiring the workshop to replace its existing ERP, MES, or equipment-control systems.

## Common Shop-floor Material Flow Problems This Solves

| Problem | Without This Tool | With This Tool |
|---|---|---|
| Hidden component shortages | A production order appears feasible because the assembly quantity is visible, but its individual material requirements are not reconciled against available stock. | The BOM expands the shift plan into individual-part requirements so shortages can be identified before or during execution. |
| Inventory without reliable location context | A part appears in an inventory balance, but operators cannot readily distinguish its supermarket location from its position on a trolley or at a station. | Material master data and logistics records provide a structured location and movement-control framework. |
| Reactive replenishment | Upstream cutting, bending, and machining teams receive requests through fragmented manual coordination. | Shortage calculations classify replenishment needs and help direct requests to the relevant manufacturing source. |
| Incomplete trolley loads | A trolley is dispatched without a clear view of whether the required material kit is complete. | Delivery tasks organize picking requirements and expose readiness states such as Ready, Partly, and Blocked. |
| Planned consumption diverges from actual consumption | Inventory updates lag behind production, scrap, and manual adjustments. | Production reports feed the consumption model, allowing the inventory position and remaining requirements to be recalculated. |
| Local decisions hide workshop-wide risk | Individual station issues are managed separately, making recurring shortages and delivery conflicts difficult to prioritize. | A consolidated monitoring view brings production attainment, material readiness, shortage exposure, and logistics status together. |

## Who This Is For

This framework is designed for:

- **Production planners** coordinating daily assembly quantities across shifts and welding stations.
- **Material planners** translating assembly schedules into component-level demand and replenishment priorities.
- **Supermarket and internal-logistics teams** responsible for picking, trolley loading, delivery, and material availability.
- **Workshop supervisors** monitoring production readiness, shortages, and reported output.
- **Excel practitioners and manufacturing analysts** building a lightweight, maintainable control layer around existing production processes.

It is particularly relevant to high-mix, low-volume workshops in which multiple upstream manufacturing processes supply individual parts to robot and manual welding stations.

It is **not** a replacement for enterprise ERP or MES, a full advanced planning and scheduling system, a PLC-controlled automated vehicle platform, or an IoT/SCADA data-acquisition system. Physical layout design, equipment-level automation, operator scanning discipline, and complex process scheduling remain outside the workbook's defined scope.

The intended benefit is a clearer operational control process—not the elimination of every physical production constraint.

## About

I approach workshop spreadsheets as reusable decision-support systems rather than collections of manually maintained tables. The central question is: **What information needs to be connected so that the next operational decision can be made with less ambiguity?**

The Shop-floor Material Flow Control System applies that principle to the relationship between production plans, BOM-driven material demand, supermarket inventory, internal logistics, and actual production feedback. Its design emphasizes clear responsibilities, centralized parameters, traceable calculations, and explicit exception states.

The framework is intended to complement existing manufacturing systems by addressing the operational gap between planning a welding assembly and making sure the right individual parts reach the right station at the right time.

## Technical Details

<details>
<summary>For technical reviewers, Excel practitioners, and manufacturing collaborators</summary>

### Workbook Architecture

The proposed workbook contains four functional modules and ten worksheets. Each worksheet has a defined responsibility, separating configuration, master data, planning, calculations, logistics execution, feedback, and monitoring.

| Module | Worksheet | Responsibility |
|---|---|---|
| System & Master Data | `01_SYS` | Central operating parameters, thresholds, validation dictionaries, and shared settings |
| System & Master Data | `02_MST_Part` | Individual-part master data, manufacturing source, supermarket location, packaging, and stock parameters |
| System & Master Data | `03_MST_BOM` | Welding-assembly-to-part relationships and standard component consumption |
| System & Master Data | `04_MST_Station` | Robot/manual station definitions and trolley assignments |
| Planning & Engine | `05_PLN_Shift` | Shift-level production schedule |
| Planning & Engine | `06_ENG_Demand` | BOM explosion and component-level material demand |
| Execution & Logistics | `07_INV_Super` | Supermarket inventory, consumption, shortages, and replenishment |
| Execution & Logistics | `08_LOG_Trolley` | Trolley loading, dispatch, delivery, and kit readiness |
| Feedback & Control | `09_ACT_Report` | Actual output, scrap, and production reporting |
| Feedback & Control | `10_DSH_Board` | Production attainment, station readiness, shortage exposure, and logistics monitoring |

#### End-to-End Data Flow

```text
01_SYS: Parameters and Thresholds
                  |
                  v
02_MST_Part ---- 03_MST_BOM ---- 04_MST_Station
                  |
                  v
           05_PLN_Shift
                  |
                  v
           06_ENG_Demand
             /          \
            v            v
     07_INV_Super   08_LOG_Trolley
            |            |
            v            v
     Upstream Supply   Welding Stations
                         |
                         v
                  09_ACT_Report
                         |
                         v
                  Inventory Recalculation
                         |
                         v
                  10_DSH_Board
```

The diagram represents the intended control flow. Actual inventory reconciliation depends on the implemented formulas, the transaction records maintained by operators, and the validation of source data.

### Core Design Principles

#### 1. Separate inputs, calculations, and outputs

Master data and operational inputs are maintained in designated worksheets. Calculation sheets derive material requirements and control states. Monitoring sheets present the resulting operational picture.

This separation makes it easier to identify whether an issue originates in source data, a calculation, or a physical execution process.

#### 2. Use Excel Tables for expanding records

Operational transaction lists should use Excel Tables (`ListObject`) with stable table names such as `tbl_Part`, `tbl_BOM`, `tbl_ShiftPlan`, `tbl_Inventory`, and `tbl_ProductionReport`.

Structured references are preferred for row-level aggregation because they expand with the table. The names above are recommended implementation conventions; the specification does not establish that a finished workbook already contains these exact table names.

#### 3. Use dynamic arrays for generated lists

Microsoft 365 functions such as `FILTER`, `UNIQUE`, `SORT`, and `XLOOKUP` can generate and transform lists without manually copying formulas down every row.

Dynamic-array formulas must be placed where their spill ranges remain unobstructed. Scalar aggregation functions such as `SUMIFS` and `COUNTIFS` should use structured references where appropriate.

#### 4. Centralize operational parameters

Thresholds, buffers, and other business rules should be maintained in the configuration layer rather than duplicated as unexplained constants across the workbook.

The supplied design maps key parameters to `01_SYS!D4:D13`. Formulas should reference those configured values consistently, and parameter changes should be tested against the affected calculations.

#### 5. Prefer explicit exceptions over silent assumptions

Missing part registrations, invalid BOM relationships, incomplete location data, and unavailable material should produce recognizable exception states.

A missing or invalid record must not be silently interpreted as confirmed availability. An operational status should distinguish an actual zero from a value that cannot be calculated reliably.

### Module 1 — System & Master Data

#### Sheet `01_SYS` — Parameters and Thresholds

This worksheet defines the shared configuration used by downstream calculations.

| Cell | Parameter | Default in specification | Operational purpose |
|---|---|---:|---|
| `D4` | `CFG_CURR_SYM` | `¥` | Currency presentation symbol |
| `D5` | `CFG_QTY_UNIT` | `PCS` | Base material quantity unit |
| `D6` | `CFG_SHIFTS_PER_DAY` | `2` | Number of scheduled shifts per day |
| `D7` | `CFG_SHIFT_HOURS` | `8.0` | Standard hours per shift |
| `D8` | `CFG_SAFE_BUFFER_PCT` | `0.15` | General safety-stock buffer |
| `D9` | `CFG_REPL_EMERG_DAYS` | `0.50` | Emergency replenishment threshold |
| `D10` | `CFG_KIT_FULL_PCT` | `1.00` | Full kit-readiness threshold |
| `D11` | `CFG_KIT_WARN_PCT` | `0.80` | Partial-readiness warning threshold |
| `D12` | `CFG_TROLLEY_MAX_SNP` | `12` | Maximum standard packaging boxes per trolley |
| `D13` | `CFG_SCRAP_TOLERANCE` | `0.02` | Scrap-rate tolerance |

These are reference defaults from the implementation specification, not universal manufacturing standards. They must be validated against actual packaging, consumption, replenishment lead times, and workshop practices before operational use.

The validation dictionaries specified for this sheet include:

- Manufacturing sources: Laser, Bending, and Machining.
- Station types: Robot and Manual.
- Replenishment states: Normal, Replenish, and Urgent.
- Trolley states: Loading, In-Transit, and Delivered.

The specification also defines parameter display and validation outputs in columns F and G.

**Illustrative dynamic-array formula — parameter display labels**

```excel
=C4:C13 & " : " & D4:D13 & " (" & E4:E13 & ")"
```

Enter the formula at `F4` in a Microsoft 365-compatible worksheet with the intended spill area clear.

**Implementation note:** The source specification's sample validation formula uses array expressions with `AND` and `ROW`. Those expressions should be reviewed for array-compatible behavior before deployment. A formula that returns an incorrect validation state is not an adequate control merely because it is dynamic.

#### Sheet `02_MST_Part` — Individual-Part Master Data

The part master maintains the attributes needed to identify, locate, and replenish each individual component.

| Field | Purpose |
|---|---|
| Part ID | Unique part identifier |
| Part Name | Business-readable description |
| Manufacturing Source | Laser, Bending, or Machining |
| Specification / Material | Physical specification for identification |
| Unit | Standard quantity unit |
| Default Supermarket Location | Physical storage address |
| Standard Number of Package (SNP) | Standard packaging quantity |
| Average Daily Consumption | Consumption baseline |
| Safety Stock | Calculated stock buffer rounded to a packaging multiple |
| Maximum Stock | Reference inventory ceiling |
| Activation Status | Master-data completeness indicator |

The reference implementation allows approximately 500 individual parts. The proposed identifiers `P-1001` to `P-1500` are illustrative examples rather than a requirement to use that numbering scheme.

**Safety-stock calculation**

```excel
=IF(A4:A503="","",
   CEILING.MATH(
      H4:H503*(1+'01_SYS'!$D$8),
      G4:G503
   )
)
```

This formula calculates a buffered consumption baseline and rounds the result up to a multiple of the standard packaging quantity.

The specification defines maximum stock as twice the calculated safety stock:

```excel
=IF(A4:A503="","",I4:I503*2)
```

**Important implementation considerations**

- The safety-stock baseline must have a clearly defined time basis. The supplied formula uses average daily consumption but does not explicitly multiply it by replenishment lead time. The buffer therefore should not be interpreted as a complete lead-time-based inventory policy.
- `SNP` must be positive before it is used as a rounding significance.
- Missing consumption data should be distinguished from genuine zero consumption.
- An activation check should validate the part identifier, source category, location, and packaging attributes before the part is used by planning calculations.

The specification's sample activation formula is:

```excel
=IF(A4:A503="","",
   IF(
      OR(ISBLANK(F4:F503),ISBLANK(G4:G503),G4:G503<=0),
      "⚠️ Incomplete Master Data",
      "✅ ACTIVE"
   )
)
```

This illustrates the intended validation logic. Because `OR` does not independently evaluate each row of an array, the formula should be adapted to a row-wise or `MAP`-based implementation before being used as a production validation control.

#### Sheet `03_MST_BOM` — Welding Assembly Bill of Materials

The BOM establishes which individual parts are consumed by each welding assembly.

| Field | Purpose |
|---|---|
| Assembly ID | Identifier of the welding assembly |
| Assembly Name | Assembly description |
| Part ID | Component identifier |
| Part Name | Retrieved from the part master |
| Manufacturing Source | Retrieved from the part master |
| Default Storage Location | Retrieved from the part master |
| Quantity per Assembly | Standard quantity of the part consumed per assembly |
| Relationship Validation | Confirms part registration and positive consumption quantity |

The reference scope is approximately 50 welding assemblies, with potentially many BOM rows per assembly. The BOM is a relationship table, not a one-row-per-assembly summary.

**Retrieve the part name**

```excel
=IF(C4:C1500="","",
   XLOOKUP(
      C4:C1500,
      '02_MST_Part'!A4:A503,
      '02_MST_Part'!B4:B503,
      "❌ Unknown Part ID"
   )
)
```

**Retrieve the manufacturing source**

```excel
=IF(C4:C1500="","",
   XLOOKUP(
      C4:C1500,
      '02_MST_Part'!A4:A503,
      '02_MST_Part'!C4:C503,
      "❌ Missing Manufacturing Source"
   )
)
```

**Validate the BOM relationship**

```excel
=IF(A4:A1500="","",
   IF(
      ISNUMBER(MATCH(C4:C1500,'02_MST_Part'!A4:A503,0)),
      IF(G4:G1500>0,"✅ Valid BOM","❌ Quantity Must Be Positive"),
      "❌ Part Not Registered"
   )
)
```

The intended controls are straightforward: each referenced part must exist, and each active BOM relationship must specify a positive consumption quantity.

For a deployed workbook, these formulas should be tested for array behavior, duplicate keys, and incomplete records. A separate unique assembly master or a distinct assembly lookup range is preferable to looking up an assembly name against repeated BOM rows when data consistency cannot otherwise be guaranteed.

#### Sheet `04_MST_Station` — Stations and Trolley Configuration

This sheet maps production stations to the internal logistics resources that serve them.

| Field | Purpose |
|---|---|
| Station ID | Unique station identifier |
| Station Name | Readable station description |
| Station Type | Robot or Manual |
| Default Trolley ID | Assigned material transport trolley |
| Trolley Capacity | Maximum standard packaging boxes per trolley |
| Station Status | Planning and readiness indicator |
| Trolley Availability | Current recorded trolley state |

The proposed station master covers approximately 15–20 stations, depending on the actual workshop.

**Retrieve the trolley's latest recorded status**

```excel
=IF(D4:D20="","",
   XLOOKUP(
      D4:D20,
      '08_LOG_Trolley'!$D$4:$D$100,
      '08_LOG_Trolley'!$H$4:$H$100,
      "🟢 Available",
      0,
      -1
   )
)
```

The reverse search argument requests the last matching record in the specified range. It is meaningful only if the lookup key and event-recording conventions are reliable.

For production use, a trolley's current state should be derived from a defined transaction history or a single authoritative status record. A simple last-match lookup is not a substitute for validating overlapping assignments, unconfirmed returns, or duplicate trolley identifiers.

### Module 2 — Planning & Demand Engine

#### Sheet `05_PLN_Shift` — Shift Production Plan

This worksheet is the operational entry point for the production schedule.

| Field | Purpose |
|---|---|
| Production Date | Planned execution date |
| Shift ID | Shift designation |
| Station ID | Target welding station |
| Assembly ID | Planned welding assembly |
| Planned Quantity | Target assembly output |
| Plan Status | Planned, Released, or Completed |
| Assembly Name | Retrieved assembly description |
| Station Type | Retrieved station classification |
| Required Part Types | Number of distinct BOM components |
| Total Part Quantity | Total component quantity required |
| Unique Plan Key | Composite key for duplicate-plan checks |

A plan key can combine the production date, shift, station, and assembly. However, the business definition must determine whether multiple lines for the same assembly and station are prohibited or whether they should be aggregated. A composite key alone does not enforce that policy.

**Retrieve the assembly name**

The source specification provides a lookup pattern based on the assembly identifier. In a production implementation, use a unique assembly master as the lookup source rather than relying on a repeated assembly identifier in a BOM relationship table.

```excel
=IF(D4:D100="","",
   XLOOKUP(
      D4:D100,
      AssemblyMaster[Assembly ID],
      AssemblyMaster[Assembly Name],
      "❌ Unknown Assembly"
   )
)
```

`AssemblyMaster` is a recommended table name for this implementation pattern. It must be created and populated before the formula can be used.

Planning validations should reject or flag:

- Unknown station identifiers.
- Unknown assembly identifiers.
- Non-positive planned quantities.
- Invalid shift identifiers.
- Duplicate or conflicting plans according to the chosen scheduling policy.
- Plans whose required BOM is incomplete or invalid.

#### Sheet `06_ENG_Demand` — Material Demand Engine

The demand engine translates assembly-level production plans into individual-part requirements.

Its calculation sequence is:

1. Read valid production-plan records.
2. Select the applicable BOM rows for each planned assembly.
3. Multiply planned assembly quantities by each part's standard quantity per assembly.
4. Retain the date, shift, station, assembly, and part context for each demand record.
5. Aggregate requirements where the inventory-control view needs a part-level total.
6. Compare demand with the defined available-inventory measure.
7. Flag shortages and expose the results to replenishment and logistics workflows.

For a planned assembly quantity \(Q_a\), and a standard component consumption \(B_{a,p}\), gross demand for part \(p\) is:

\[
D_p=\sum_a Q_a B_{a,p}
\]

The summation applies to the selected production-plan scope. If the scope is one shift and one station, only plans belonging to that shift and station should contribute to the result.

**Illustrative calculation pattern**

```excel
=PlannedAssemblyQty*QtyPerAssembly
```

For a real workbook, the demand engine must use an explicit relationship between plan records and BOM rows. A direct lookup is insufficient when an assembly contains multiple component parts.

The engine should preserve enough detail to answer four separate questions:

- Which part is required?
- How many units are required?
- Which shift and station create the requirement?
- Which assembly and BOM relationship generated the demand?

This detail is essential when the same individual part is shared by several assemblies or production stations.

**Gross demand is not the same as net replenishment demand.** Gross demand represents the component quantities implied by the production plan. Net replenishment must also consider the defined stock position, material already allocated to other requirements, confirmed inbound quantities, and any approved consumption or inventory adjustments.

The exact availability equation and its safeguards are covered in the execution-layer specification in Part 3.

</details>
### Module 3 — Supermarket Inventory & Logistics Execution

#### Sheet `07_INV_Super` — Supermarket Inventory Monitoring

This sheet consolidates the material position and translates shortages into replenishment signals.

| Column | Field | Purpose |
|---|---|---|
| A | Part ID | Individual-part identifier |
| B | Part Name | Readable part description |
| C | Manufacturing Source | Laser, Bending, or Machining |
| D | Opening Stock | Carried-forward inventory |
| E | Received Quantity | Upstream material receipts |
| F | Cumulative Consumption | Material consumption derived from production reports |
| G | Physical On-hand Stock | Current recorded physical inventory |
| H | Reserved / Inbound Stock | Inventory associated with reservations or inbound movements, as defined by the implementation |
| I | Net Available Stock | Inventory available for the relevant planning calculation |
| J | Required Quantity | Demand reference for the selected planning scope |
| K | Shortage Quantity | Calculated material deficit |
| L | Replenishment Status | Normal, Replenish, or Urgent |
| M | Suggested Replenishment Quantity | Recommended quantity aligned to packaging |
| N | Physical Count Adjustment | Approved stock correction |

The specification distinguishes physical inventory from net available inventory. That distinction is essential: material already committed to a production requirement must not be treated as freely available to satisfy another requirement.

**Physical on-hand inventory**

The intended stock equation is:

\[
\text{On-hand}=\text{Opening Stock}+\text{Receipts}+\text{Adjustments}-\text{Consumption}
\]

**Net available inventory**

The exact treatment of inbound and reserved quantities must be defined consistently. A recommended control model is:

\[
\text{Net Available}
=
\text{On-hand}
-\text{Reservations}
+\text{Eligible Confirmed Inbound}
\]

Inbound quantities should be included only when the operational policy explicitly allows them to count toward availability. Unconfirmed receipts should not be treated as physically received stock.

**Shortage calculation**

For a requirement quantity \(R\) and an available quantity \(A\):

\[
\text{Shortage}=\max(0,R-A)
\]

This is a planning relationship, not a complete replenishment policy. Safety-stock requirements, future demand, and material allocations must be considered separately when determining the final replenishment quantity.

#### Replenishment Status

The reference configuration uses three states:

| State | Operational meaning |
|---|---|
| `Normal` | No replenishment intervention is currently indicated by the configured rule |
| `Replenish` | Inventory has crossed the defined replenishment threshold |
| `Urgent` | A critical shortage condition requires immediate attention |

The emergency threshold is configured in `01_SYS!D9`. The exact trigger must be connected to a clearly defined time basis and consumption rate. The reference value of `0.50` should not be treated as a universal emergency rule without validating its unit and operational meaning.

#### Suggested Replenishment Quantity

The specification proposes rounding replenishment to a standard packaging multiple and considering both the required quantity and safety stock.

```excel
=LET(
   safeStock,
      XLOOKUP(
         A4,
         '02_MST_Part'!$A$4:$A$503,
         '02_MST_Part'!$I$4:$I$503,
         0
      ),
   snp,
      XLOOKUP(
         A4,
         '02_MST_Part'!$A$4:$A$503,
         '02_MST_Part'!$G$4:$G$503,
         1
      ),
   rawNeed,
      MAX(0,(J4+safeStock)-(I4+E4)),
   IF(rawNeed>0,CEILING.MATH(rawNeed,snp),0)
)
```

This is a reference formula pattern, not a verified drop-in formula for every stock layout. Before deployment, confirm whether column E represents receipts already included in column I. If the same inbound quantity is counted twice, the replenishment recommendation will be understated.

A production implementation should also distinguish physical receipts, eligible inbound quantities, reservations, and inventory adjustments rather than relying on ambiguous stock fields.

### Sheet `08_LOG_Trolley` — Trolley Loading & Delivery Tasks

This worksheet converts material requirements into actionable internal-logistics tasks.

| Field | Purpose |
|---|---|
| Task ID | Unique delivery-task identifier |
| Shift ID | Target production shift |
| Station ID | Delivery destination |
| Trolley ID | Assigned transport trolley |
| Part ID | Material being delivered |
| Load Quantity | Planned quantity for the task |
| Kit Status | Ready, Partly, or Blocked |
| Task Status | Loading, In-Transit, or Delivered |
| Dispatch Confirmation | Physical loading and departure confirmation |
| Delivery Confirmation Time | Recorded arrival time |
| Delivery Personnel | Responsible operator |
| Capacity Warning | Trolley packaging-capacity check |

**Task identifier**

```excel
=IF(B4:B1000="","",
   "TSK-"&TEXT(ROW(A4:A1000)-3,"0000")
)
```

The reference pattern generates a formatted identifier based on the worksheet row. For durable traceability, use a unique task key that is not reused after sorting, deleting, or rebuilding the task list.

**Assign the default trolley**

```excel
=IF(C4:C1000="","",
   XLOOKUP(
      C4:C1000,
      '04_MST_Station'!$A$4:$A$20,
      '04_MST_Station'!$D$4:$D$20,
      "TR-DEFAULT"
   )
)
```

A fallback trolley identifier should not be interpreted as a confirmed physical assignment. Unknown station-to-trolley mappings should produce a visible exception and require resolution before dispatch.

**Kit readiness**

The supplied specification defines full readiness at 100% and a warning threshold at 80%.

```excel
=LET(
   availStock,
      XLOOKUP(
         E4,
         '07_INV_Super'!$A$4:$A$503,
         '07_INV_Super'!$I$4:$I$503,
         0
      ),
   kitRatio,IF(F4>0,availStock/F4,1),
   fullPct,'01_SYS'!$D$10,
   warnPct,'01_SYS'!$D$11,
   IF(
      kitRatio>=fullPct,
      "Ready",
      IF(kitRatio>=warnPct,"Partly","Blocked")
   )
)
```

This formula illustrates the threshold logic for an individual material requirement. A production-level **kit-readiness calculation must evaluate all required parts for the target station and shift**. A single part's available quantity divided by its load quantity is not, by itself, proof that the entire kit is complete.

The dispatch gate should therefore use the complete requirement set, validate that each required part is available in sufficient quantity, and prevent material from being allocated to multiple tasks.

**Trolley capacity check**

```excel
=LET(
   snp,
      XLOOKUP(
         E4,
         '02_MST_Part'!$A$4:$A$503,
         '02_MST_Part'!$G$4:$G$503,
         1
      ),
   boxes,CEILING.MATH(F4/snp),
   maxBoxes,'01_SYS'!$D$12,
   IF(
      boxes>maxBoxes,
      "Overload Warning",
      "Within Capacity"
   )
)
```

This is a reference check based on packaging multiples. The implementation must establish whether capacity is measured per part line, per trolley, or across the entire load. A real trolley can contain multiple part types; validating each line independently does not guarantee that the combined load stays within its physical capacity.

A trolley task should progress through explicit operational states. Dispatch confirmation, delivery confirmation, and return or availability confirmation should be recorded as separate events where the workshop requires them.

### Module 4 — Production Feedback & Monitoring

#### Sheet `09_ACT_Report` — Actual Production Reporting

This worksheet records the actual output of robot and manual welding stations.

| Field | Purpose |
|---|---|
| Report ID | Unique reporting record |
| Report Date | Actual reporting date |
| Shift ID | Production shift |
| Station ID | Reporting station |
| Assembly ID | Completed welding assembly |
| Actual Good Quantity | Accepted output |
| Scrap Quantity | Recorded rejected assemblies |
| Downtime Notes | Shortage, equipment, or other interruption notes |
| Planned Quantity | Matching production target |
| Variance Quantity | Actual good output minus plan |
| Scrap Alarm | Configured scrap-rate check |
| Validation Status | Record validity indicator |

**Retrieve the matching production plan**

```excel
=IF(A4:A2000="","",
   XLOOKUP(
      TEXT(B4:B2000,"yyyymmdd")&"_"&
      C4:C2000&"_"&
      D4:D2000&"_"&
      E4:E2000,
      '05_PLN_Shift'!$K$4:$K$100,
      '05_PLN_Shift'!$E$4:$E$100,
      0
   )
)
```

The plan key must use the same date and text normalization on both sides. Date formatting, trailing spaces, and inconsistent station or assembly codes can cause valid records to fail matching.

If multiple reports are allowed against one production plan, the target must not be counted repeatedly as though each report were a separate plan. A production implementation should aggregate actual output by the complete planning key.

**Production variance**

```excel
=IF(A4:A2000="","",F4:F2000-I4:I2000)
```

A positive result indicates output above the matched target; a negative result indicates a shortfall.

**Scrap-rate monitoring**

```excel
=IF(A4:A2000="","",
   LET(
      totalUnits,F4:F2000+G4:G2000,
      scrapRate,IF(totalUnits>0,G4:G2000/totalUnits,0),
      tolRate,'01_SYS'!$D$13,
      IF(
         totalUnits=0,
         "No Output",
         IF(scrapRate>tolRate,"Scrap Above Tolerance","Within Tolerance")
      )
   )
)
```

The reference scrap rate is calculated as scrap divided by good output plus scrap. The default tolerance is 2%, but the actual threshold should be approved for the relevant manufacturing process.

**Production validation**

A report should be accepted only when the station and assembly exist in their master data and all quantities satisfy the defined constraints.

At minimum:

- Good output must be non-negative.
- Scrap quantity must be explicitly recorded, using zero when no scrap occurred.
- The station and assembly must be registered.
- The report must have a unique identifier.
- The date, shift, and station must match a valid reporting context.
- Duplicate or conflicting records must be flagged before their consumption is applied to inventory.

#### Production Consumption and Inventory Feedback

Actual production reports are the feedback source for the material model.

For an assembly with good output \(Q_g\), recorded scrap \(Q_s\), and a BOM quantity per assembly \(B_p\), a possible gross consumption rule is:

\[
C_p=(Q_g+Q_s)\times B_p
\]

This equation assumes that both accepted assemblies and scrapped assemblies consume the full standard quantity of each component. Where actual scrap patterns differ, the workshop must define the appropriate consumption policy.

The inventory model must use one consistent policy for:

- BOM-based theoretical consumption.
- Good output and scrap.
- Actual material issues, if separately recorded.
- Reversals and corrections.
- Duplicate report prevention.

A report should not reduce inventory more than once. The source specification describes BOM-based consumption feedback, but does not establish a complete transaction ledger with immutable posting identifiers. That control must be implemented and tested before the workbook is used as an authoritative inventory record.

#### Sheet `10_DSH_Board` — Shop-floor Operations Dashboard

The dashboard consolidates operational information for production supervisors and dispatchers.

The reference filter area contains:

| Cell | Filter |
|---|---|
| `B2` | Production date |
| `D2` | Shift |
| `F2` | Target station or all stations |

The proposed KPI and monitoring areas include:

- Shift production attainment.
- Complete-kit delivery rate.
- Number of stations with blocked material readiness.
- Number of shortage-affected part types.
- Replenishment quantities by upstream manufacturing source.
- A ranked list of the most critical shortages.

**Production attainment**

```excel
=LET(
   targetDate,$B$2,
   targetShift,$D$2,
   totPlan,
      SUMIFS(
         '05_PLN_Shift'!$E$4:$E$100,
         '05_PLN_Shift'!$A$4:$A$100,targetDate,
         '05_PLN_Shift'!$B$4:$B$100,targetShift
      ),
   totAct,
      SUMIFS(
         '09_ACT_Report'!$F$4:$F$2000,
         '09_ACT_Report'!$B$4:$B$2000,targetDate,
         '09_ACT_Report'!$C$4:$C$2000,targetShift
      ),
   IF(totPlan=0,"No Production Plan",TEXT(totAct/totPlan,"0.0%"))
)
```

This is a reference calculation. It should be extended to the station filter and to the selected plan-status policy. Actual output must be aggregated against the appropriate plan scope to avoid misleading percentages.

**Complete-kit rate**

```excel
=LET(
   targetShift,$D$2,
   totTasks,COUNTIF('08_LOG_Trolley'!$B$4:$B$1000,targetShift),
   readyTasks,
      COUNTIFS(
         '08_LOG_Trolley'!$B$4:$B$1000,targetShift,
         '08_LOG_Trolley'!$G$4:$G$1000,"Ready"
      ),
   IF(totTasks=0,"No Delivery Tasks",readyTasks/totTasks)
)
```

This metric depends on task granularity. If a single trolley delivery task represents one part rather than one complete station kit, the result is a task-readiness rate, not a complete-station-kit rate. The dashboard label must reflect the implemented measurement.

**Blocked station count**

Count unique stations with a blocked status in the selected shift. Counting blocked material lines instead of unique stations will overstate the number of affected stations.

**Shortage part count**

Count unique registered parts whose calculated shortage is positive. Exclude blank rows and invalid master records.

**Upstream replenishment summary**

Aggregate the suggested replenishment quantity by manufacturing source:

- Laser cutting.
- Bending.
- Machining.

This gives upstream production teams a consolidated view of the quantity required by source. The result remains a planning signal until the upstream work has been accepted, produced, and physically received.

**Shortage ranking**

The reference design uses dynamic-array functions such as `FILTER`, `SORT`, `HSTACK`, and `CHOOSEROWS` to generate a ranked shortage list.

A valid ranking should include the part ID, description, manufacturing source or storage location, available quantity, shortage quantity, and suggested replenishment quantity. The sorting key should be explicitly defined and should not confuse the largest absolute shortage with the most urgent time-to-stockout risk.

### Formula Reference

The following groups summarize the principal calculation patterns used throughout the proposed architecture.

<details>
<summary>Configuration and master-data formulas</summary>

| Purpose | Formula or function | Control objective |
|---|---|---|
| Parameter display | `TEXT`, concatenation | Make shared settings readable |
| Parameter validation | `IF`, `ISNUMBER`, range checks | Flag missing or invalid settings |
| Master-data retrieval | `XLOOKUP` | Retrieve names, source categories, and locations |
| BOM relationship validation | `MATCH`, `ISNUMBER` | Prevent unregistered part relationships |
| Safety-stock rounding | `CEILING.MATH` | Align inventory buffers to packaging quantities |
| Table-based aggregation | `SUMIFS`, `COUNTIFS` | Aggregate operational records using explicit criteria |

</details>

<details>
<summary>Planning and inventory formulas</summary>

| Purpose | Formula or function | Control objective |
|---|---|---|
| Plan-to-BOM expansion | Plan quantity × BOM usage | Calculate component gross demand |
| Part-level demand aggregation | `SUMIFS` | Combine demand across the defined planning scope |
| Shortage calculation | `MAX(0, required - available)` | Prevent negative shortage values |
| Replenishment quantity | `LET`, `XLOOKUP`, `CEILING.MATH` | Apply safety stock and package rounding |
| Replenishment classification | `IF` with configured thresholds | Expose Normal, Replenish, and Urgent states |
| Shortage ranking | `FILTER`, `SORT`, `CHOOSEROWS` | Prioritize visible material exceptions |

</details>

<details>
<summary>Logistics, reporting, and dashboard formulas</summary>

| Purpose | Formula or function | Control objective |
|---|---|---|
| Task identification | `TEXT`, `ROW` | Generate readable task references |
| Station-to-trolley mapping | `XLOOKUP` | Retrieve the configured transport resource |
| Readiness classification | `LET`, threshold comparisons | Classify delivery readiness |
| Production-plan matching | `XLOOKUP` with a composite key | Retrieve the corresponding plan quantity |
| Production variance | Actual output − plan | Quantify the output gap |
| Scrap monitoring | `LET`, ratio calculation | Compare scrap against the configured tolerance |
| KPI aggregation | `SUMIFS`, `COUNTIFS` | Summarize production and delivery outcomes |

</details>

**Formula compatibility:** The design uses Microsoft 365 dynamic-array functionality, including `FILTER`, `LET`, `HSTACK`, and `CHOOSEROWS`. Availability varies by Excel version. Validate every formula in the target environment before release.

The formulas in this README are reference implementations and design patterns, not a claim that a fully tested workbook has already been delivered. Where an expression uses a recommended table name, placeholder field, or illustrative range, that reference must be mapped to the actual workbook structure.

### Validation Rules

| Field or control | Rule | Required error behavior |
|---|---|---|
| Part ID | Must be unique and nonblank for active records | Flag duplicates or missing identifiers |
| Manufacturing source | Must be Laser, Bending, or Machining | Reject or flag unsupported categories |
| Supermarket location | Must be present for an active part | Mark master data incomplete |
| SNP | Must be numeric and greater than zero | Block package rounding and task release |
| Average daily consumption | Must be numeric and have a defined time basis | Flag missing or inconsistent inputs |
| BOM Part ID | Must exist in the part master | Flag an invalid BOM relationship |
| BOM quantity | Must be greater than zero for active relationships | Prevent invalid demand calculations |
| Station ID | Must exist in the station master | Flag invalid station references |
| Trolley assignment | Must map to a registered resource | Block unconfirmed assignments |
| Planned quantity | Must be a positive integer for a released production plan | Flag invalid production quantities |
| Shift ID | Must match the configured shift dictionary | Reject unsupported shift values |
| Plan uniqueness | Must follow the approved duplicate-plan policy | Flag duplicate or conflicting records |
| Inventory receipt | Must reflect physically received quantities under the defined posting policy | Prevent unconfirmed receipts from being treated as stock |
| Inventory adjustment | Must be recorded with a reason and an authorized correction process | Flag unsupported corrections |
| Production report ID | Must be unique | Prevent duplicate consumption posting |
| Actual good quantity | Must be non-negative | Flag invalid production reports |
| Scrap quantity | Must be explicitly entered and non-negative | Reject incomplete or invalid scrap records |
| Production report context | Date, shift, station, and assembly must be valid | Flag unmatched or ambiguous reports |
| Kit readiness | Must evaluate the full requirement set for the intended scope | Block dispatch when required material is unavailable |
| Trolley capacity | Must evaluate the combined load against actual capacity | Flag overloaded loads |
| Dynamic-array output | Spill area must remain unobstructed | Resolve `#SPILL!` before using the output |
| Formula inputs | Must use valid numeric or text types as defined | Flag text-formatted numbers and malformed identifiers |
| Dashboard denominators | Must be valid for the selected reporting scope | Display an explicit no-plan or no-task state rather than implying normal performance |

#### Cross-Module Integrity Checks

Before operational deployment, verify that:

1. Every active production-plan assembly has a valid BOM.
2. Every BOM part maps to a registered part with a valid source and location.
3. Each production requirement can be traced back to its plan and BOM relationship.
4. Inventory availability uses one consistent treatment of physical stock, reservations, inbound quantities, and adjustments.
5. Each production report contributes to inventory consumption at most once.
6. A trolley cannot be treated as available while it has an unresolved active assignment.
7. A delivery is not marked complete solely because a task was dispatched.
8. Dashboard metrics use consistent dates, shifts, station filters, and aggregation rules.
9. Parameter changes propagate to every intended dependent calculation.
10. Missing or invalid inputs remain distinguishable from genuine zero values.

The original architecture specification provides a field-level cross-check and a parameter-reference map. Those documents establish the intended design coverage; they should not be interpreted as independent runtime-test evidence for a finished workbook.

### Three Traps That Catch Even Experienced Production Planners

#### Trap 1 — A positive inventory balance does not prove production readiness

**Decision:** Release a welding plan because the supermarket shows sufficient total inventory.

**Hidden flaw:** The stock balance does not account for all competing requirements, reservations, or physical delivery constraints.

**Why the reasoning fails:** Inventory may exist in aggregate while the specific parts required for one station are unavailable in the required quantity or are committed elsewhere.

**Corrected approach:** Calculate demand by part and planning scope, derive net availability, and verify the complete kit before dispatch.

**Decision implication:** Release the plan only after material readiness has been evaluated against the actual component requirements.

<details>
<summary>Calculation reference</summary>

```text
Gross demand = Planned assembly quantity × BOM usage

Shortage = MAX(0, Required quantity − Net available quantity)

Ready = Every required part satisfies the defined availability condition
```

</details>

#### Trap 2 — A delivery task is not the same as a complete kit

**Decision:** Dispatch a trolley because one of its material lines appears ready.

**Hidden flaw:** The readiness calculation evaluates an individual part or line rather than all components needed by the station.

**Why the reasoning fails:** A single missing critical part can prevent production even when the rest of the load is available.

**Corrected approach:** Aggregate readiness across the complete required component set, check packaging and trolley capacity, and validate the dispatch state.

**Decision implication:** A trolley is dispatch-ready only when the actual kit-level rules are satisfied and the assignment is valid.

<details>
<summary>Calculation reference</summary>

```text
For each required part:
    Check required quantity against eligible available quantity.

For the complete kit:
    Check every required part.
    Check combined trolley capacity.
    Check trolley assignment and current status.

Dispatch:
    Permit only when the configured release conditions are satisfied.
```

</details>

#### Trap 3 — Reported output can create false inventory confidence

**Decision:** Trust the updated inventory balance immediately after entering a production report.

**Hidden flaw:** The report may be duplicated, incomplete, unmatched to a plan, or inconsistent with the consumption policy.

**Why the reasoning fails:** Repeatedly applying the same report can deduct the same theoretical consumption more than once. Incorrect scrap treatment can also distort the stock position.

**Corrected approach:** Validate the report identifier and production context, define the good-output and scrap consumption rules, and use a controlled posting process.

**Decision implication:** Inventory changes should follow validated production events, with corrections traceable to their originating records.

<details>
<summary>Calculation reference</summary>

```text
Theoretical component consumption
    = Reported consumed assembly quantity × BOM usage

Apply the consumption once per validated report.
Reconcile inventory corrections through an explicit adjustment process.
```

</details>

### Example Scenario

Consider a hypothetical shift scheduled to produce 20 welding assemblies. Each assembly requires four units of Part P-1001 and two units of Part P-1002.

| Input | Part P-1001 | Part P-1002 |
|---|---:|---:|
| Planned assembly quantity | 20 | 20 |
| BOM usage per assembly | 4 | 2 |
| Gross requirement | 80 | 40 |
| Eligible net available stock | 70 | 50 |
| Initial shortage | 10 | 0 |

The plan creates a requirement for 80 units of P-1001 and 40 units of P-1002. P-1001 is short by 10 units, while P-1002 has sufficient stock for the planned requirement.

Suppose the configured standard package quantity for P-1001 is 10 units. If no additional demand or inventory commitment changes the calculation, the immediate gross shortage can be rounded to one standard package of 10 units.

That does not automatically prove the shift is ready. The planner must also consider the safety-stock policy, any other station's demand, confirmed receipts, reservations, and whether the physical material can be delivered before production starts.

The operational recommendation is therefore to flag P-1001 for replenishment, verify the source and delivery timing, and evaluate the complete station kit before dispatch. Once the upstream material has been received and the trolley delivered, production can proceed subject to the workshop's normal release controls.

If 18 good assemblies and one scrapped assembly are subsequently reported, the BOM-based consumption policy must determine whether material consumption is calculated from 19 total assemblies or from another verified issue record. Under the assumption that both good and scrapped assemblies consume the full standard quantity, P-1001 consumption would be \(19 \times 4 = 76\) units and P-1002 consumption would be \(19 \times 2 = 38\) units.

These are illustrative figures for explaining the control logic, not observed results or a tested workbook output.

### Operating Procedure — Daily Five-Step Control Cycle

1. **Before the shift:** Enter the production plan, verify its master-data references, and release valid tasks.
2. **Before production starts:** Review demand, identify shortages, and communicate replenishment requirements to Laser, Bending, and Machining.
3. **Before dispatch:** Pick materials from the supermarket, verify kit completeness and trolley capacity, and record dispatch and delivery confirmations.
4. **During the shift:** Record good output, scrap, and operational exceptions. Validate reports before applying consumption.
5. **At shift end:** Review production attainment, shortage exposure, and delivery performance. Reconcile physical inventory differences through documented adjustments.

### Data Maintenance and Troubleshooting

**Adding records:** Add new entries within the designated Excel Tables so structured references can expand. Keep dynamic-array spill ranges clear.

**Changing parameters:** Modify the approved configuration values in `01_SYS` rather than editing business constants in downstream formulas.

**Protecting formulas:** Separate operator input cells from calculated cells. Protect formula areas where appropriate and document who can modify master data.

**Resolving `#SPILL!`:** Identify the obstructed spill range and clear unintended cell contents. Do not delete a required formula to hide the error.

**Investigating unchanged results:** Check calculation mode, plan status, lookup keys, and input validation. Confirm that the relevant plan has been released if the implementation filters for released plans.

**Investigating unchanged safety stock:** Confirm that the parameter is stored as a number rather than text, that the formula references the intended cell, and that the workbook has recalculated.

**Investigating invalid report codes:** Verify the station and assembly identifiers against their master data. Use controlled lists where available and remove unintended spaces or formatting differences.

### Compatibility, Scale, and Collaboration

The source design targets Microsoft 365 or Excel 2021 and later, subject to function availability in the installed version. Older Excel versions may not support the required dynamic-array and lookup functions.

The implementation specification gives these planning-scale references:

- Individual-part master: approximately 500 parts, with a proposed design range of 1–2,000.
- Welding assemblies: approximately 50, with a proposed design range of 1–500.
- Production-plan and report history: a recommended workbook-level guideline of no more than 50,000 accumulated rows before considering archival.

These are design targets, not independently benchmarked performance guarantees. Actual recalculation speed depends on formulas, workbook structure, hardware, and data volume.

OneDrive or SharePoint may support light shared viewing and editing. For operational records, centralized responsibility for production-plan entry and inventory receipt entry is recommended to reduce conflicting updates.

### Scope and Implementation Boundaries

The workbook is intended to provide a lightweight shop-floor material-flow control layer. It does not implement:

- Physical factory layout and industrial-engineering route design.
- PLC-level control of AGVs or automated trolleys.
- Automatic equipment telemetry through IoT or SCADA.
- Full advanced planning and scheduling algorithms.
- A transactional database or enterprise-grade multi-user inventory ledger unless separately implemented.
- Automatic confirmation of physical movements without a defined operator or equipment feedback mechanism.

These boundaries should be considered when deciding whether the framework is suitable for a particular production environment.

</details>

## The Business Logic & Methodology

The system is built around a simple operational principle: production plans should generate material requirements, material availability should constrain execution, and actual production should feed back into the next planning decision.

- **BOM-driven demand translation** converts planned welding assemblies into individual-part requirements. This exposes component shortages that are invisible in an assembly-only schedule and gives planners a clearer basis for releasing production.
- **Inventory-position reconciliation** distinguishes physical stock from material already committed or expected. This reduces the risk of treating the same stock as available for multiple production requirements.
- **Threshold-based replenishment** compares material requirements with the defined stock position and highlights shortages according to configured operating rules. The result is a prioritized upstream replenishment signal rather than a generic inventory warning.
- **Containerized internal logistics** connects material-picking requirements to trolley assignments, delivery destinations, packaging constraints, and kit readiness. This helps the logistics team focus on the material needed at each production station.
- **Actual-output feedback** uses production reports and the approved consumption policy to update the material position. The workshop can then revise its replenishment priorities using current operating information instead of relying solely on the original plan.

Together, these methods connect planning, inventory, logistics, and production reporting into a repeatable daily control process. The framework improves visibility and decision consistency; its reliability still depends on accurate master data, disciplined physical confirmations, and validated calculation rules.

## Other Tools in This Series

Explore additional lightweight manufacturing and operational decision-support tools in the project owner's GitHub profile:

- [HyVoid on GitHub](https://github.com/HyVoid) — manufacturing, planning, and operational spreadsheet tools.

## License

This project specifies the **Apache License 2.0**. Refer to the repository's `LICENSE` file for the governing terms.



