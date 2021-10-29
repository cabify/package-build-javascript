module.exports = {
  extends: ['@cabify'],
  overrides: [
    {
      files: ['**/*.js', '**/*.jsx'],
      parser: '@babel/eslint-parser',
    },
  ],
  env: {
    node: true,
  },
  rules: {
    'import/prefer-default-export': 'off',
    // disable type related rules to make linting faster
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/prefer-includes': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/prefer-string-starts-ends-with': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/unbound-method': 'off',
  },
  settings: {
    'import/resolver': {
      'eslint-import-resolver-typescript': false,
      node: {
        extensions: ['.mjs', '.js', '.json'],
      },
    },
  },
};
