const path = require('path')

const { DateTime } = require('luxon')
const Promise = require('bluebird')
const _ = require('lodash')
const winston = require('winston')

const log = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    // ==================================================================
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    // =================================================================
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
})


// =====================================================================
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
// =====================================================================
if (process.env.NODE_ENV !== 'production') {
  log.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  )
}

// const { PageType } = require('../utils/enums/page-type')
const PageType = {
  Photography: 'Photography',
  Blog: 'Blog',
}
// import path from 'path'

// import Promise from 'bluebird'
// import _ from 'lodash'
// import { DateTime } from 'luxon'

// import log from '../utils/log'

// export enum PageType {
//   Blog = 'Blog',
//   Photography = 'Photography',
// }

const processGraphQL = ({ graphql, query, createPostsFn, resultPath }) => {
  return graphql(query)
    .then(result =>
      _.isNil(result.errors)
        ? _.get(result, resultPath)
        : Promise.reject(result.errors),
    )
    .then(createPostsFn)
    .catch(err => {
    })
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

  const createBlogPosts = edges => {
    if (edges) {
      edges.map(edge => {
        const slug = _.get(edge, 'node.fields.slug')
        return createPage({
          path: slug,
          component: blogTemplate,
          context: {
            slug,
            type: PageType.Blog,
          },
        })
      })
    }
  }

  const blogPostsProcessor = processGraphQL({
    graphql,
    query: mdQuery,
    resultPath: 'data.allMarkdownRemark.edges',
    createPostsFn: createBlogPosts,
  })

  return Promise.all([blogPostsProcessor, photographyPostsProcessor])
}

module.exports = createPages
