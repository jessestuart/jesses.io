import React, { Component, Fragment } from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class BlogIndex extends Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Fragment>
        <Helmet title={siteTitle} />
        {posts.map(({ node }, index) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h2
                className="mb2 f3 fw7 underline header-purple"
                style={{
                  textDecorationColor: '#FC5270',
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h2>
              <p className="f5 mb1 tr i open-sans">{node.frontmatter.date}</p>
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
