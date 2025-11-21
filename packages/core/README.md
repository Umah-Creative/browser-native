# @umah-creative/browser-native

![npm](https://img.shields.io/npm/v/@umah-creative/browser-native?color=blue&logo=npm)
![typescript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)
![node](https://img.shields.io/badge/Node.js->=18-339933?logo=node.js)
![license](https://img.shields.io/badge/license-MIT-green)
![github-actions](https://img.shields.io/badge/CI-GitHub%20Actions-blue?logo=github)

A **lightweight, modular, and framework-agnostic library** providing a unified interface to browser-native APIs like Clipboard, Notifications, Geolocation, and more. Fully tree-shakeable and optimized for modern web applications.

---

## Installation

```bash
pnpm add @umah-creative/browser-native
```

## Usage

```ts
import {
  Clipboard,
  Notification,
  Geolocation,
} from '@umah-creative/browser-native';

// Clipboard
Clipboard.writeText('Hello World!');

// Notification
Notification.show('Hello!', { body: 'This is a notification.' });

// Geolocation
const position = await Geolocation.getCurrentPosition();
console.log(position.coords.latitude, position.coords.longitude);
```

## Features

- **Modular API:** Pick only the APIs you need.
- **TypeScript-first:** Fully typed for excellent developer experience.
- **Tree-shakeable:** Works with modern bundlers like Vite, Webpack, Rollup.
- **Framework-agnostic:** Can be used in any JavaScript/TypeScript project.

---

## Documentation

Generate API documentation:

```bash
pnpm build:docs
```

---

## Contributing

1. Fork the repository
2. Run `pnpm install`
3. Make your changes in `packages/core`
4. Run `pnpm build` and `pnpm test`
5. Submit a pull request

## License

MIT © [Umah Creative](https://github.com/umah-creative)
