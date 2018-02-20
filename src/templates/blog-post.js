import React, { Component } from 'react'
import Helmet from 'react-helmet'
import _ from 'lodash'

import { BlogHeader } from '../components/Blog'

import config from '../../gatsby-config'

import './blog-post.css'

class BlogPostTemplate extends Component {
  render() {
    const { props } = this
    const post = _.get(props, 'data.markdownRemark')
    if (!post) {
      return <div />
    }

    const pathname = _.get(props, 'location.pathname')
    const siteTitle = _.get(props, 'data.site.siteMetadata.title')
    const { excerpt } = post
    const { date, title } = post.frontmatter
    const pageURL = `${config.siteMetadata.siteUrl}${pathname}`

    const comboTitle = `${title || 'Posts'} | ${siteTitle}`

    return (
      <div
        className="black-80 lh-copy pa3 pv4 w-100"
        style={{ background: '#FBFAFC' }}
      >
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
        <div className="mw7-ns center">
          <BlogHeader date={date} slug={pathname} title={title} />
          <article
            className="center justify mw-100 f4 fw5"
            id="remark-post"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
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
