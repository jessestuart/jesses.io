/* @flow */
import React from 'react'
import Img from 'gatsby-image'
import _ from 'lodash'
import fp from 'lodash/fp'
// import styled from 'styled-components'
import { DateTime } from 'luxon'

import type { GatsbyImage } from '../../types/gatsby-image'
import StyledPanel from '../StyledPanel/StyledPanel'

import {
  ImageZoomGrid,
  ImageZoomGridElement,
  PhotographySectionHeader,
} from '.'

type Props = {
  datetime: DateTime,
  images: Array<GatsbyImage>,
  slug: string,
}

const PhotographyGridSection = ({ datetime, images, slug }: Props) => {
  if (!images) {
    return
  }
  // const sortedImages = _.flow(
  //   fp.sortBy('EXIF.DateTimeOriginal'),
  //   fp.get('childImageSharp.thumbnailSizes')
  // )(image)
  const sortedImages = _.sortBy(images, 'EXIF.DateTimeOriginal')
  console.log({ sortedImages })
  return (
    <StyledPanel>
      <PhotographySectionHeader datetime={datetime} href={slug} />
      <ImageZoomGrid>
        {images.map(image => {
          console.log({ image })
          // const thumbnailSizes = _.sortBy(
          //   // _.get(image, 'childImageSharp.thumbnailSizes'),
          //   image,
          //   'EXIF.DateTimeOriginal'
          // ).map(i => i.childImageSharp.thumbnailSizes)
          const thumbnailSizes = _.get(image, 'childImageSharp.thumbnailSizes')

          if (!thumbnailSizes) {
            return
          }

          return (
            <ImageZoomGridElement
              key={thumbnailSizes.src}
              aspectRatio={thumbnailSizes.aspectRatio}
            >
              <Img sizes={thumbnailSizes} />
            </ImageZoomGridElement>
          )
        })}
      </ImageZoomGrid>
    </StyledPanel>
  )
}

export default PhotographyGridSection

// export const s3ImageAssetImageFragment = graphql`
//   fragment S3ImageAsset_image on S3ImageAsset {
//     id
//     EXIF {
//       DateCreatedISO
//       DateTimeOriginal
//     }
//     childImageSharp {
//       original {
//         height
//         width
//       }
//       thumbnailSizes: sizes(maxWidth: 512) {
//         aspectRatio
//         src
//         srcSet
//         sizes
//       }
//       largeSizes: sizes(maxWidth: 1024, quality: 75) {
//         aspectRatio
//         src
//         srcSet
//         sizes
//       }
//     }
//   }
// `
