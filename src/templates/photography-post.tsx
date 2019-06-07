import { graphql } from 'gatsby'
import _ from 'lodash'
import fp from 'lodash/fp'
import { DateTime } from 'luxon'
import React, { Component } from 'react'
import Helmet from 'react-helmet'

import Layout from 'components/Layout'
import PhotographyGridSection from 'components/Photography/PhotographyGridSection'
import GatsbyLocation from 'types/GatsbyLocation'

interface Props {
  data: {
    allS3ImageAsset: {
      edges: {
        node: any
      }
    }
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
  location: GatsbyLocation
  pageContext: {
    name: string
  }
}

export class PhotographyPostTemplate extends Component<Props> {
  public render() {
    const { props } = this
    const { location } = props
    const images = _.flow(
      fp.get('data.allS3ImageAsset.edges'),
      fp.map('node'),
    )(props)
    const pathname = _.get(props, 'location.pathname')
    const siteTitle = _.get(props, 'data.site.siteMetadata.title')
    const date = _.get(props, 'pageContext.name')
    if (!date) {
      return null
    }

    const datetime = DateTime.fromISO(date.replace(/\//g, ''))

    const title = `${siteTitle} | Photography | ${date}`

    return (
      <Layout location={location}>
        <div
          className="bg-near-white black-80 pv4 pa3-ns"
          style={{ flex: '1 0' }}
        >
          <Helmet title={title} />
          <PhotographyGridSection
            datetime={datetime}
            images={images}
            isPreview={false}
            key={pathname}
            slug={pathname}
          />
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query($name: String) {
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
            FNumber
            FocalLength
            ISO
            LensModel
            Model
            ShutterSpeedFraction
          }
          childImageSharp {
            original {
              height
              width
            }
            thumbnailSizes: fluid(maxWidth: 512) {
              ...GatsbyImageSharpFluid
            }
            largeSizes: fluid(maxWidth: 2048) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default PhotographyPostTemplate
