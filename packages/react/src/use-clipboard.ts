import { useState, useCallback } from 'react';
import {
  readClipboardText,
  writeClipboardText,
} from '@umah-creative/browser-native';

export function useClipboard() {
  const [text, setText] = useState<string>('');

  const read = useCallback(async () => {
    const content = await readClipboardText();
    setText(content);
    return content;
  }, []);

  const write = useCallback(async (newText: string) => {
    await writeClipboardText(newText);
    setText(newText);
  }, []);

  return {
    text,

    read,
    write,
  };
}
