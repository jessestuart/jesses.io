require('source-map-support').install()
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
  },
})

const createPages = require('./src/config/createPages')
const modifyWebpackConfig = require('./src/config/modifyWebpackConfig')
const onCreateNode = require('./src/config/onCreateNode')

exports.createPages = createPages
exports.modifyWebpackConfig = modifyWebpackConfig
exports.onCreateNode = onCreateNode
