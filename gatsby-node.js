/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const createPages = require('./src/config/createPages')
const modifyWebpackConfig = require('./src/config/modifyWebpackConfig')
const onCreateNode = require('./src/config/onCreateNode')

exports.createPages = createPages
exports.onCreateWebpackConfig = modifyWebpackConfig
exports.onCreateNode = onCreateNode
