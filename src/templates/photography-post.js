/* @flow */
import { DateTime } from 'luxon'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import React, { Component } from 'react'
import _ from 'lodash'
import fp from 'lodash/fp'

import { Layout } from '../components'
import PhotographyGridSection from '../components/Photography/PhotographyGridSection'

type Props = {
  data: {
    allS3ImageAsset: {
      edges: {
        node: *,
      },
    },
    site: {
      siteMetadata: {
        title: string,
      },
    },
  },
  location: {
    pathname: string,
  },
  pageContext: {
    name: string,
  },
}

export class PhotographyPostTemplate extends Component<Props> {
  render() {
    const { props } = this
    const { location } = props
    const images = _.flow(
      fp.get('data.allS3ImageAsset.edges'),
      fp.map('node')
    )(props)
    const pathname = _.get(props, 'location.pathname')
    const siteTitle = _.get(props, 'data.site.siteMetadata.title')
    const date = _.get(props, 'pageContext.name')
    if (!date) {
      return null
    }

    const datetime = DateTime.fromISO(date.replace(/\//g, ''))

    const title = `Photography | ${date} | ${siteTitle}`

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
          }
          childrenFile {
            childImageSharp {
              original {
                height
                width
              }
              thumbnailSizes: fluid(maxWidth: 512) {
                aspectRatio
                src
                srcSet
                sizes
              }
              largeSizes: fluid(maxWidth: 2048, quality: 100) {
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
  }
`

export default PhotographyPostTemplate
