module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:import/typescript',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:promise/recommended',
    'plugin:react/recommended',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'promise', 'react'],
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    useJSXTextNode: true,
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    semi: ['error', 'never'],
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'no-console': 'warn',
    'no-undef': 'error',
    'object-curly-spacing': ['error', 'always'],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 80,
        parser: 'typescript',
      },
    ],
    'promise/no-callback-in-promise': 'off',
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/array-type': 'warn',
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/camelcase': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/interface-name-prefix': 'warn',
    '@typescript-eslint/member-delimiter-style': ['off'],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/prefer-interface': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    __DEV__: true,
  },
}
