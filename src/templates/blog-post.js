import './blog-post.css'

import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import React, { Component } from 'react'
import _ from 'lodash'

import { BlogHeader, Layout } from '../components'
import config from '../../gatsby-config'

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
      <Layout>
        <div
          className="black-80 lh-copy pa4 w-100"
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
          <div className="center mw7-ns">
            <BlogHeader date={date} slug={pathname}>
              {title}
            </BlogHeader>
            <article
              className="center f4 fw5 justify mw-100"
              id="remark-post"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
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
