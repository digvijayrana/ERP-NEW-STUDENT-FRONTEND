const tsEslint = require('typescript-eslint');
const eslint = require('@eslint/js');

module.exports = tsEslint.config(
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  {
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/no-magic-numbers': ['warn', {
        ignore: [0, 1, -1],
        ignoreEnums: true,
        ignoreReadonlyClassProperties: true,
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        enforceConst: true
      }],
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-var': 'error',
      'prefer-const': 'error',
      'eqeqeq': ['error', 'always'],
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-throw-literal': 'error',
      'no-template-curly-in-string': 'warn'
    }
  },
  {
    ignores: ['node_modules/', 'dist/', '.angular/']
  }
);
