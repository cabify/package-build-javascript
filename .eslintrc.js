module.exports = {
  extends: ['@cabify/eslint-config/recommended'],
  env: { node: true },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json'],
      },
    },
  },
};
