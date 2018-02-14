import type { GatsbyImage } from './gatsby-image'
import type { ExifData } from '../../plugins/gatsby-source-s3/extend-node-type'

export type S3ImageAsset = {
  EXIF?: ExifData,
  childImageSharp: GatsbyImage,
}
