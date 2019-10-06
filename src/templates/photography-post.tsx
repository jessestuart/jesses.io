import { graphql } from 'gatsby'
import _ from 'lodash'
import fp from 'lodash/fp'
import { DateTime } from 'luxon'
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Box } from 'rebass'

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
      <Box flex="1 0" className="bg-near-white black-80 pv4 pa3-ns">
        <Helmet title={title} />
        <PhotographyGridSection
          datetime={datetime}
          images={images}
          key={pathname}
          slug={pathname}
        />
      </Box>
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
          ...S3ImageAssetData
        }
      }
    }
  }
`

export default PhotographyPostTemplate
