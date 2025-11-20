export interface ClipboardText {
  readClipboardText: () => Promise<string>;
  writeClipboardText: (text: string) => Promise<void>;
}
