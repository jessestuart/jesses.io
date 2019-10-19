import { ExifData } from 'gatsby-source-s3-image'
import { Flex } from 'rebass/styled-components'
import Img from 'gatsby-image'
import React, { MouseEventHandler } from 'react'
import _ from 'lodash'
import styled from 'styled-components'

import { mapLensModelExif } from 'utils/exif'
import ExifOverlay from 'components/Photography/ExifOverlay'
import GatsbyImage from 'types/GatsbyImage'
import useHover from 'utils/use-hover'

const StyledImageZoomGridElement = styled(Flex)`
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  flex: 1 0 auto;
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
      // style={style}
      // my="auto"
      // style={cssGridRowSpan}
    >
      <Img
        style={{
          // display: 'flex',
          // flexWrap: 'wrap',
          // flex: 1,
          // ...style,
          // height: style.height,
          // lineHeight: style.height / 6,
          // lineHeight: `${style.height}px`,
          // flex: '1 1 auto',
          width: style.width,
        }}
        // width={[1 / 5, 1 / 4, 1 / 3]}
        imgStyle={{
          // display: 'flex',
          // flex: 1,
          objectFit: 'contain',
          // height: style.height,
          // lineHeight: `${style.height}px`,
          // width: '33%',
        }}
        fluid={thumbnailImage}
      />
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
