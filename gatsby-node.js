const createPages = require('./src/config/createPages')
const modifyWebpackConfig = require('./src/config/modifyWebpackConfig')
const onCreateNode = require('./src/config/onCreateNode')
// const onCreatePage = require('./src/config/onCreatePage')

exports.createPages = createPages
exports.modifyWebpackConfig = modifyWebpackConfig
exports.onCreateNode = onCreateNode
// exports.onCreatePage = onCreatePage
