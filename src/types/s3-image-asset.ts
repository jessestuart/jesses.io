import { ExifData } from 'gatsby-source-s3-image'

import GatsbyImage from 'types/gatsby-image'

export interface S3ImageAsset {
  id: string
  EXIF?: ExifData
  childrenFile: {
    childImageSharp: {
      original: {
        height: number
        width: number
      }
      thumbnailSizes: GatsbyImage[]
      largeSizes: GatsbyImage[]
    }
  }
}
