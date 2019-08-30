import { graphql, useStaticQuery } from 'gatsby'
import _ from 'lodash'
import React from 'react'

import BlogHeader from 'components/Blog/BlogHeader'
import StyledPanel from 'components/StyledPanel/StyledPanel'

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
}

const BlogIndex = () => {
  const data: Props = useStaticQuery(graphql`
    {
      allMarkdownRemark {
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
  `)

  const posts = _.get(data, 'allMarkdownRemark.edges')

  return (
    <div className="bg-near-white lh-copy pa3-ns pv4 w-100">
      {posts.map(({ node }: { node: MarkdownRemarkNode }) => {
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
              <p className="f4" dangerouslySetInnerHTML={{ __html: excerpt }} />
            </article>
          </StyledPanel>
        )
      })}
    </div>
  )
}

export default BlogIndex
