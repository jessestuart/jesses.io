const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreatePage = ({ page, boundActionCreators }) =>
  new Promise((resolve, reject) => {
    if (page.path === '/') {
      page.layout = 'home'
      // Update the page.
      boundActionCreators.createPage(page)
    }

    resolve()
  })

exports.createPages = ({ graphql, boundActionCreators }) => {
  const mdQuery = `
  {
    allMarkdownRemark(limit: 1000) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            tags
          }
        }
      }
    }
  }`
  const { createPage } = boundActionCreators
  const blogPost = path.resolve('./src/templates/blog-post.js')
  const tagPage = path.resolve('./src/templates/tag-page.js')
  let tags = []

  const createPosts = edges => {
    edges.forEach(edge => {
      createPage({
        path: edge.node.fields.slug,
        component: blogPost,
        context: {
          slug: edge.node.fields.slug,
        },
      })

      tags = _.union(tags, edge.node.frontmatter.tags)
    })
  }

  const createTagPages = () => {
    tags.sort().forEach(tag => {
      createPage({
        path: `tags/${tag}`,
        component: tagPage,
        context: {
          tag,
        },
      })
    })
  }

  return graphql(mdQuery)
    .then(result => {
      const { errors } = result
      if (errors) {
        Promise.reject(errors)
      }

      return result.data.allMarkdownRemark.edges
    })
    .then(createPosts)
    .then(createTagPages)
    .catch(console.error)
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.modifyWebpackConfig = function({ config }, stage) {
  config._config.devtool = 'eval'
  return config
}
