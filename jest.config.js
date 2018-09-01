module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/utils/file-transformer.js',
    '^.+\\.(js)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    __PATH_PREFIX__: true,
    __BROWSER__: true,
    graphql: true,
    'ts-jest': {
      tsConfigFile: '<rootDir>/tsconfig.json',
    },
  },
  testMatch: ['<rootDir>/**/**/*.spec.+(ts|tsx)'],
  coverageDirectory: './test/coverage',
  moduleDirectories: ['node_modules', 'src', 'static'],
  moduleNameMapper: {
    '\\.(s)?css$': '<rootDir>/test/__mocks__/styleMock.js',
  },
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/.cache/', '/public/'],
  // ==========================
  // transform: {
  //   '^.+\\.js$': 'babel-jest',
  // },
  // moduleNameMapper: {
  //   '\\.(s)?css$': '<rootDir>/test/__mocks__/styleMock.js',
  // },
  // testPathIgnorePatterns: ['/node_modules/', '<rootDir>/.cache/'],
  // globals: {
  //   __PATH_PREFIX__: true,
  //   __BROWSER__: true,
  //   graphql: true,
  // },
}
