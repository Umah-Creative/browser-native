const baseConfig = require('../../jest.config.base');

/** @type {import('jest').Config} */
const config = {
  ...baseConfig,
  displayName: 'react',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@umah-creative/browser-native$': '<rootDir>/../core/src/index.ts',
  },
};

module.exports = config;
