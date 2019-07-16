/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
require('source-map-support').install()
require('ts-node').register()

const createPages = require('./src/config/createPages')
const onCreateNode = require('./src/config/onCreateNode').default

module.exports = {
  createPages,
  onCreateNode,
}
