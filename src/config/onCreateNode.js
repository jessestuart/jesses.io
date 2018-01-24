const { createFilePath } = require('gatsby-source-filesystem')
const _ = require('lodash')

const onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators
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

module.exports = onCreateNode
