/* @flow */
import React, { Component } from 'react'
import _ from 'lodash'

import StyledPanel from '../components/StyledPanel/StyledPanel'
import { BlogHeader } from '../components/Blog'

type MarkdownRemarkNode = {
  excerpt: string,
  fields: {
    slug: string,
  },
  frontmatter: {
    date: string,
    title: string,
  },
}

type Props = {
  location: {
    pathname: string,
  },
  data: {
    allMarkdownRemark: {
      edges: {
        node: Array<MarkdownRemarkNode>,
      },
    },
  },
}

class BlogIndex extends Component {
  render() {
    const { props }: Props = this
    const { location } = props
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
                <BlogHeader
                  link={slug}
                  location={location}
                  date={date}
                  title={title || slug}
                >
                  {title}
                </BlogHeader>
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
