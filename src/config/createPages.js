const _ = require('lodash')
const path = require('path')
const Promise = require('bluebird')
const DateTime = require('luxon').DateTime

const PageType = require('../utils/enums/page-type')
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
  allS3ImageAsset {
    edges {
      node {
        EXIF {
          DateCreatedISO
        }
      }
    }
  }
}`

const createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const blogTemplate = path.resolve('./src/templates/blog-post.js')
  const photographyTemplate = path.resolve(
    './src/templates/photography-post.js'
  )

  const createPhotographyPosts = edges => {
    const imagesGroupedByDate = _.groupBy(edges, 'node.EXIF.DateCreatedISO')
    _.each(imagesGroupedByDate, (images, date) => {
      createPage({
        path: `/photography/${date}`,
        component: photographyTemplate,
        context: {
          name: date,
          datetime: DateTime.fromISO(date),
          type: PageType.Photography,
        },
      })
    })
  }

  processGraphQL({
    graphql,
    query: imagePostQuery,
    resultPath: 'data.allS3ImageAsset.edges',
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
          type: PageType.Blog,
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
