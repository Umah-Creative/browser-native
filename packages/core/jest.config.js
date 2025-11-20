const baseConfig = require('../../jest.config.base');

/** @type {import('jest').Config} */
const config = {
  ...baseConfig,
  displayName: 'core',
  testEnvironment: 'jsdom',
};

module.exports = config;
