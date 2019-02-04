const { createFilePath } = require('gatsby-source-filesystem')
const _ = require('lodash')

const onCreateNode = ({ node, actions, getNode }) => {
  try {
    console.log('on create node', { type: node.internal.type })
    const { createNodeField, createParentChildLink } = actions
    const type = _.get(node, 'internal.type')
    console.log({ node })

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

    if (type === 'S3ImageAsset') {
      const value = createFilePath({ node, getNode })
      console.log({ value })
      const parent = getNode(node.parent)
      const imageSharp = getNode(parent.children[0])
      createParentChildLink({ parent: node, child: imageSharp })
    }
  } catch (err) {
    console.trace({ err })
  }
}

module.exports = onCreateNode
