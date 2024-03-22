export type StorageState = {
  currentUser: null;
  deviceToken: string | null;
  currentAppVersion: string | null;
  themeMode: string | null;
};

let storageState: StorageState | null = null;

export function getStorageState(): StorageState {
  if (!storageState) {
    throw new Error('Cannot read not yet populated YTM storage');
  }

  return storageState;
}
