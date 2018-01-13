import React, { Component } from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

class PhotographyIndex extends Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const images = get(this, 'props.data.allImageSharp.edges')

    return (
      <div className="bg-near-white">
        <Helmet title={siteTitle} />
        <div
          className="w-75 center pa4"
          style={{
            display: 'grid',
            gridGap: '5px',
            gridTemplateColumns: 'repeat(auto-fill, minmax(25vw, 1fr))',
            gridAutoRows: 'minmax(200px, auto)',
            gridAutoFlow: 'row dense',
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
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gridColumnStart: 'auto',
                  gridRow: node.sizes.aspectRatio > 1 ? 'span 1' : 'span 2',
                  overflow: 'hidden',
                }}
              >
                <Img
                  sizes={sizes}
                  style={{
                    boxShadow: '0 0.5px 0 0 #ffffff inset, 0 1px 2px 0 #B3B3B3',
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
