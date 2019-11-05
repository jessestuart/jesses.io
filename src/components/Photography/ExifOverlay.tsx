import { Flex } from 'rebass/styled-components'
import React from 'react'
import _ from 'lodash'
import styled from 'styled-components'

import { mapLensModelExif } from 'utils/exif'
import S3ImageAsset from 'types/S3ImageAsset'

const StyledExifOverlay = styled(Flex)`
  background: linear-gradient(
    0,
    rgba(0, 0, 0, 1) 0%,
    rgba(200, 200, 200, 0) 100%
  );
  bottom: 0;
  color: white;
  display: flex;
  font-family: system-ui, sans-serif;
  font-size: 1.1rem;
  font-variant: small-caps;
  justify-content: flex-end;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  padding: 10px;
  position: absolute;
  text-align: right;
  text-shadow: 0 0 4px #000;
  transition: all 0.5s;
  width: 100%;
`

interface Props {
  image: S3ImageAsset | any
  isActive: boolean
}

const ExifOverlay = ({ image, isActive }: Props) => {
  const EXIF = _.get(image, 'EXIF')
  if (!EXIF) {
    return null
  }
  const lensModel: string | undefined = mapLensModelExif(EXIF.LensModel || '')
  const { FNumber, FocalLength, ISO, ShutterSpeedFraction } = EXIF
  return (
    <StyledExifOverlay isActive={isActive}>
      {FocalLength ? `${FocalLength}mm, ` : null}
      {ShutterSpeedFraction ? `${ShutterSpeedFraction}s, ` : null}
      {FNumber ? `ƒ${FNumber}, ` : null}
      {ISO ? `ISO ${ISO}` : null}
      <br />
      {lensModel}
    </StyledExifOverlay>
  )
}

export default ExifOverlay
