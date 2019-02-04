// const atImport = require('postcss-import')
// const cssnested = require('postcss-nested')
// const cssnext = require('postcss-cssnext')
const path = require('path')

module.exports = ({ stage, actions }) => {
  switch (stage) {
    case 'build-javascript':
      actions.setWebpackConfig({
        // postcss: () => [atImport(), cssnested, cssnext()],
        resolve: {
          modules: [path.resolve('./src'), 'node_modules'],
        },
      })
  }
}
