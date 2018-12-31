module.exports = {
  extends: [
    'standard',
    'standard-react',
    'plugin:react/recommended',
    'prettier',
  ],
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  plugins: ['import'],
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
    'no-console': 'warn',
    'no-debugger': 'off',
    'react/prop-types': 'warn',
    'react/no-unescaped-entities': 'off',
  },
}
