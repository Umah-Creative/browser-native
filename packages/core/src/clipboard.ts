import { ClipboardText } from '@umah-creative/browser-native-types';

/**
 * Reads the current text from the clipboard.
 */
export async function readClipboardText(): ReturnType<
  ClipboardText['readClipboardText']
> {
  if (!navigator.clipboard) throw new Error('Clipboard API not supported');

  return navigator.clipboard.readText();
}

/**
 * Writes the given text to the clipboard.
 */
export async function writeClipboardText(
  text: string
): ReturnType<ClipboardText['writeClipboardText']> {
  if (!navigator.clipboard) throw new Error('Clipboard API not supported');

  return navigator.clipboard.writeText(text);
}
