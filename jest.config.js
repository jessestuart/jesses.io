module.exports = {
  coverageDirectory: './test/coverage',
  moduleDirectories: ['node_modules', 'src', 'static'],
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/utils/file-transformer.js',
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(s)?css$': '<rootDir>/test/__mocks__/styleMock.js',
  },
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/.cache/'],
  globals: {
    __PATH_PREFIX__: true,
    __BROWSER__: true,
    graphql: true,
  },
}
