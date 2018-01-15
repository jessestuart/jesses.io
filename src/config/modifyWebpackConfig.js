const path = require('path')

const atImport = require('postcss-import')
const cssnested = require('postcss-nested')
const cssnext = require('postcss-cssnext')

const modifyWebpackConfig = ({ config }, stage) =>
  config.merge({
    devtool: 'eval',
    postcss: [atImport(), cssnested, cssnext()],
    resolve: {
      root: [path.resolve('./src'), path.resolve('./')],
    },
  })

module.exports = modifyWebpackConfig
