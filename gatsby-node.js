/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const createPages = require('./src/config/createPages')
const onCreateNode = require('./src/config/onCreateNode')
const onCreateWebpackConfig = require('./src/config/modifyWebpackConfig')

// import onCreateWebpackConfig from './src/config/modifyWebpackConfig'
// import onCreateNode from './src/config/onCreateNode'

// const modifyWebpackConfig = require('./src/config/modifyWebpackConfig')

// const onCreateNode = require('./src/config/onCreateNode')

// Create slugs for files.
// Slug will used for blog page path.
// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions
//   switch (node.internal.type) {
//     case `MarkdownRemark`:
//       const fileNode = getNode(node.parent)
//       const [basePath, name] = fileNode.relativePath.split('/')
//       const slug = `/${basePath}/${name}/`
//       if (slug) {
//         createNodeField({ node, name: `slug`, value: slug })
//       }
//       break
//   }
// }

module.exports = {
  createPages,
  onCreateWebpackConfig,
  onCreateNode,
}
// exports.createPages = createPages
// exports.onCreateWebpackConfig = onCreateWebpackConfig
// exports.onCreateNode = onCreateNode
// exports.onCreateWebpackConfig = modifyWebpackConfig
