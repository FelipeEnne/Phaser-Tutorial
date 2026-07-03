import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['src/**/*.js'],
    ignores: ['src/server.js'],
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'script',
      globals: { ...globals.browser, Phaser: 'readonly' },
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
  {
    files: ['src/server.js'],
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'commonjs',
      globals: globals.node,
    },
  },
];
