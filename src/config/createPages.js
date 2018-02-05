const _ = require('lodash')
const path = require('path')
const Promise = require('bluebird')

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

// const allImagesQuery = `
// {
//   allImageSharp
// }
// `

const createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const blogTemplate = path.resolve('./src/templates/blog-post.js')
  const photographyTemplate = path.resolve(
    './src/templates/photography-post.js'
  )

  const createPhotographyPosts = edges => {
    edges.forEach(edge => {
      const { name } = edge.node
      createPage({
        path: `/photography/${name}`,
        component: photographyTemplate,
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
        component: blogTemplate,
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
