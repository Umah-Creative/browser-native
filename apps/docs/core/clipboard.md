# Clipboard (Core)

Interact with the system clipboard using the Clipboard API.

## Usage

```typescript
import {
  readClipboardText,
  writeClipboardText,
  clearClipboard,
} from '@umah-creative/browser-native';
```

### Read Text

Reads text from the clipboard.

```typescript
try {
  const text = await readClipboardText();
  console.log(text);
} catch (error) {
  console.error('Failed to read clipboard');
}
```

### Write Text

Writes text to the clipboard.

```typescript
try {
  await writeClipboardText('Hello World');
} catch (error) {
  console.error('Failed to write to clipboard');
}
```

### Clear Clipboard

Clears the clipboard content.

```typescript
try {
  await clearClipboard();
} catch (error) {
  console.error('Failed to clear clipboard');
}
```
