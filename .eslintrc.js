module.exports = {
  extends: [
    'standard',
    'plugin:react/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
    'prettier/standard',
  ],
  parser: 'typescript-eslint-parser',
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  plugins: ['react'],
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
    'padding-line-between-statements': [
      2,
      // Always require blank lines after directive (like 'use-strict'), except between directives
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
      // Always require blank lines after import, except between imports
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'any', prev: 'import', next: 'import' },
      // Always require blank lines before and after every sequence of variable declarations and export
      {
        blankLine: 'always',
        prev: '*',
        next: ['const', 'let', 'var', 'export'],
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var', 'export'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var', 'export'],
        next: ['const', 'let', 'var', 'export'],
      },
      // Always require blank lines before and after class declaration, if, do/while, switch, try
      {
        blankLine: 'always',
        prev: '*',
        next: ['if', 'class', 'for', 'do', 'while', 'switch', 'try'],
      },
      {
        blankLine: 'always',
        prev: ['if', 'class', 'for', 'do', 'while', 'switch', 'try'],
        next: '*',
      },
      // Always require blank lines before return statements
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
  },
}
