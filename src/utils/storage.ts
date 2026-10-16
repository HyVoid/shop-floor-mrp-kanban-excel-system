import { AppState } from '../types';
import { getInitialAppState } from '../data/initialData';

const STORAGE_KEY = 'SHOP_FLOOR_MATERIAL_FLOW_STATE';

export function loadSavedState(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return getInitialAppState();
    }
    const parsed = JSON.parse(raw);
    // Basic structural validation
    if (
      Array.isArray(parsed.params) &&
      Array.isArray(parsed.parts) &&
      Array.isArray(parsed.bom) &&
      Array.isArray(parsed.stations) &&
      Array.isArray(parsed.plans) &&
      Array.isArray(parsed.inventories)
    ) {
      return parsed as AppState;
    }
    return getInitialAppState();
  } catch (err) {
    console.error('Failed to load state from localStorage:', err);
    return getInitialAppState();
  }
}

export function saveStateToStorage(state: AppState): string {
  try {
    const timestamp = new Date().toISOString();
    const updated = {
      ...state,
      lastSaved: timestamp
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return timestamp;
  } catch (err) {
    console.error('Failed to save state to localStorage:', err);
    return new Date().toISOString();
  }
}

export function exportBackup(state: AppState) {
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(state, null, 2));
  const downloadAnchor = document.createElement('a');
  const dateStr = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', `material_flow_control_backup_${dateStr}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

export async function parseBackupFile(file: File): Promise<AppState> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        const parsed = JSON.parse(text);
        if (
          Array.isArray(parsed.params) &&
          Array.isArray(parsed.parts) &&
          Array.isArray(parsed.bom) &&
          Array.isArray(parsed.stations) &&
          Array.isArray(parsed.plans)
        ) {
          resolve(parsed as AppState);
        } else {
          reject(new Error('Invalid backup file schema: missing required arrays.'));
        }
      } catch (err) {
        reject(new Error('Failed to parse JSON file: ' + (err as Error).message));
      }
    };
    reader.onerror = () => reject(new Error('Error reading backup file'));
    reader.readAsText(file);
  });
}
