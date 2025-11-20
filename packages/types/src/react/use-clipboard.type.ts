export interface UseClipboardResult {
  text: string;
  isLoading: boolean;
  error: Error | null;

  read: () => Promise<string>;
  write: (text: string) => Promise<void>;
}
