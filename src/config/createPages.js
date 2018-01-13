const path = require('path')
const Promise = require('bluebird')
const log = require('../utils/log')
const _ = require('lodash')

const processGraphQL = ({ graphql, query, createPostsFn, resultPath }) => {
  graphql(query)
    .then(
      result =>
        _.isNil(result.errors)
          ? _.get(result, resultPath)
          : Promise.reject(result.errors)
    )
    .then(createPostsFn)
    .catch(log.error)
}

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

  const imagePostQuery = `
  {
    allDirectory(filter: { sourceInstanceName: { eq: "images" } }) {
      edges {
        node {
          id
          base
          sourceInstanceName
        }
      }
    }
  }`

  const { createPage } = boundActionCreators
  const blogPost = path.resolve('./src/templates/blog-post.js')
  const photographyPost = path.resolve('./src/templates/photography-post.js')

  const createPhotographyPosts = edges => {
    edges.forEach(edge => {
      const { base } = edge.node
      createPage({
        path: `/photography/${base}`,
        component: photographyPost,
        context: {
          base: `/${base}/`,
        },
      })
    })
  }

  processGraphQL({
    graphql,
    query: imagePostQuery,
    resultPath: 'data.allDirectory.edges',
    createPostsFn: createPhotographyPosts,
  })

  const createBlogPosts = edges => {
    edges.forEach(edge => {
      const { slug } = edge.node.fields
      createPage({
        path: slug,
        component: blogPost,
        context: {
          slug,
        },
      })
    })
  }

  processGraphQL({
    graphql,
    query: mdQuery,
    resultPath: 'data.allMarkdownRemark.edges',
    createPostsFn: createBlogPosts,
  })
}

module.exports = createPages
