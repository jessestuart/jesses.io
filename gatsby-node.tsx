const createPages = require('./src/config/createPages.tsx')
const modifyWebpackConfig = require('./src/config/modifyWebpackConfig.tsx')
const onCreateNode = require('./src/config/onCreateNode.tsx')

exports.createPages = createPages
exports.modifyWebpackConfig = modifyWebpackConfig
exports.onCreateNode = onCreateNode
