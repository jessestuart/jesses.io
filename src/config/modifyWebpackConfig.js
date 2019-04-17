// const atImport = require('postcss-import')
// const cssnested = require('postcss-nested')
// const cssnext = require('postcss-cssnext')
const path = require('path')

module.exports = ({ actions, getConfig, stage }) => {
  const config = getConfig()
  switch (stage) {
    case 'build-javascript':
      actions.setWebpackConfig({
        // postcss: () => [atImport(), cssnested, cssnext()],
        resolve: {
          modules: [path.resolve('./src'), 'node_modules'],
        },
      })
  }

  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    }
  }
}
