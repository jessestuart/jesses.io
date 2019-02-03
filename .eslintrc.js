module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'standard',
  ],
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  plugins: ['import', 'prettier', 'react'],
  globals: {
    __PATH_PREFIX__: true,
    graphql: false,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  rules: {
    'comma-dangle': 'off',
    'no-console': 'warn',
    'react/prop-types': 'warn',
    'react/no-unescaped-entities': 'off',
    'space-before-function-paren': 'off',
  },
}
