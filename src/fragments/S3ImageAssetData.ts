import { graphql } from 'gatsby'

export const exifDataFragment = graphql`
  fragment S3ImageExifData on S3ImageAsset {
    EXIF {
      DateCreatedISO
      DateTimeOriginal
      FNumber
      FocalLength
      ISO
      LensModel
      Model
      ShutterSpeedFraction
    }
  }
`

export const s3ImageAssetFragment = graphql`
  fragment S3ImageAssetData on S3ImageAsset {
    id
    childImageSharp {
      sizes: fluid(maxWidth: 2048) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
