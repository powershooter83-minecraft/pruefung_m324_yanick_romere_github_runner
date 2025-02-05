import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.mocha,
      },
    },
  },
  pluginJs.configs.recommended,
  {
    rules: {
      eqeqeq: ['error', 'always'], // Enforce === and !== over == and !=
      'no-var': 'error', // Disallow the use of var,
      'prefer-const': 'error',
    },
  },
];
