# @umah-creative/browser-native-types

![npm](https://img.shields.io/npm/v/@umah-creative/browser-native-types?color=blue&logo=npm)
![typescript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)
![node](https://img.shields.io/badge/Node.js->=18-339933?logo=node.js)
![license](https://img.shields.io/badge/license-MIT-green)
![github-actions](https://img.shields.io/badge/CI-GitHub%20Actions-blue?logo=github)

A **shared TypeScript types package** for the `@umah-creative/browser-native` ecosystem. Provides type definitions for the core APIs and React hooks, allowing strong typing across packages without duplicating code.

---

## Installation

```bash
pnpm add @umah-creative/browser-native-types
```

> **Note:** This package provides shared TypeScript types used across the `@umah-creative/browser-native` ecosystem. Direct imports are generally only needed if you want types without importing the actual functionality.

## Usage

```ts
import type {
  ClipboardOptions,
  NotificationOptions,
} from '@umah-creative/browser-native-types';

function example(options: ClipboardOptions) {
  // Strongly typed clipboard options
}
```

```ts
import type { UseClipboardReturn } from '@umah-creative/browser-native-types';

// Use with React hooks
const result: UseClipboardReturn = { copy: () => {}, isCopied: false };
```

## Contributing

1. Fork the repository
2. Run `pnpm install`
3. Make your changes in `packages/types`
4. Run `pnpm build` and `pnpm test`
5. Submit a pull request

## License

MIT © [Umah Creative](https://github.com/umah-creative)
