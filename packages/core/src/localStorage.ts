/**
 * Writes a value to localStorage.
 */
export function writeLocalStorage(key: string, value: string): void {
  try {
    window.localStorage.setItem(key, value);
  } catch (err) {
    console.error('Failed to write to localStorage:', err);
    throw err;
  }
}

/**
 * Reads a value from localStorage.
 */
export function readLocalStorage(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch (err) {
    console.error('Failed to read from localStorage:', err);
    throw err;
  }
}

/**
 * Removes a value from localStorage.
 */
export function removeLocalStorage(key: string): void {
  try {
    window.localStorage.removeItem(key);
  } catch (err) {
    console.error('Failed to remove from localStorage:', err);
    throw err;
  }
}
