# Getting Started

## Installation

You can install the core package or the React wrapper depending on your needs.

### Core Package

For vanilla JavaScript/TypeScript projects:

```bash
npm install @umah-creative/browser-native
# or
pnpm add @umah-creative/browser-native
```

### React Package

For React applications:

```bash
npm install @umah-creative/browser-native-react
# or
pnpm add @umah-creative/browser-native-react
```

## Basic Usage

### Core

```typescript
import { readClipboardText } from '@umah-creative/browser-native';

const text = await readClipboardText();
```

### React

```tsx
import { useClipboard } from '@umah-creative/browser-native-react';

function App() {
  const { text, read } = useClipboard();
  // ...
}
```
