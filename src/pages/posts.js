import React, { Component } from 'react'
import _ from 'lodash'

import StyledPanel from '../components/StyledPanel/StyledPanel'
import { BlogHeader } from '../components/Blog'

class BlogIndex extends Component {
  render() {
    const { props } = this
    const posts = _.get(props, 'data.allMarkdownRemark.edges')

    return (
      <div className="bg-near-white flex-body-expand lh-copy pa3-ns pv4">
        {posts.map(({ node }) => {
          const { excerpt, fields, frontmatter } = node
          const date = _.get(frontmatter, 'date')
          const slug = _.get(fields, 'slug')
          const title = _.get(frontmatter, 'title')
          return (
            <StyledPanel key={slug}>
              <article>
                <BlogHeader date={date} slug={slug} title={title || slug} />
                <p
                  className="f4"
                  dangerouslySetInnerHTML={{ __html: excerpt }}
                />
              </article>
            </StyledPanel>
          )
        })}
      </div>
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
