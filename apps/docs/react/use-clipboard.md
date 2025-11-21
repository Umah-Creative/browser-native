# useClipboard (React)

A hook for interacting with the system clipboard.

## Usage

```tsx
import { useClipboard } from '@umah-creative/browser-native-react';

function ClipboardDemo() {
  const { text, isLoading, error, read, write } = useClipboard();

  return (
    <div>
      <p>Current text: {text}</p>
      <button onClick={() => write('Hello')}>Copy "Hello"</button>
      <button onClick={() => read()}>Paste</button>

      {isLoading && <span>Loading...</span>}
      {error && <span>Error: {error.message}</span>}
    </div>
  );
}
```

## API

### Returns

`UseClipboardResult` object:

- **text**: `string` - The last read or written text.
- **isLoading**: `boolean` - Loading state for async operations.
- **error**: `Error | null` - Error object if an operation failed.
- **read**: `() => Promise<string>` - Function to read from clipboard.
- **write**: `(text: string) => Promise<void>` - Function to write to clipboard.
