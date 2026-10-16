export type CsvImportType = 'parts' | 'bom' | 'plans' | 'inventories' | 'reports';

export function parseCsvText(text: string): string[][] {
  const lines: string[][] = [];
  let currentRow: string[] = [];
  let currentField = '';
  let insideQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (char === '"') {
      if (insideQuotes && nextChar === '"') {
        currentField += '"';
        i++; // skip escaped quote
      } else {
        insideQuotes = !insideQuotes;
      }
    } else if (char === ',' && !insideQuotes) {
      currentRow.push(currentField.trim());
      currentField = '';
    } else if ((char === '\r' || char === '\n') && !insideQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++; // skip \n of \r\n
      }
      currentRow.push(currentField.trim());
      if (currentRow.some(cell => cell.length > 0)) {
        lines.push(currentRow);
      }
      currentRow = [];
      currentField = '';
    } else {
      currentField += char;
    }
  }

  if (currentField.length > 0 || currentRow.length > 0) {
    currentRow.push(currentField.trim());
    if (currentRow.some(cell => cell.length > 0)) {
      lines.push(currentRow);
    }
  }

  return lines;
}

export function downloadCsvTemplate(type: CsvImportType) {
  let filename = '';
  let content = '';

  switch (type) {
    case 'parts':
      filename = 'template_parts_master.csv';
      content = 'Part ID,Part Name,Process Source,Spec,Location,SNP,Daily Consumption\n' +
        'P-2001,Upper Bracket Stiffener,Laser,Q345B t=5.0mm,A-06-01,20,30\n' +
        'P-2002,Side Channel Flange,Bending,Q345B t=6.0mm,B-06-01,15,25\n' +
        'P-2003,Turned Pivot Collar,Machining,45# Steel,C-06-01,40,50';
      break;
    case 'bom':
      filename = 'template_welding_bom.csv';
      content = 'Component ID,Component Name,Part ID,Qty per Assembly\n' +
        'WC-020,Front Bumper Reinforcement Assembly,P-1001,2\n' +
        'WC-020,Front Bumper Reinforcement Assembly,P-1016,1\n' +
        'WC-020,Front Bumper Reinforcement Assembly,P-1038,4';
      break;
    case 'plans':
      filename = 'template_shift_plans.csv';
      content = 'Date,Shift,Station ID,Component ID,Planned Qty,Status\n' +
        '2026-10-09,Shift-1,ST-ROBOT-01,WC-001,25,Released\n' +
        '2026-10-09,Shift-2,ST-ROBOT-02,WC-002,30,Planned';
      break;
    case 'inventories':
      filename = 'template_supermarket_inventory.csv';
      content = 'Part ID,Opening Stock,Intake Today,Stock Adjustment\n' +
        'P-1001,50,30,0\n' +
        'P-1002,40,20,-2';
      break;
    case 'reports':
      filename = 'template_work_reports.csv';
      content = 'Report ID,Date,Shift,Station ID,Component ID,Actual Qty,Scrap Qty,Downtime Remarks\n' +
        'REP-0010,2026-10-08,Shift-1,ST-ROBOT-01,WC-001,24,1,Porosity on seam 3\n' +
        'REP-0011,2026-10-08,Shift-1,ST-ROBOT-02,WC-002,30,0,Nominal run';
      break;
  }

  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
