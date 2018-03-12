import React, { Component } from 'react'
import Helmet from 'react-helmet'
import _ from 'lodash'
import fp from 'lodash/fp'
import { DateTime } from 'luxon'

import { PhotographyGridSection } from '../components/Photography'

class PhotographyPostTemplate extends Component {
  render() {
    const { props } = this
    const images = _.flow(fp.get('data.allS3ImageAsset.edges'), fp.map('node'))(
      props
    )
    const pathname = _.get(props, 'location.pathname')
    const siteTitle = _.get(props, 'data.site.siteMetadata.title')
    const date = _.get(props, 'pathContext.name')
    const datetime = date ? DateTime.fromISO(date.replace(/\//g, '')) : null

    const title = `Photography | ${date} | ${siteTitle}`

    return (
      <div className="bg-near-white black-80 pa3-ns pv4 w-100">
        <Helmet title={title} />
        <PhotographyGridSection
          datetime={datetime}
          images={images}
          isPreview={false}
          key={pathname}
        />
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
    allS3ImageAsset(filter: { EXIF: { DateCreatedISO: { eq: $name } } }) {
      edges {
        node {
          id
          EXIF {
            DateCreatedISO
            DateTimeOriginal
          }
          childImageSharp {
            original {
              height
              width
            }
            thumbnailSizes: sizes(maxWidth: 512) {
              aspectRatio
              src
              srcSet
              sizes
            }
            largeSizes: sizes(maxWidth: 1024, quality: 75) {
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`
