import { ExifData } from '../../plugins/gatsby-source-s3/extend-node-type'
import { GatsbyImage } from './gatsby-image'

export interface S3ImageAsset {
  EXIF?: ExifData
  childImageSharp: GatsbyImage
}
