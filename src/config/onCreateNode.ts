import { Node } from 'gatsby'
import { createFilePath } from 'gatsby-source-filesystem'
import _ from 'lodash'

export default ({
  node,
  actions,
  getNode,
}: {
  node: Node
  actions: { createNodeField: (args: object) => void }
  getNode: (id: string) => Node
}) => {
  const { createNodeField } = actions
  const nodeType = node.internal.type

  if (_.includes(['Directory', 'MarkdownRemark'], nodeType)) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value,
    })
  }
}
