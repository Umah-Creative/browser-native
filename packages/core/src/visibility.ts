/**
 * Checks if the page is currently visible.
 */
export function isPageVisible(): boolean {
  return document.visibilityState === 'visible';
}

/**
 * Adds an event listener for visibility changes.
 */
export function onVisibilityChange(callback: (visible: boolean) => void) {
  const handler = () => callback(document.visibilityState === 'visible');

  document.addEventListener('visibilitychange', handler);

  return () => document.removeEventListener('visibilitychange', handler);
}
