# Browser Native

![pnpm](https://img.shields.io/badge/pnpm-v10.x-orange?logo=pnpm)
![typescript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)
![node](https://img.shields.io/badge/Node.js->=18-339933?logo=node.js)
![npm](https://img.shields.io/npm/v/@umah-creative/browser-native?color=blue&logo=npm)
![license](https://img.shields.io/badge/license-MIT-green)
![github-actions](https://img.shields.io/badge/CI-GitHub%20Actions-blue?logo=github)

A **modular, lightweight, and framework-agnostic toolkit** for interacting with browser-native APIs, fully typed for TypeScript and optimized for modern web applications.

---

## Packages

| Package                                                                                                    | Description                                                                                                      | Version                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`@umah-creative/browser-native`](https://www.npmjs.com/package/@umah-creative/browser-native)             | [Core library README](https://github.com/umah-creative/browser-native/blob/main/packages/core/README.md)         | [![npm version](https://badge.fury.io/js/%40umah-creative%2Fbrowser-native.svg)](https://www.npmjs.com/package/@umah-creative/browser-native)             |
| [`@umah-creative/browser-native-react`](https://www.npmjs.com/package/@umah-creative/browser-native-react) | [React hooks wrapper README](https://github.com/umah-creative/browser-native/blob/main/packages/react/README.md) | [![npm version](https://badge.fury.io/js/%40umah-creative%2Fbrowser-native-react.svg)](https://www.npmjs.com/package/@umah-creative/browser-native-react) |
| [`@umah-creative/browser-native-types`](https://www.npmjs.com/package/@umah-creative/browser-native-types) | [Types package README](https://github.com/umah-creative/browser-native/blob/main/packages/types/README.md)       | [![npm version](https://badge.fury.io/js/%40umah-creative%2Fbrowser-native-types.svg)](https://www.npmjs.com/package/@umah-creative/browser-native-types) |

---

## Features

- **Modular:** Use only the parts you need.
- **TypeScript-first:** Fully typed for excellent developer experience.
- **Tree-shakeable:** Optimized for modern bundlers.
- **Framework-agnostic:** Core logic separated from framework-specific wrappers.

---

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm >= 8

### Install

```bash
pnpm install
```

### Build

```bash
pnpm build
```

### Test

```bash
pnpm test
```

## Documentation

Generate API documentation:

```bash
pnpm build:docs
```

## Contributing

1. Fork the repository
2. Run `pnpm install`
3. Make your changes in the relevant package
4. Run `pnpm build` and `pnpm test`
5. Submit a pull request

## License

MIT © [Umah Creative](https://github.com/umah-creative)
