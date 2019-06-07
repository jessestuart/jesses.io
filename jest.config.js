module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: './test/coverage',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleDirectories: ['src', 'static', 'node_modules'],
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
  reporters: ['default', 'jest-junit'],
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/utils/file-transformer.js',
    '^.+\\.js$': 'babel-jest',
    '.*\\.tsx?$': 'ts-jest',
    '.*\\.css$': '<rootDir>/test/__mocks__/styleMock.ts',
  },
  moduleNameMapper: {
    '.*\\.css$': '<rootDir>/test/__mocks__/styleMock.ts',
  },
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/.cache/'],
  globals: {
    __PATH_PREFIX__: true,
    __BROWSER__: true,
    graphql: true,
  },
}
