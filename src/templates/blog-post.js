import React, { Component } from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import { BlogHeader } from '../components/Blog'

import config from '../../gatsby-config'

class BlogPostTemplate extends Component {
  render() {
    const post = get(this, 'props.data.markdownRemark')
    if (!post) {
      return <div />
    }
    const pathname = get(this, 'props.location.pathname')
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const { excerpt } = post
    const { date, title } = post.frontmatter
    const pageURL = `${config.siteMetadata.siteUrl}${pathname}`

    const comboTitle = `${title} | ${siteTitle}`

    return (
      <div className="bg-near-white black-80 lh-copy flex-body-expand">
        <article className="w-50-ns w-75 center">
          <Helmet title={comboTitle}>
            <meta itemProp="name" content={comboTitle} />
            <meta name="twitter:title" content={comboTitle} />
            <meta name="twitter:description" content={excerpt} />
            <meta property="og:title" content={comboTitle} />
            <meta property="og:url" content={pageURL} />
            <meta
              property="article:published_time"
              content={new Date(date).toISOString()}
            />
          </Helmet>

          <BlogHeader date={date} slug={pathname} title={title} />

          <div
            className="f4 fw5"
            id="remark-post"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt
      frontmatter {
        title
        date(formatString: "D MMMM YYYY")
      }
    }
  }
`
