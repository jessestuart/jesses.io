import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import _ from 'lodash'

import { BlogHeader } from '../components/Blog'

class BlogIndex extends Component {
  render() {
    const { props } = this
    const siteTitle = _.get(props, 'data.site.siteMetadata.title')
    const posts = _.get(props, 'data.allMarkdownRemark.edges')
    if (!posts) {
      return (
        <Fragment>
          <Helmet title={siteTitle} />
          <div className="spectral f3 fw5 flex justify-center items-center h-100">
            No posts currently available. Sit tight.
          </div>
        </Fragment>
      )
    }

    return (
      <Fragment>
        <Helmet title={siteTitle} />
        {posts.map(({ node }) => {
          const { excerpt, fields, frontmatter } = node
          const date = _.get(frontmatter, 'date')
          const slug = _.get(fields, 'slug')
          const title = _.get(frontmatter, 'title')
          return (
            <div key={slug}>
              <BlogHeader date={date} slug={slug} title={title || slug} />
              <p className="f4" dangerouslySetInnerHTML={{ __html: excerpt }} />
            </div>
          )
        })}
      </Fragment>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "D MMMM YYYY")
            title
          }
        }
      }
    }
  }
`
