module.exports = {
  coverageDirectory: './test/coverage',
  globals: {
    __PATH_PREFIX__: true,
    __BROWSER__: true,
    graphql: true,
    'ts-jest': {
      tsConfigFile: '<rootDir>/tsconfig.json',
    },
  },
  moduleDirectories: ['node_modules', 'src', 'static'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {
    '\\.(s)?css$': '<rootDir>/test/__mocks__/styleMock.js',
  },
  testMatch: ['<rootDir>/**/**/*.spec.+(ts|tsx)'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/.cache/', '/public/'],
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/utils/file-transformer.js',
    '^.+\\.(js)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
}
