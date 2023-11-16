const { TEST_FILE_PATTERNS } = require('./lib/patterns');
const { packageExists } = require('./lib/utils');

const isPrettierAvailable =
  packageExists('prettier') && packageExists('eslint-config-prettier');

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    ...(isPrettierAvailable ? ['prettier'] : []),
  ],
  rules: {
    // DISABLED RULES FROM EXTENDED CONFIGS

    '@typescript-eslint/consistent-indexed-object-style': 'off',
    '@typescript-eslint/unbound-method': 'off',

    // CUSTOMIZED RULES FROM EXTENDED CONFIGS

    '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],

    // ADDITIONAL RULES

    // https://eslint.org/docs/latest/rules/
    'arrow-body-style': ['warn', 'as-needed'],
    complexity: 'warn',
    curly: 'warn',
    eqeqeq: ['error', 'always', { null: 'never' }],
    'guard-for-in': 'error',
    'max-depth': 'warn',
    'max-lines': ['warn', { skipBlankLines: true, skipComments: true }],
    'max-lines-per-function': [
      'warn',
      { skipBlankLines: true, skipComments: true },
    ],
    'max-nested-callbacks': ['warn', { max: 3 }],
    'no-bitwise': 'warn',
    'no-console': ['warn', { allow: ['error', 'warn', 'info'] }],
    'no-duplicate-imports': 'warn',
    'no-eval': 'error',
    'no-magic-numbers': [
      'warn',
      {
        ignore: [-1, 0, 1, 2, 7, 10, 24, 60, 100, 1000, 3600],
        ignoreDefaultValues: true,
        enforceConst: true,
        detectObjects: true,
      },
    ],
    'no-param-reassign': ['error', { props: true }],
    'no-sequences': 'error',
    'no-template-curly-in-string': 'error',
    'no-undef-init': 'warn',
    'no-unreachable-loop': 'error',
    'prefer-template': 'warn',
    radix: 'warn',
    yoda: 'warn',

    // https://typescript-eslint.io/rules/
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/default-param-last': 'warn',
    '@typescript-eslint/method-signature-style': 'warn',
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/no-unused-expressions': 'warn',
  },
  overrides: [
    {
      files: TEST_FILE_PATTERNS,
      rules: {
        // DISABLED RULES FOR TEST FILES

        'no-magic-numbers': 'off',
        'max-lines-per-function': 'off',
        curly: 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
  ],
};