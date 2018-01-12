const path = require('path')
const Promise = require('bluebird')
const log = require('../utils/log')

const createPages = ({ graphql, boundActionCreators }) => {
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

  const createPosts = edges => {
    edges.forEach(edge => {
      createPage({
        path: edge.node.fields.slug,
        component: blogPost,
        context: {
          slug: edge.node.fields.slug,
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
    .catch(log.error)
}

module.exports = createPages
