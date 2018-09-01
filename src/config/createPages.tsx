import Promise from 'bluebird'
import _ from 'lodash'
import { DateTime } from 'luxon'
import path from 'path'
import log from '../utils/log'

export enum PageType {
  Blog = 'Blog',
  Photography = 'Photography',
}

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
        ETag
        EXIF {
          DateCreatedISO
        }
      }
    }
  }
}`

const createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const blogTemplate = path.resolve('./src/templates/blog-post.tsx')
  const photographyTemplate = path.resolve(
    './src/templates/photography-post.tsx'
  )
  const createPhotographyPosts = edges => {
    // First, create the photography "album" pages -- these are a collection
    // of photos grouped by date.
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

    // Next create an individual page for each photo.
    _.each(_.map(edges, 'node'), image => {
      const date = _.get(image, 'EXIF.DateCreatedISO')
      const ETag = _.get(image, 'ETag')

      createPage({
        path: `/photography/${date}/${ETag}`,
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
