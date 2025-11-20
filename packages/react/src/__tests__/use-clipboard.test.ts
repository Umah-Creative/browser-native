import { renderHook, act, waitFor } from '@testing-library/react';
import { useClipboard } from '../use-clipboard';
import * as browserNative from '@umah-creative/browser-native';

// Mock the core library
jest.mock('@umah-creative/browser-native', () => ({
  readClipboardText: jest.fn(),
  writeClipboardText: jest.fn(),
}));

describe('useClipboard', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize with default values', () => {
    const { result } = renderHook(() => useClipboard());

    expect(result.current.text).toBe('');
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(null);
  });

  describe('read', () => {
    it('should read clipboard text successfully', async () => {
      (browserNative.readClipboardText as jest.Mock).mockResolvedValue(
        'Copied Text'
      );
      const { result } = renderHook(() => useClipboard());

      let readPromise: Promise<string>;
      act(() => {
        readPromise = result.current.read();
      });

      expect(result.current.isLoading).toBe(true);

      await waitFor(async () => {
        await readPromise;
      });

      expect(result.current.text).toBe('Copied Text');
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBe(null);
    });

    it('should handle read error', async () => {
      const error = new Error('Read failed');
      (browserNative.readClipboardText as jest.Mock).mockRejectedValue(error);
      const { result } = renderHook(() => useClipboard());

      let readPromise: Promise<string>;
      act(() => {
        readPromise = result.current.read();
      });

      expect(result.current.isLoading).toBe(true);

      await waitFor(async () => {
        try {
          await readPromise;
        } catch (e) {
          // Ignore expected error
        }
      });

      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toEqual(error);
    });
  });

  describe('write', () => {
    it('should write clipboard text successfully', async () => {
      (browserNative.writeClipboardText as jest.Mock).mockResolvedValue(
        undefined
      );
      const { result } = renderHook(() => useClipboard());

      let writePromise: Promise<void>;
      act(() => {
        writePromise = result.current.write('New Text');
      });

      expect(result.current.isLoading).toBe(true);

      await waitFor(async () => {
        await writePromise;
      });

      expect(result.current.text).toBe('New Text');
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBe(null);
      expect(browserNative.writeClipboardText).toHaveBeenCalledWith('New Text');
    });

    it('should handle write error', async () => {
      const error = new Error('Write failed');
      (browserNative.writeClipboardText as jest.Mock).mockRejectedValue(error);
      const { result } = renderHook(() => useClipboard());

      let writePromise: Promise<void>;
      act(() => {
        writePromise = result.current.write('Fail Text');
      });

      expect(result.current.isLoading).toBe(true);

      await waitFor(async () => {
        try {
          await writePromise;
        } catch (e) {
          // Ignore expected error
        }
      });

      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toEqual(error);
    });
  });
});
