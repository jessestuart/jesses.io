import { ExifData } from 'gatsby-source-s3-image'
import GatsbyImage from 'types/GatsbyImage'

export interface S3ImageAsset {
  id: string
  EXIF?: ExifData
  childImageSharp: {
    original: {
      height: number
      width: number
    }
    thumbnailSizes: GatsbyImage[]
    largeSizes: GatsbyImage[]
  }
}
