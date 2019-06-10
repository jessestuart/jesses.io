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
      defaultSizes: fluid {
        ...GatsbyImageSharpFluid
      }
      thumbnailSizes: fluid(maxWidth: 512) {
        ...GatsbyImageSharpFluid
      }
      largeSizes: fluid(maxWidth: 2048) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
