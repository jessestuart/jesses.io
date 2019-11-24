import { createFilePath } from 'gatsby-source-filesystem'
import _ from 'lodash'

export const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  const type: string = _.get(node, 'internal.type')

  console.log({ type })

  if (type === 'Directory' || type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value,
    })
  }
}
