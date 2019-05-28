import Img from 'gatsby-image'
import _ from 'lodash'
import React, { MouseEventHandler } from 'react'
import styled from 'styled-components'
import GatsbyImage from 'types/GatsbyImage'
import { mapLensModelExif } from 'utils/exif'
import useHover from 'utils/use-hover'

const StyledImageZoomGridElement = styled.div(
  ({ aspectRatio }: { aspectRatio: number }) => `
    border-radius: 2px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    grid-column-start: auto;
    grid-row: ${aspectRatio > 1 ? 'span 1' : 'span 2'};
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
`,
)

const ExifOverlay = styled.div`
  background: linear-gradient(
    0,
    rgba(0, 0, 0, 1) 0%,
    rgba(200, 200, 200, 0) 100%
  );
  bottom: 0;
  color: white;
  display: flex;
  font-family: sans-serif;
  font-size: 0.9rem;
  font-variant: small-caps;
  justify-content: flex-end;
  opacity: 0;
  padding: 10px;
  position: absolute;
  text-align: right;
  text-shadow: 0 0 4px #000;
  transition: all 0.5s;
  width: 100%;
`

interface Props {
  image: {
    childImageSharp: any
    EXIF: any
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

  const lensModel = mapLensModelExif(image.EXIF.LensModel)
  const { FNumber, ISO, FocalLength } = image.EXIF

  return (
    <StyledImageZoomGridElement
      {...props}
      {...setIsActive}
      aspectRatio={aspectRatio}
    >
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
