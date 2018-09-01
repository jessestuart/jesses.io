import { createFilePath } from 'gatsby-source-filesystem'
import _ from 'lodash'

const onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField, createParentChildLink } = boundActionCreators
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

  if (type === 'S3ImageAsset') {
    const parent = getNode(node.parent)
    const imageSharp = getNode(parent.children[0])

    createParentChildLink({ parent: node, child: imageSharp })
  }
}

// export default onCreateNode
module.exports = onCreateNode
