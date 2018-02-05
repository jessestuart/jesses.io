import React, { PureComponent } from 'react'
import _ from 'lodash'

import { BlogHeader, BlogNoPosts } from '../components/Blog'

class BlogIndex extends PureComponent {
  render() {
    const { props } = this
    const siteTitle = _.get(props, 'data.site.siteMetadata.title')
    const posts = _.get(props, 'data.allMarkdownRemark.edges')

    if (!posts) {
      return <BlogNoPosts siteTitle={siteTitle} />
    }

    return (
      <div className="bg-near-white flex-body-expand pv5 lh-copy">
        {posts.map(({ node }) => {
          const { excerpt, fields, frontmatter } = node
          const date = _.get(frontmatter, 'date')
          const slug = _.get(fields, 'slug')
          const title = _.get(frontmatter, 'title')
          return (
            <section key={slug} className="mw7 center flex-body-expand">
              <BlogHeader date={date} slug={slug} title={title || slug} />
              <p className="f4" dangerouslySetInnerHTML={{ __html: excerpt }} />
            </section>
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
