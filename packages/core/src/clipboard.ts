export async function readClipboardText(): Promise<string> {
  if (!navigator.clipboard) throw new Error('Clipboard API not supported');

  return navigator.clipboard.readText();
}

export async function writeClipboardText(text: string): Promise<void> {
  if (!navigator.clipboard) throw new Error('Clipboard API not supported');

  return navigator.clipboard.writeText(text);
}
