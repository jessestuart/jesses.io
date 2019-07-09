const path = require('path')

const { DateTime } = require('luxon')
const Promise = require('bluebird')
const _ = require('lodash')
const fp = require('lodash/fp')
const winston = require('winston')

// ===============
// Set up logging.
// ===============
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
  log.add(new winston.transports.Console({ format: winston.format.simple() }))
}

const PageType = {
  Photography: 'Photography',
  Blog: 'Blog',
}

const BlogTemplate = path.resolve('./src/templates/blog-post.tsx')
const PhotographyTemplate = path.resolve('./src/templates/photography-post.tsx')

const createBlogPosts = ({ createPage }) =>
  fp.map(edge => {
    const slug = _.get(edge, 'node.fields.slug')
    return createPage({
      path: slug,
      component: BlogTemplate,
      context: {
        slug,
        type: PageType.Blog,
      },
    })
  })

const processGraphQL = ({ graphql, query, createPostsFn, resultPath }) => {
  return graphql(query)
    .then(result =>
      _.isEmpty(result.errors)
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

const createPhotographyPagePromises = ({ imagesGroupedByDate, createPage }) =>
  _.flatMap(imagesGroupedByDate, (_images, date) =>
    createPage({
      path: `/photography/${date}`,
      component: PhotographyTemplate,
      context: {
        name: date,
        datetime: DateTime.fromISO(date),
        type: PageType.Photography,
      },
    }),
  )

// Next create an individual page for each photo.
const createPhotographyPostPromises = ({ edges, createPage }) =>
  _.flatMap(edges, 'node', image => {
    const date = _.get(image, 'EXIF.DateCreatedISO')
    const ETag = _.get(image, 'ETag')
    return createPage({
      path: `/photography/${date}/${ETag}`,
      component: PhotographyTemplate,
      context: {
        name: date,
        datetime: DateTime.fromISO(date),
        type: PageType.Photography,
      },
    })
  })

const createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const createPhotographyPosts = edges => {
    // First, create the photography "album" pages -- these are a collection
    // of photos grouped by date.
    const imagesGroupedByDate = _.groupBy(edges, 'node.EXIF.DateCreatedISO')
    return Promise.all([
      createPhotographyPagePromises({ imagesGroupedByDate, createPage }),
      createPhotographyPostPromises({ edges, createPage }),
    ])
  }

  const photographyPostsProcessor = processGraphQL({
    graphql,
    query: imagePostQuery,
    resultPath: 'data.allS3ImageAsset.edges',
    createPostsFn: createPhotographyPosts,
  })

  const blogPostsProcessor = processGraphQL({
    graphql,
    query: mdQuery,
    resultPath: 'data.allMarkdownRemark.edges',
    createPostsFn: createBlogPosts({ createPage }),
  })

  return Promise.all([blogPostsProcessor, photographyPostsProcessor])
}

module.exports = createPages
