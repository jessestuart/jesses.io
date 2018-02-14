/* @flow */
import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import _ from 'lodash'
import fp from 'lodash/fp'
import { DateTime } from 'luxon'

import { PhotographyGridSection } from '../components/Photography'

import type { S3ImageAsset } from '../types/s3-image-asset'

type Props = {
  data: {
    site: {
      metadata: {
        title: string,
      },
    },
    allS3ImageAssets: {
      edges: Array<S3ImageAsset>,
    },
  },
}

const PhotographyIndex = ({ data }: Props) => {
  const siteTitle = _.get(data, 'site.siteMetadata.title')
  const imageNodes =
    // Collect all of the image nodes for each S3ImageAsset resorce into a
    // single array.
    _.flow(fp.get('allS3ImageAsset.edges'), fp.map('node'))(data)

  const imagesGroupedByDate = _.groupBy(imageNodes, 'EXIF.DateCreatedISO')
  const sortedArrayOfGroupedImages = _.reverse(
    _.sortBy(imagesGroupedByDate, imageGroup =>
      _.get(_.head(imageGroup), 'EXIF.DateCreatedISO')
    )
  )

  return (
    <Fragment>
      <Helmet title={`Photography | ${siteTitle}`} />
      <div className="bg-near-white black-80">
        {sortedArrayOfGroupedImages.map(imageNodeList => {
          const title = _.get(_.head(imageNodeList), 'EXIF.DateCreatedISO')
          const linkSlug = `/photography/${title}`
          const linkImages = _.map(
            _.take(imageNodeList, 6),
            'childImageSharp.sizes'
          )
          const datetime = DateTime.fromISO(title)
          return (
            <PhotographyGridSection
              datetime={datetime}
              images={linkImages}
              isPreview={true}
              key={title}
              slug={linkSlug}
            />
          )
        })}
      </div>
    </Fragment>
  )
}

export default PhotographyIndex

export const pageQuery = graphql`
  query PhotographyPostsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allS3ImageAsset {
      edges {
        node {
          id
          EXIF {
            DateCreatedISO
            DateTimeOriginal
          }
          childImageSharp {
            sizes(maxWidth: 2048) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
