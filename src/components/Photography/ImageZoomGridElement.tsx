import Img from 'gatsby-image'
import _ from 'lodash'
import React, { MouseEventHandler } from 'react'
import { Box } from 'rebass/styled-components'
import styled from 'styled-components'

import ExifOverlay from 'components/Photography/ExifOverlay'
import S3ImageAsset from 'types/S3ImageAsset'
import useHover from 'utils/use-hover'

const StyledImageZoomGridElement = styled(Box)`
  border-radius: 2px;
  cursor: pointer;
  overflow: hidden;
  transition: filter 0.5s;

  // Throw in some drop shadow to make it pretty (extra on hover) — and just a
  //a smidge of border radius, too:
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));
  &:hover {
    filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.9));
  }
`

interface Props {
  style?: any
  image: S3ImageAsset
  onClick: MouseEventHandler<HTMLDivElement>
}

const ImageZoomGridElement = (props: Props) => {
  const { image } = props
  const [isActive, setIsActive] = useHover()
  const thumbnailImage = _.get(image, 'childImageSharp.sizes')

  if (_.isEmpty(thumbnailImage)) {
    return null
  }

  return (
    <StyledImageZoomGridElement {...props} {...setIsActive} margin={2}>
      <Img fluid={thumbnailImage} imgStyle={{ objectFit: 'contain' }} />
      <ExifOverlay image={image} isActive={isActive} />
    </StyledImageZoomGridElement>
  )
}

export default ImageZoomGridElement
