import { PhotographyGridSection } from 'components'
import Layout from 'components/Layout'
import { graphql, useStaticQuery } from 'gatsby'
import _ from 'lodash'
import fp from 'lodash/fp'
import { DateTime } from 'luxon'
import React from 'react'
import { Helmet } from 'react-helmet'
import GatsbyLocation from 'types/GatsbyLocation'
import { S3ImageAsset } from 'types/s3-image-asset'
import { useSiteMetadata } from 'utils/hooks'

interface Props {
  allS3ImageAssets: {
    edges: {
      node: S3ImageAsset[]
    }
  }
}

export const PHOTOGRAPHY_INDEX_NUM_PREVIEWS = 6

const PhotographyIndex = ({ location }: { location: GatsbyLocation }) => {
  const { title } = useSiteMetadata()
  const data: Props = useStaticQuery(graphql`
    query {
      allS3ImageAsset {
        edges {
          node {
            id
            EXIF {
              DateCreatedISO
              DateTimeOriginal
              ExposureTime
              FNumber
              FocalLength
              ISO
              LensModel
              Model
              ShutterSpeedValue
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
  `)

  const pageTitle = `Photography | ${title}`

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
                isPreview={true}
                key={sectionTitle}
                slug={linkSlug}
              />
            )
          }),
        )}
      </div>
    </Layout>
  )
}

export default PhotographyIndex
