import { Box } from 'rebass/styled-components'
import { ExifData } from 'gatsby-source-s3-image'
import Img from 'gatsby-image'
import React, { MouseEventHandler } from 'react'
import _ from 'lodash'
import styled from 'styled-components'

import ExifOverlay from 'components/Photography/ExifOverlay'
import S3ImageAsset from 'types/S3ImageAsset'
import useHover from 'utils/use-hover'

const StyledImageZoomGridElement = styled(Box)`
  border-radius: 2px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.5s;

  // Throw in some drop shadow to make it pretty (extra on hover) — and just a
  //a smidge of border radius, too:
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));
  &:hover {
    filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.9));
  }
`

interface Props {
  style?: any
  image: {
    id: string
    childImageSharp: S3ImageAsset
    EXIF: ExifData
  }
  onClick: MouseEventHandler<HTMLDivElement>
}

const ImageZoomGridElement = (props: Props) => {
  // @ts-ignore
  const { image }: { image: S3ImageAsset } = props

  const [isActive, setIsActive] = useHover()

  const thumbnailImage: S3ImageAsset = _.get(
    image,
    'childImageSharp.thumbnailSizes',
  )
  console.log({ imageSharp: image.childImageSharp })

  if (_.isEmpty(thumbnailImage)) {
    return null
  }

  // const { aspectRatio } = thumbnailImage
  // const lensModel = mapLensModelExif(_.get(image, 'EXIF.LensModel'))
  // const { FNumber, FocalLength, ISO, ShutterSpeedFraction } = image.EXIF
  // const cssGridRowSpan =
  //   aspectRatio > 1
  //     ? { gridRow: 'span 1 / auto' }
  //     : { gridRow: 'span 2 / auto' }

  // <Box flex="1 1 auto" width="100%" height="100%">
  return (
    // @ts-ignore
    <StyledImageZoomGridElement {...props} margin={2} {...setIsActive}>
      <Img imgStyle={{ objectFit: 'contain' }} fluid={thumbnailImage} />
      <ExifOverlay isActive={isActive as boolean} image={image} />
    </StyledImageZoomGridElement>
  )
}

export default ImageZoomGridElement
