import { graphql, useStaticQuery } from 'gatsby'
import { S3ImageAssetNode } from 'gatsby-source-s3-image'
import _ from 'lodash'
import fp from 'lodash/fp'
import { DateTime } from 'luxon'
import React from 'react'
import { Helmet } from 'react-helmet'

import { PhotographyGridSection } from 'components'

interface Props {
  allS3ImageAsset: {
    edges: {
      node: S3ImageAssetNode[]
    }
  }
}

export const PHOTOGRAPHY_INDEX_NUM_PREVIEWS = 6

const getS3ImageAssetNodes = _.flow(
  // Collect all of the image nodes for each S3ImageAsset into a single array...
  fp.get('allS3ImageAsset.edges'),
  fp.map('node'),
)

const createSortedArrayOfGroupedImages = _.flow(
  getS3ImageAssetNodes,
  // Group by *date* created... (string value)
  fp.groupBy('EXIF.DateCreatedISO'),
  // Then sort by *datetime* created... (numeric value)
  fp.sortBy(fp.get('[0].EXIF.DateTimeOriginal')),
  // // Finally, reverse the array so the most recent photos appear at the top.
  fp.reverse,
)

const PhotographyIndex = () => {
  const data: Props = useStaticQuery(graphql`
    query {
      allS3ImageAsset {
        edges {
          node {
            ...S3ImageAssetData
          }
        }
      }
    }
  `)

  const pageTitle = 'Photography'
  const sortedArrayOfGroupedImages = createSortedArrayOfGroupedImages(data)

  return (
    <>
      <Helmet title={pageTitle} />
      <div
        className="bg-near-white black-80 pv4 pa3-ns"
        style={{ flex: '1 0' }}
      >
        {_.compact(
          sortedArrayOfGroupedImages.map(
            (imageNodeList: S3ImageAssetNode[]) => {
              if (_.isEmpty(imageNodeList)) {
                return null
              }
              const sectionTitle = _.get(
                _.head(imageNodeList),
                'EXIF.DateCreatedISO',
              )
              const datetime = DateTime.fromISO(sectionTitle)
              const linkSlug = `/photography/${sectionTitle}`

              // From each array of images, sort by date created and take the
              // first six to display as previews.
              const linkImages = _.flow(
                fp.sortBy('EXIF.DateTimeOriginal'),
                fp.take(PHOTOGRAPHY_INDEX_NUM_PREVIEWS),
              )(imageNodeList)

              return (
                <PhotographyGridSection
                  datetime={datetime}
                  images={linkImages || []}
                  key={sectionTitle}
                  totalNumImages={_.size(imageNodeList)}
                  slug={linkSlug}
                />
              )
            },
          ),
        )}
      </div>
    </>
  )
}

export default PhotographyIndex
