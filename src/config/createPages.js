const Promise = require('bluebird')
const _ = require('lodash')
const path = require('path')

const log = require('../utils/log')

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
  const { createPage } = boundActionCreators

  const mdQuery = `
  {
    allMarkdownRemark(limit: 1000) {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }`

  // TODO: Update query to match specifically date strings. Or something.
  const imagePostQuery = `
  {
    allDirectory(filter: { dir: { regex: "/images$/" } }) {
      edges {
        node {
          id
          name
        }
      }
    }
  }`

  const blogPost = path.resolve('./src/templates/blog-post.js')
  const photographyPost = path.resolve('./src/templates/photography-post.js')

  const createPhotographyPosts = edges => {
    edges.forEach(edge => {
      const { name } = edge.node
      createPage({
        path: `/photography/${name}`,
        component: photographyPost,
        context: {
          name: `/${name}/`,
          datetime: name,
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
