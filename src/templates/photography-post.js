import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import _ from 'lodash'

// import config from '../../gatsby-config'

// import { rhythm, scale } from '../utils/typography'

class PhotographyPostTemplate extends Component {
  render() {
    console.log(this.props)
    const { props } = this
    const images = _.get(props, 'data.allImageSharp.edges')
    // const pathname = _.get(props, 'location.pathname')
    const siteTitle = _.get(props, 'data.site.siteMetadata.title')
    // const { excerpt } = post
    // const { date, title, tags } = post.frontmatter
    // const pageURL = `${config.siteMetadata.siteUrl}${pathname}`

    // const comboTitle = `${title} | ${siteTitle}`

    console.log(images)

    return (
      <div className="bg-near-white flex-body-expand">
        <Helmet title={siteTitle} />
        <div
          className="w-75 center pa4"
          style={{
            display: 'grid',
            gridGap: '10px',
            gridTemplateColumns: 'repeat(auto-fill, minmax(20em, 1fr))',
            gridAutoRows: 'minmax(200px, auto)',
          }}
        >
          {images.map(({ node }, index) => {
            console.log(node)
            console.log(node.sizes.aspectRatio)
            const { sizes } = node
            return (
              <div
                key={sizes.originalName}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gridColumnStart: 'auto',
                  gridRow: node.sizes.aspectRatio > 1 ? 'span 1' : 'span 2',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <Img
                  sizes={sizes}
                  style={{
                    boxShadow: '0 10px 6px -6px #777',
                  }}
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default PhotographyPostTemplate

export const pageQuery = graphql`
  query PhotographyImagesBySlug($name: String) {
    site {
      siteMetadata {
        title
      }
    }
    allImageSharp(filter: { id: { regex: $name } }) {
      edges {
        node {
          id
          sizes(maxWidth: 768) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  }
`
