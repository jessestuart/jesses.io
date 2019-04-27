/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const createPages = require('./src/config/createPages')
const onCreateNode = require('./src/config/onCreateNode')
const onCreateWebpackConfig = require('./src/config/modifyWebpackConfig')

module.exports = {
  createPages,
  onCreateWebpackConfig,
  onCreateNode,
}
