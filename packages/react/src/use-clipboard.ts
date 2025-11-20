'use client';

import { useState, useCallback } from 'react';
import {
  readClipboardText,
  writeClipboardText,
} from '@umah-creative/browser-native';
import { UseClipboardResult } from '@umah-creative/browser-native-types';

/**
 * A React hook that provides a simple interface for reading and writing to the clipboard.
 */
export function useClipboard(): UseClipboardResult {
  const [text, setText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const read = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const content = await readClipboardText();
      setText(content);

      return content;
    } catch (err) {
      const errorObj = err instanceof Error ? err : new Error(String(err));
      setError(errorObj);

      throw errorObj;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const write = useCallback(async (newText: string) => {
    setIsLoading(true);
    setError(null);
    try {
      await writeClipboardText(newText);
      setText(newText);
    } catch (err) {
      const errorObj = err instanceof Error ? err : new Error(String(err));
      setError(errorObj);

      throw errorObj;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    text,
    isLoading,
    error,

    read,
    write,
  };
}
