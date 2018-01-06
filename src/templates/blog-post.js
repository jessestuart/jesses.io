import React, { Component } from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { Share } from 'react-twitter-widgets'

import config from '../../gatsby-config'

import { Bio } from '../components'
import { rhythm, scale } from '../utils/typography'

import './blog-post.scss'

// const renderTag = (tag, index) => (
//   <div className="tag" key={tag}>
//     <Tag name={tag} key={index} />
//   </div>
// )

class BlogPostTemplate extends Component {
  render() {
    // console.log(this.props)

    const post = get(this, 'props.data.markdownRemark')
    const pathname = get(this, 'props.location.pathname')
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const { excerpt } = post
    const { date, title, tags, twitterprompt } = post.frontmatter
    const pageURL = `${config.siteMetadata.siteUrl}${pathname}`

    const sectionStyle = {
      ...scale(-0.2),
      display: 'block',
      marginBottom: rhythm(0.8), // subtract a little to account for .tag margin-bottom
      marginTop: rhythm(-0.5),
    }

    const comboTitle = `${title} | ${siteTitle}`

    return (
      <div className="bg-near-white black-80">
        <article className="w-50 center">
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
            {tags.map(tag => (
              <meta content={tag} key={tag} property="article:tag" />
            ))}
          </Helmet>

          <h1 className="pv4">{title}</h1>
          <section style={sectionStyle}>
            <div className="meta-info">
              <div className="date">{date}</div>
              {/* <div className="tags">
              <div className="flex-row">{tags.map(renderTag)}</div>
            </div> */}
            </div>
          </section>

          <div
            className="f4 fw5 lh-title"
            id="remark-post"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <section className="share-section">
            <div className="social">
              <Share
                url={pageURL}
                options={{
                  size: 'small',
                  text: twitterprompt || `Check out '${title}'`,
                  via: 'cwpittman',
                }}
              />
            </div>
            <p className="prompt">Let's keep the conversation going!</p>
          </section>
          <hr style={{ marginBottom: rhythm(1) }} />
          <Bio />
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
        tags
        title
        date(formatString: "DD MMMM YYYY")
        twitterprompt
      }
    }
  }
`
