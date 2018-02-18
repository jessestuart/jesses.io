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

  const sortedArrayOfGroupedImages = _.flow(
    fp.groupBy('EXIF.DateCreatedISO'),
    fp.sortBy(fp.get('[0].EXIF.DateTimeOriginal')),
    fp.reverse
  )(imageNodes)

  return (
    <Fragment>
      <Helmet title={`Photography | ${siteTitle}`} />
      <div className="bg-near-white black-80 pv4 pa3-ns">
        {_.compact(
          sortedArrayOfGroupedImages.map(imageNodeList => {
            if (_.isEmpty(imageNodeList)) {
              return
            }
            const title = _.get(_.head(imageNodeList), 'EXIF.DateCreatedISO')
            const linkSlug = `/photography/${title}`
            const linkImages = _.flow(
              fp.sortBy('EXIF.DateTimeOriginal'),
              fp.take(6)
            )(imageNodeList)

            const datetime = DateTime.fromISO(title)
            return (
              <PhotographyGridSection
                datetime={datetime}
                images={linkImages}
                key={title}
                slug={linkSlug}
              />
            )
          })
        )}
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
