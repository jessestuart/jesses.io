import { FluidObject } from 'gatsby-image'
import { ExifData } from 'gatsby-source-s3-image'

export default interface S3ImageAsset {
  id: string
  EXIF?: ExifData
  childImageSharp: {
    original: {
      height: number
      width: number
    }
    thumbnailSizes: FluidObject[]
    largeSizes: FluidObject[]
  }
}
