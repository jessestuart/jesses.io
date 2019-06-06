import Img from 'gatsby-image'
import { ExifData } from 'gatsby-source-s3-image'
import _ from 'lodash'
import React, { MouseEventHandler } from 'react'
import styled from 'styled-components'

import ExifOverlay from 'components/Photography/ExifOverlay'
import GatsbyImage from 'types/GatsbyImage'
import { mapLensModelExif } from 'utils/exif'
import useHover from 'utils/use-hover'

const StyledImageZoomGridElement = styled.div`
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  grid-column-start: auto;
  overflow: hidden;
  position: relative;
  transition: all 0.4s;
  justify-content: flex-end;
  // Throw in some drop shadow to make it pretty (extra on hover) — and just a
  // smidge of border radius, too:
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.75));
  &:hover {
    filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.9));
  }
`

interface Props {
  image: {
    childImageSharp: GatsbyImage
    EXIF: ExifData
  }
  onClick: MouseEventHandler<HTMLDivElement>
}

const ImageZoomGridElement = (props: Props) => {
  const { image } = props

  const [isActive, setIsActive] = useHover()

  const thumbnailSizes: GatsbyImage = _.get(
    image,
    'childImageSharp.thumbnailSizes',
  )

  if (_.isEmpty(thumbnailSizes)) {
    return null
  }

  const { aspectRatio } = thumbnailSizes
  const style = aspectRatio > 1 ? { gridRow: 'span 1' } : { gridRow: 'span 2' }

  const lensModel = mapLensModelExif(image.EXIF.LensModel)
  const { FNumber, ISO, FocalLength } = image.EXIF

  return (
    <StyledImageZoomGridElement {...props} {...setIsActive} {...style}>
      <Img fluid={thumbnailSizes} />
      <ExifOverlay style={isActive ? { opacity: 1 } : { opacity: 0 }}>
        {FocalLength}mm, ƒ{FNumber}, ISO {ISO}
        <br />
        {lensModel}
      </ExifOverlay>
    </StyledImageZoomGridElement>
  )
}

export default ImageZoomGridElement
