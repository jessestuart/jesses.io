import Img from 'gatsby-image'
import { ExifData } from 'gatsby-source-s3-image'
import _ from 'lodash'
import React, { MouseEventHandler } from 'react'
import styled from 'styled-components'
import { Box, Flex } from 'rebass/styled-components'

import ExifOverlay from 'components/Photography/ExifOverlay'
import GatsbyImage from 'types/GatsbyImage'
import { mapLensModelExif } from 'utils/exif'
import useHover from 'utils/use-hover'

const StyledImageZoomGridElement = styled(Box)`
  border-radius: 2px;
  cursor: pointer;
  display: grid;
  grid-column-start: auto;
  overflow: hidden;
  position: relative;
  transition: all 0.4s;
  height: min-content;

  // Throw in some drop shadow to make it pretty (extra on hover) — and just a
  // smidge of border radius, too:
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));
  &:hover {
    filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.9));
  }
`

interface Props {
  image: {
    id: string
    childImageSharp: GatsbyImage
    EXIF: ExifData
  }
  onClick: MouseEventHandler<HTMLDivElement>
}

const ImageZoomGridElement = (props: Props) => {
  const { image } = props

  const [isActive, setIsActive] = useHover()

  const thumbnailImage = _.get(image, 'childImageSharp.sizes')
  console.log({ imageSharp: image.childImageSharp })

  if (_.isEmpty(thumbnailImage)) {
    return null
  }

  const { aspectRatio } = thumbnailImage
  const lensModel = mapLensModelExif(_.get(image, 'EXIF.LensModel'))
  const { FNumber, FocalLength, ISO, ShutterSpeedFraction } = image.EXIF
  // const cssGridRowSpan =
  //   aspectRatio > 1
  //     ? { gridRow: 'span 1 / auto' }
  //     : { gridRow: 'span 2 / auto' }

  // <Box flex="1 1 auto" width="100%" height="100%">
  return (
    <StyledImageZoomGridElement
      {...props}
      {...setIsActive}
      my="auto"
      // style={cssGridRowSpan}
    >
      <Box>
        <Img imgStyle={{ objectFit: 'contain' }} fluid={thumbnailImage} />
        <ExifOverlay isActive={isActive as boolean}>
          {FocalLength ? `${FocalLength}mm, ` : null}
          {ShutterSpeedFraction ? `${ShutterSpeedFraction}s, ` : null}
          {FNumber ? `ƒ${FNumber}, ` : null}
          {ISO ? `ISO ${ISO}` : null}
          <br />
          {lensModel}
        </ExifOverlay>
      </Box>
    </StyledImageZoomGridElement>
  )
}

export default ImageZoomGridElement
