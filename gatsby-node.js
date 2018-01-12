const _ = require('lodash')
const path = require('path')
const Promise = require('bluebird')
const { createFilePath } = require('gatsby-source-filesystem')

const atImport = require('postcss-import')
const cssnested = require('postcss-nested')
const cssnext = require('postcss-cssnext')

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = ({ page, boundActionCreators }) =>
  new Promise((resolve, reject) => {
    if (page.path.match(/^\/blog/)) {
      page.layout = 'blog-layout'

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
  const imageQuery = `
  {

  }
  `

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
    .catch(console.error)
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value,
    })
  }
}

exports.modifyWebpackConfig = function({ config }, stage) {
  config.merge({
    devtool: 'eval',
    postcss: [atImport(), cssnested, cssnext()],
    resolve: {
      root: [path.resolve('./src'), path.resolve('./')],
    },
  })
  return config
}
