/* @flow */
import type { ExifData } from 'gatsby-source-s3-image'

import type { GatsbyImage } from './gatsby-image'

export type S3ImageAsset = {
  EXIF?: ExifData,
  childFile: {
    childImageSharp: GatsbyImage,
  },
}
