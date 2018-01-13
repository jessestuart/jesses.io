import React, { Component } from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import _ from 'lodash'

class PhotographyIndex extends Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const images = get(this, 'props.data.allImageSharp.edges')
    if (_.isNil(images)) {
      return <div />
    }

    return (
      <div className="bg-near-white">
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

export default PhotographyIndex

export const pageQuery = graphql`
  query PhotographyQuery {
    site {
      siteMetadata {
        title
      }
    }
    allImageSharp {
      edges {
        node {
          sizes(maxWidth: 768) {
            ...GatsbyImageSharpSizes
            originalImg
            originalName
          }
        }
      }
    }
  }
`
