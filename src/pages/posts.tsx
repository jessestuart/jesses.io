import { graphql } from 'gatsby'
import _ from 'lodash'
import React, { Component } from 'react'

import BlogHeader from 'components/Blog/BlogHeader'
import Layout from 'components/Layout'
import StyledPanel from 'components/StyledPanel/StyledPanel'
import GatsbyLocation from 'types/GatsbyLocation'

interface MarkdownRemarkNode {
  excerpt: string
  fields: {
    slug: string
  }
  frontmatter: {
    date: string
  }
}

interface Props {
  data: {
    allMarkdownRemark: {
      edges: {
        node: MarkdownRemarkNode[]
      }
    }
  }
  location: GatsbyLocation
}

class BlogIndex extends Component<Props> {
  public render() {
    const { props } = this
    const { location } = props
    const posts = _.get(props, 'data.allMarkdownRemark.edges')

    return (
      <Layout location={location}>
        <div className="bg-near-white lh-copy pa3-ns pv4 w-100">
          {posts.map(({ node }) => {
            const { excerpt, frontmatter, fields } = node
            const { slug } = fields
            const date = _.get(frontmatter, 'date')
            const title = _.get(frontmatter, 'title')
            return (
              <StyledPanel key={title}>
                <article>
                  <BlogHeader link={slug} location={location} date={date}>
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
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          frontmatter {
            date(formatString: "D MMMM YYYY")
            title
          }
        }
      }
    }
  }
`

export default BlogIndex
