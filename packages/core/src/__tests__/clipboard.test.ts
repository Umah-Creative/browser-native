import {
  readClipboardText,
  writeClipboardText,
  clearClipboard,
} from '../clipboard';

describe('Clipboard API', () => {
  const mockReadText = jest.fn();
  const mockWriteText = jest.fn();

  beforeAll(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        readText: mockReadText,
        writeText: mockWriteText,
      },
      configurable: true,
    });
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('readClipboardText', () => {
    it('should read text from clipboard', async () => {
      mockReadText.mockResolvedValue('Hello World');
      const text = await readClipboardText();
      expect(text).toBe('Hello World');
      expect(mockReadText).toHaveBeenCalledTimes(1);
    });

    it('should throw error if clipboard API is not supported', async () => {
      const originalClipboard = navigator.clipboard;
      Object.defineProperty(navigator, 'clipboard', {
        value: undefined,
        configurable: true,
      });

      await expect(readClipboardText()).rejects.toThrow(
        'Clipboard API not supported'
      );

      Object.defineProperty(navigator, 'clipboard', {
        value: originalClipboard,
        configurable: true,
      });
    });
  });

  describe('writeClipboardText', () => {
    it('should write text to clipboard', async () => {
      mockWriteText.mockResolvedValue(undefined);
      await writeClipboardText('New Text');
      expect(mockWriteText).toHaveBeenCalledWith('New Text');
    });
  });

  describe('clearClipboard', () => {
    it('should clear clipboard text', async () => {
      mockWriteText.mockResolvedValue(undefined);
      await clearClipboard();
      expect(mockWriteText).toHaveBeenCalledWith('');
    });
  });
});
