const { createFilePath } = require('gatsby-source-filesystem')
const _ = require('lodash')

module.exports = ({ node, actions, getNode }) => {
  const { createNodeField, createParentChildLink } = actions
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

  // if (type === 'S3ImageAsset') {
  //   const value = createFilePath({ node, getNode })
  //   createNodeField({
  //     name: 'slug',
  //     node,
  //     value,
  //   })
  // }
  // if (type === 'S3ImageAsset') {
  //   // const children = _.map(node.children, child => getNode(child))
  //   // const children = getNode(node.children)
  //   const parent = getNode(node.parent)
  //   const imageSharp = getNode(parent.children[0])
  //   createParentChildLink({ parent: node, child: imageSharp })
  // }
}
