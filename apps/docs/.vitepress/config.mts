import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Browser Native',
  description:
    'A modular, lightweight, and framework-agnostic toolkit for interacting with browser-native APIs.',
  appearance: {
    // @ts-expect-error -- not fully supported yet
    initialValue: 'light',
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Core', link: '/core/clipboard' },
      { text: 'React', link: '/react/use-clipboard' },
      { text: 'API', link: '/api/modules' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [{ text: 'Getting Started', link: '/guide/getting-started' }],
        },
      ],
      '/core/': [
        {
          text: 'Core API',
          items: [{ text: 'Clipboard', link: '/core/clipboard' }],
        },
      ],
      '/react/': [
        {
          text: 'React Hooks',
          items: [{ text: 'useClipboard', link: '/react/use-clipboard' }],
        },
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Modules', link: '/api/modules' },
            { text: 'Core', link: '/api/modules/umah_creative_browser_native' },
            {
              text: 'React',
              link: '/api/modules/umah_creative_browser_native_react',
            },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/umah-creative/browser-native',
      },
    ],
  },
});
