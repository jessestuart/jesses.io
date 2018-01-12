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
          className="w-90 center pa4"
          style={{
            overflow: 'hidden',
            display: 'grid',
            gridGap: '0.5rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
            gridAutoRows: '30rem',
            gridAutoFlow: 'row dense',
          }}
        >
          {images.map(({ node }, index) => {
            console.log(node)
            const { sizes } = node
            return (
              <div
                key={sizes.originalName}
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  boxSizing: 'border-box',
                  gridColumnStart: 'auto',
                  gridRowStart: 'auto',
                  color: '#fff',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  boxShadow: '-2px 2px 10px 0px rgba(#444, 0.4)',
                  overflow: 'hidden',
                }}
              >
                <Img sizes={sizes} />
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
