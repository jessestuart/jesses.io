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
            gridGap: '0.5rem',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridAutoRows: '20rem',
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
                  gridColumnStart: 'auto',
                  gridRowStart: 'auto',
                  overflow: 'hidden',
                }}
              >
                <Img
                  sizes={sizes}
                  style={{ boxShadow: '-2px 2px 10px 0px #CCC' }}
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
