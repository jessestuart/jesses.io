import { graphql } from 'gatsby'

export const s3ImageAssetFragment = graphql`
  fragment S3ImageAssetData on S3ImageAsset {
    id
    EXIF {
      DateCreatedISO
      DateTimeOriginal
      ExposureTime
      FNumber
      FocalLength
      ISO
      LensModel
      Model
      ShutterSpeedFraction
    }
    childImageSharp {
      original {
        height
        width
        src
      }
      sizes: fluid(maxWidth: 2048) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
