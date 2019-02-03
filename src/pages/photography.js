/* @flow */
import { graphql } from 'gatsby'
import React from 'react'

// import type { S3ImageAsset } from '../types/s3-image-asset'

type Props = {
  data: {
    site: {
      metadata: {
        title: string,
      },
    },
    // allS3ImageAssets: {
    //   edges: Array<S3ImageAsset>,
    // },
  },
}

const PhotographyIndex = ({ data }: Props) => {
  // const pageTitle = `Photography | ${_.get(data, 'site.siteMetadata.title')}`

  // const imageNodes =
  // Collect all of the image nodes for each S3ImageAsset resorce into a
  // single array.
  // _.flow(fp.get('allS3ImageAsset.edges'), fp.map('node'))(data)

  // const sortedArrayOfGroupedImages = _.flow(
  //   // Group by *date* created... (string value)
  //   fp.groupBy('EXIF.DateCreatedISO'),
  //   // Then sort by *datetime* created... (numeric value)
  //   fp.sortBy(fp.get('[0].EXIF.DateTimeOriginal')),
  //   // Finally, reverse to have the most recent photos at the top.
  //   fp.reverse
  // )(imageNodes)

  return <div />

  // return (
  //   <Fragment>
  //     <Helmet title={pageTitle} />
  //     <div
  //       className="bg-near-white black-80 pv4 pa3-ns"
  //       style={{ flex: '1 0' }}
  //     >
  //       {_.compact(
  //         sortedArrayOfGroupedImages.map(imageNodeList => {
  //           if (_.isEmpty(imageNodeList)) {
  //             return
  //           }
  //           const title = _.get(_.head(imageNodeList), 'EXIF.DateCreatedISO')
  //           const datetime = DateTime.fromISO(title)
  //           const linkSlug = `/photography/${title}`

  //           // From each array of images, sort by date created and take the
  //           // first six to display as previews.
  //           const linkImages = _.flow(
  //             fp.sortBy('EXIF.DateTimeOriginal'),
  //             fp.take(6)
  //           )(imageNodeList)

  //           return (
  //             <PhotographyGridSection
  //               datetime={datetime}
  //               images={linkImages}
  //               key={title}
  //               slug={linkSlug}
  //             />
  //           )
  //         })
  //       )}
  //     </div>
  //   </Fragment>
  // )
}

export default PhotographyIndex

export const pageQuery = graphql`
  query PhotographyPostsQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
// allS3ImageAsset {
//   edges {
//     node {
//       id
//       EXIF {
//         DateCreatedISO
//         DateTimeOriginal
//       }
//       childImageSharp {
//         original {
//           height
//           width
//         }
//         thumbnailSizes: sizes(maxWidth: 512) {
//           aspectRatio
//           src
//           srcSet
//           sizes
//         }
//         largeSizes: sizes(maxWidth: 1536, quality: 90) {
//           aspectRatio
//           src
//           srcSet
//           sizes
//         }
//       }
//     }
//   }
// }
