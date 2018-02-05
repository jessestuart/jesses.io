const _ = require('lodash')
const path = require('path')
const Promise = require('bluebird')
const DateTime = require('luxon').DateTime

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
        id
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
          name: `/${date}/`,
          datetime: DateTime.fromISO(date),
        },
      })
    })
    // imagesGroupedByDate.forEach((images, date) => {
    //   console.log('date and images:')
    //   console.log({ date, images })
    // createPage({
    //   path: `/photography/${name}`,
    //   component: photographyTemplate,
    //   context: {
    //     name: `/${name}/`,
    //     datetime: name,
    //   },
    // })
    // })
    // edges.forEach(edge => {
    //   const { name } = edge.node
    //   createPage({
    //     path: `/photography/${name}`,
    //     component: photographyTemplate,
    //     context: {
    //       name: `/${name}/`,
    //       datetime: name,
    //     },
    //   })
    // })
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
        },
      })
    })
  }

  // processGraphQL({
  //   graphql,
  //   query: imagePostQuery,
  //   resultPath: 'data.allDirectory.edges',
  //   createPostsFn: createPhotographyPosts,
  // })
  // const createBlogPosts = edges => {
  //   edges.forEach(edge => {
  //     const { slug } = edge.node.fields
  //     createPage({
  //       path: slug,
  //       component: blogTemplate,
  //       context: {
  //         slug,
  //       },
  //     })
  //   })
  // }

  processGraphQL({
    graphql,
    query: mdQuery,
    resultPath: 'data.allMarkdownRemark.edges',
    createPostsFn: createBlogPosts,
  })
}

module.exports = createPages
