import { graphql } from 'gatsby'
import _ from 'lodash'
import fp from 'lodash/fp'
import { DateTime } from 'luxon'
import React from 'react'
import { Helmet } from 'react-helmet'

import { PhotographyGridSection } from 'components'
import Layout from 'components/Layout'
import GatsbyLocation from 'types/GatsbyLocation'
import { S3ImageAsset } from 'types/s3-image-asset'

interface Props {
  location: GatsbyLocation
  data: {
    site: {
      metadata: {
        title: string
      }
    }
    allS3ImageAssets: {
      edges: {
        node: S3ImageAsset[]
      }
    }
  }
}

export const PHOTOGRAPHY_INDEX_NUM_PREVIEWS = 6

const PhotographyIndex = ({ data, location }: Props) => {
  const pageTitle = `Photography | ${_.get(data, 'site.siteMetadata.title')}`

  // Collect all of the image nodes for each S3ImageAsset resorce into a
  // single array.
  const imageNodes = _.flow(
    fp.get('allS3ImageAsset.edges'),
    fp.map('node'),
  )(data)

  const sortedArrayOfGroupedImages = _.flow(
    // Group by *date* created... (string value)
    fp.groupBy('EXIF.DateCreatedISO'),
    // Then sort by *datetime* created... (numeric value)
    fp.sortBy(fp.get('[0].EXIF.DateTimeOriginal')),
    // Finally, reverse to have the most recent photos at the top.
    fp.reverse,
  )(imageNodes)

  return (
    <Layout location={location}>
      <Helmet title={pageTitle} />
      <div
        className="bg-near-white black-80 pv4 pa3-ns"
        style={{ flex: '1 0' }}
      >
        {_.compact(
          sortedArrayOfGroupedImages.map(imageNodeList => {
            if (_.isEmpty(imageNodeList)) {
              return null
            }
            const title = _.get(_.head(imageNodeList), 'EXIF.DateCreatedISO')
            const datetime = DateTime.fromISO(title)
            const linkSlug = `/photography/${title}`

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
                imageCount={_.size(imageNodeList)}
                isPreview={true}
                key={title}
                slug={linkSlug}
              />
            )
          }),
        )}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
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
          childrenFile {
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
  }
`

export default PhotographyIndex
