import { isPageVisible, onVisibilityChange } from '../visibility';

describe('visibility utilities', () => {
  describe('isPageVisible', () => {
    it('should return true when document is visible', () => {
      Object.defineProperty(document, 'visibilityState', {
        value: 'visible',
        configurable: true,
      });

      expect(isPageVisible()).toBe(true);
    });

    it('should return false when document is hidden', () => {
      Object.defineProperty(document, 'visibilityState', {
        value: 'hidden',
        configurable: true,
      });

      expect(isPageVisible()).toBe(false);
    });
  });

  describe('onVisibilityChange', () => {
    it('should call callback when visibility changes', () => {
      const callback = jest.fn();

      // Add listener
      const unsubscribe = onVisibilityChange(callback);

      // Simulate a visibility change
      Object.defineProperty(document, 'visibilityState', {
        value: 'hidden',
        configurable: true,
      });
      document.dispatchEvent(new Event('visibilitychange'));

      expect(callback).toHaveBeenCalledWith(false);

      // Simulate another visibility change
      Object.defineProperty(document, 'visibilityState', {
        value: 'visible',
        configurable: true,
      });
      document.dispatchEvent(new Event('visibilitychange'));

      expect(callback).toHaveBeenCalledWith(true);
      expect(callback).toHaveBeenCalledTimes(2);

      // Remove listener and ensure it doesn't trigger again
      unsubscribe();
      document.dispatchEvent(new Event('visibilitychange'));
      expect(callback).toHaveBeenCalledTimes(2);
    });
  });
});
