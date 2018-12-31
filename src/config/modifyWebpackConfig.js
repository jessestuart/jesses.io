const atImport = require('postcss-import')
const cssnested = require('postcss-nested')
const cssnext = require('postcss-cssnext')
const path = require('path')

const modifyWebpackConfig = ({ config }, stage) => {
  config.merge({
    postcss: () => [atImport(), cssnested, cssnext()],
    resolve: {
      root: [path.resolve('./src')],
    },
  })
  return config
}

module.exports = modifyWebpackConfig
