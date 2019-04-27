import { ExifData } from 'gatsby-source-s3-image'
import { GatsbyImage } from './gatsby-image'
export interface S3ImageAsset {
  EXIF?: ExifData
  childFile: {
    childImageSharp: GatsbyImage
  }
}
