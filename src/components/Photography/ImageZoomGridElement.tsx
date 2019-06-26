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
    id: any
    childImageSharp: GatsbyImage
    EXIF: ExifData
  }
  onClick: MouseEventHandler<HTMLDivElement>
}

const ImageZoomGridElement = (props: Props) => {
  const { image } = props

  const [isActive, setIsActive] = useHover()

  const thumbnailSizes: GatsbyImage = _.get(image, 'childImageSharp.sizes')

  if (_.isEmpty(thumbnailSizes)) {
    return null
  }

  const { aspectRatio } = thumbnailSizes

  const lensModel = mapLensModelExif(_.get(image, 'EXIF.LensModel'))
  const { FNumber, ISO, FocalLength, ShutterSpeedFraction } = image.EXIF

  return (
    <StyledImageZoomGridElement
      {...props}
      {...setIsActive}
      style={aspectRatio > 1 ? { gridRow: 'span 1' } : { gridRow: 'span 2' }}
    >
      <Img fluid={thumbnailSizes} />
      <ExifOverlay isActive={isActive as boolean}>
        {FocalLength ? `${FocalLength}mm, ` : null}
        {ShutterSpeedFraction ? `${ShutterSpeedFraction}s, ` : null}
        {FNumber ? `ƒ${FNumber}, ` : null}
        {ISO ? `ISO ${ISO}` : null}
        <br />
        {lensModel}
      </ExifOverlay>
    </StyledImageZoomGridElement>
  )
}

export default ImageZoomGridElement
