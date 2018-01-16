import React, { Component, Fragment } from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { BlogHeader } from '../components/Blog'

class BlogIndex extends Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    if (!posts) {
      return <div />
    }

    return (
      <Fragment>
        <Helmet title={siteTitle} />
        {posts.map(({ node }, index) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <BlogHeader
                date={node.frontmatter.date}
                slug={node.fields.slug}
                title={title}
              />
              <p
                className="f4"
                dangerouslySetInnerHTML={{ __html: node.excerpt }}
              />
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
