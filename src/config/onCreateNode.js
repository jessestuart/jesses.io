const { createFilePath } = require('gatsby-source-filesystem')
const _ = require('lodash')

module.exports = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  const type = _.get(node, 'internal.type')

  if (type === 'Directory') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value,
    })
  }

  if (type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value,
    })
  }
}
