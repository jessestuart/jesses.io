import { createFilePath } from 'gatsby-source-filesystem'

import _ from 'lodash'

export default ({ node, actions, getNode }) => {
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
