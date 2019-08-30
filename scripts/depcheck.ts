import depcheck from 'depcheck'

const options = {
  detectors: [
    // the target detectors
    depcheck.detector.requireCallExpression,
    depcheck.detector.importDeclaration,
  ],
  ignoreBinPackage: false, // ignore the packages with bin entry
  ignoreDirs: [
    // folder with these names will be ignored
    'public',
    '.cache',
    'static',
  ],
  // ignore dependencies that matches these globs
  ignoreMatches: [],
  parsers: {
    // the target parsers
    '*.ts': depcheck.parser.typescript,
    '*.tsx': depcheck.parser.typescript,
  },
  skipMissing: false, // skip calculation of missing dependencies
  specials: [
    // the target special parsers
    depcheck.special.eslint,
    depcheck.special.babel,
    depcheck.special.tslint,
  ],
  withoutDev: false, // [DEPRECATED] check against devDependencies
}

depcheck('/path/to/your/project', options, unused => {
  console.log(unused.dependencies) // an array containing the unused dependencies
  console.log(unused.devDependencies) // an array containing the unused devDependencies
  console.log(unused.missing) // a lookup containing the dependencies missing in `package.json` and where they are used
  console.log(unused.using) // a lookup indicating each dependency is used by which files
  console.log(unused.invalidFiles) // files that cannot access or parse
  console.log(unused.invalidDirs) // directories that cannot access
})
