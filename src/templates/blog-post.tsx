import BlogHeader from 'components/Blog/BlogHeader'
import { graphql } from 'gatsby'
import _ from 'lodash'
import { DateTime } from 'luxon'
import React from 'react'
import Helmet from 'react-helmet'
import GatsbyLocation from 'types/GatsbyLocation'

import './blog-post.css'

import colors from 'utils/colors'

interface Props {
  location: GatsbyLocation
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    markdownRemark: {
      id: any
      excerpt: string
      frontmatter: {
        title: string
        date: string
      }
      html: any
    }
  }
}

// eslint-disable-next-line
const BlogPostHelmet = ({ comboTitle, pageURL, excerpt, date }) => (
  <Helmet title={comboTitle}>
    <meta itemProp="name" content={comboTitle} />
    <meta name="twitter:title" content={comboTitle} />
    <meta name="twitter:description" content={excerpt} />
    <meta property="og:title" content={comboTitle} />
    <meta property="og:url" content={pageURL} />
    <meta
      property="article:published_time"
      content={DateTime.fromJSDate(date).toISODate()}
    />
  </Helmet>
)

const BlogPostTemplate = (props: Props) => {
  const { data, location } = props
  const post = _.get(data, 'markdownRemark')
  if (!post) {
    return null
  }

  const pathname = _.get(location, 'pathname')
  const siteTitle = _.get(data, 'site.siteMetadata.title')
  const { excerpt } = post
  const { date, title } = post.frontmatter
  const pageURL = `jesses.io/${pathname}`

  const comboTitle = `${title || 'Posts'} | ${siteTitle}`

  return (
    <div
      className="black-80 lh-copy pa4 w-100"
      style={{ background: colors.secondary.light0 }}
    >
      <BlogPostHelmet
        comboTitle={comboTitle}
        date={new Date(date)}
        pageURL={pageURL}
        excerpt={excerpt}
      />
      <div className="center mw7-ns">
        <BlogHeader date={date} link={pathname} location={location}>
          {title}
        </BlogHeader>
        <article
          className="center f4 fw5 justify mw-100"
          dangerouslySetInnerHTML={{ __html: post.html }}
          id="remark-post"
        />
      </div>
    </div>
  )
}

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

export default BlogPostTemplate
