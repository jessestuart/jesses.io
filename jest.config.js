module.exports = {
  // globalSetup: './test/setup.js',
  // globalTeardown: './test/teardown.js',
  // testEnvironment: './test/puppeteer-environment.js',
  coverageDirectory: './test/coverage',
  moduleDirectories: ['node_modules', 'src', 'static'],
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/utils/file-transformer.js',
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    // Plain CSS - match css files that don't end with '.module.css' https://regex101.com/r/VzwrKH/4
    '^(?!.*\\.module\\.(s)?css$).*\\.(s)?css$':
      '<rootDir>/test/__mocks__/styleMock.js',
    // CSS Modules - match files that end with 'module.css'
    '\\.module\\.(s)?css$': 'identity-obj-proxy', // CSS modules
  },
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/.cache/'],
  globals: {
    __PATH_PREFIX__: true,
    __BROWSER__: true,
  },
}
