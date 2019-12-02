// module.exports = {
//   declaractionKeyword: 'import',
//   environments: ['browser', 'jasmine', 'jest', 'node'],
// }

const testFilePattern = /lib\/__tests__/

module.exports = {
  environments: ({ pathToCurrentFile }) => {
    if (testFilePattern.test(pathToCurrentFile)) {
      return ['jest', 'node']
    }
    return ['browser', 'node']
  },
  declarationKeyword: 'import',
  logLevel: 'debug',
  excludes: ['./public/**', './.cache/**'],
  importDevDependencies: ({ pathToCurrentFile }) =>
    testFilePattern.test(pathToCurrentFile),
}
