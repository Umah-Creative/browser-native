import {
  writeLocalStorage,
  readLocalStorage,
  removeLocalStorage,
} from '../localStorage';

describe('localStorage utilities', () => {
  const mockSetItem = jest.fn();
  const mockGetItem = jest.fn();
  const mockRemoveItem = jest.fn();

  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        setItem: mockSetItem,
        getItem: mockGetItem,
        removeItem: mockRemoveItem,
      },
      configurable: true,
    });
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('writeLocalStorage', () => {
    it('should write a value to localStorage', () => {
      writeLocalStorage('myKey', 'myValue');
      expect(mockSetItem).toHaveBeenCalledWith('myKey', 'myValue');
      expect(mockSetItem).toHaveBeenCalledTimes(1);
    });

    it('should throw an error if setItem fails', () => {
      mockSetItem.mockImplementationOnce(() => {
        throw new Error('Storage error');
      });
      expect(() => writeLocalStorage('key', 'value')).toThrow('Storage error');
    });
  });

  describe('readLocalStorage', () => {
    it('should read a value from localStorage', () => {
      mockGetItem.mockReturnValueOnce('storedValue');
      const result = readLocalStorage('myKey');
      expect(result).toBe('storedValue');
      expect(mockGetItem).toHaveBeenCalledWith('myKey');
    });

    it('should return null if key does not exist', () => {
      mockGetItem.mockReturnValueOnce(null);
      const result = readLocalStorage('missingKey');
      expect(result).toBeNull();
    });

    it('should throw an error if getItem fails', () => {
      mockGetItem.mockImplementationOnce(() => {
        throw new Error('Storage error');
      });
      expect(() => readLocalStorage('key')).toThrow('Storage error');
    });
  });

  describe('removeLocalStorage', () => {
    it('should remove a value from localStorage', () => {
      removeLocalStorage('myKey');
      expect(mockRemoveItem).toHaveBeenCalledWith('myKey');
    });

    it('should throw an error if removeItem fails', () => {
      mockRemoveItem.mockImplementationOnce(() => {
        throw new Error('Storage error');
      });
      expect(() => removeLocalStorage('key')).toThrow('Storage error');
    });
  });
});
