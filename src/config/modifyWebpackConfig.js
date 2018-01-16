const path = require('path')
const webpackLodashPlugin = require('lodash-webpack-plugin')

const atImport = require('postcss-import')
const cssnested = require('postcss-nested')
const cssnext = require('postcss-cssnext')

const modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-javascript') {
    config.plugin('Lodash', webpackLodashPlugin, null)
  }
  config.merge({
    devtool: 'eval',
    postcss: [atImport(), cssnested, cssnext()],
    resolve: {
      root: [path.resolve('./src'), path.resolve('./')],
    },
  })
  return config
}

module.exports = modifyWebpackConfig
