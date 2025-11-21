# @umah-creative/browser-native-react

![npm](https://img.shields.io/npm/v/@umah-creative/browser-native-react?color=blue&logo=npm)
![typescript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)
![react](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)
![node](https://img.shields.io/badge/Node.js->=18-339933?logo=node.js)
![license](https://img.shields.io/badge/license-MIT-green)
![github-actions](https://img.shields.io/badge/CI-GitHub%20Actions-blue?logo=github)

A **React hooks wrapper** for the `@umah-creative/browser-native` core library. Provides idiomatic, composable hooks for browser-native APIs like Clipboard, Notifications, Geolocation, and more.

---

## Installation

```bash
pnpm add @umah-creative/browser-native-react
```

<!--
> _Note: **`@umah-creative/browser-native`** is a peer dependency and must also be installed:_

```bash
pnpm add @umah-creative/browser-native
``` -->

## Usage

```ts
import React from 'react';
import { useClipboard, useNotification, useGeolocation } from '@umah-creative/browser-native-react';

function App() {
  const { copy } = useClipboard();
  const { notify } = useNotification();
  const { position, getCurrentPosition } = useGeolocation();

  return (
    <div>
      <button onClick={() => copy('Hello World!')}>Copy to Clipboard</button>
      <button onClick={() => notify('Hi there!', { body: 'This is a notification.' })}>Notify</button>
      <button onClick={getCurrentPosition}>Get Location</button>

      {position && (
        <p>
          Lat: {position.coords.latitude}, Lon: {position.coords.longitude}
        </p>
      )}
    </div>
  );
}
```

## Features

- **Idiomatic React hooks:** Fully composable hooks for all core APIs.
- **TypeScript-first:** Hooks are fully typed for excellent DX.
- **Tree-shakeable:** Only imports what you use.
- **Framework-specific wrapper:** React-friendly interface built on top of the core library.

---

## Documentation

Generate API documentation:

```bash
pnpm build:docs
```

The documentation is auto-generated from the core + React packages.

---

## Contributing

1. Fork the repository
2. Run `pnpm install`
3. Make your changes in `packages/react`
4. Run `pnpm build` and `pnpm test`
5. Submit a pull request

## License

MIT © [Umah Creative](https://github.com/umah-creative)
