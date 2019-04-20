const path = require('path')

const { DateTime } = require('luxon')

const Promise = require('bluebird')
const _ = require('lodash')

const { PageType } = require('../utils/enums/page-type')
const log = require('../utils/log')

const processGraphQL = ({ graphql, query, createPostsFn, resultPath }) => {
  console.log('processGraphQL')
  console.log(graphql)
  return graphql(query)
    .then(result =>
      _.isNil(result.errors)
        ? _.get(result, resultPath)
        : Promise.reject(result.errors),
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
        ETag
        EXIF {
          DateCreatedISO
        }
      }
    }
  }
}`

const createPages = ({ graphql, actions }) => {
  console.log('create pages')
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog-post.tsx')

  const photographyTemplate = path.resolve(
    './src/templates/photography-post.tsx',
  )

  const createPhotographyPosts = edges => {
    let photographyPages = []
    // First, create the photography "album" pages -- these are a collection
    // of photos grouped by date.
    const imagesGroupedByDate = _.groupBy(edges, 'node.EXIF.DateCreatedISO')
    photographyPages = _.concat(
      photographyPages,
      _.map(imagesGroupedByDate, async (_images, date) => {
        await createPage({
          path: `/photography/${date}`,
          component: photographyTemplate,
          context: {
            name: date,
            datetime: DateTime.fromISO(date),
            type: PageType.Photography,
          },
        })
      }),
    )

    // Next create an individual page for each photo.
    photographyPages = _.concat(
      _.map(_.map(edges, 'node'), async image => {
        const date = _.get(image, 'EXIF.DateCreatedISO')
        const ETag = _.get(image, 'ETag')
        await createPage({
          path: `/photography/${date}/${ETag}`,
          component: photographyTemplate,
          context: {
            name: date,
            datetime: DateTime.fromISO(date),
            type: PageType.Photography,
          },
        })
      }),
    )

    return photographyPages
  }

  const photographyPostsProcessor = processGraphQL({
    graphql,
    query: imagePostQuery,
    resultPath: 'data.allS3ImageAsset.edges',
    createPostsFn: createPhotographyPosts,
  })

  const createBlogPosts = edges =>
    edges.map(async edge => {
      const slug = _.get(edge, 'node.fields')
      return createPage({
        path: slug,
        component: blogTemplate,
        context: {
          slug,
          type: PageType.Blog,
        },
      })
    })

  const blogPostsProcessor = processGraphQL({
    graphql,
    query: mdQuery,
    resultPath: 'data.allMarkdownRemark.edges',
    createPostsFn: createBlogPosts,
  })

  return Promise.all(blogPostsProcessor, photographyPostsProcessor)
}

module.exports = createPages
