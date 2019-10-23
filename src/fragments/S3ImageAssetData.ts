import { graphql } from 'gatsby'

export const s3ImageAssetFragment = graphql`
  fragment S3ImageAssetData on S3ImageAsset {
    id
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
    childImageSharp {
      original {
        height
        width
      }
      sizes: fluid(maxWidth: 2048) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`
