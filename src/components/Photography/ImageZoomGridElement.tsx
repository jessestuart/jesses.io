import { Box } from 'rebass/styled-components'
import { ExifData } from 'gatsby-source-s3-image'
import Img from 'gatsby-image'
import React, { MouseEventHandler } from 'react'
import _ from 'lodash'
import styled from 'styled-components'

import { mapLensModelExif } from 'utils/exif'
import ExifOverlay from 'components/Photography/ExifOverlay'
import GatsbyImage from 'types/GatsbyImage'
import useHover from 'utils/use-hover'

const StyledImageZoomGridElement = styled(Box)`
  border-radius: 2px;
  cursor: pointer;
  // display: flex;
  // flex: 1 0 auto;
  // display: grid;
  // grid-column-start: auto;
  // height: min-content;
  overflow: hidden;
  // position: relative;
  transition: all 0.4s;

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
    childImageSharp: GatsbyImage
    EXIF: ExifData
  }
  onClick: MouseEventHandler<HTMLDivElement>
}

const ImageZoomGridElement = (props: Props) => {
  console.log({ props })
  const { image, style } = props

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
      padding={1}
      // style={{
      //   width: style.width,
      // }}
      // {...props}
      {...setIsActive}
      style={{ ...style }}
      // style={style}
      // my="auto"
      // style={cssGridRowSpan}
    >
      <Img
        imgStyle={{
          objectFit: 'contain',
        }}
        fluid={thumbnailImage}
      />
      <ExifOverlay isActive={isActive as boolean} image={image} />
    </StyledImageZoomGridElement>
  )
}

export default ImageZoomGridElement
