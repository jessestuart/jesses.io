import React from 'react'
import { Flex, TextProps } from 'rebass/styled-components'
import styled from 'styled-components'
import { ExifData } from 'gatsby-source-s3-image'
import _ from 'lodash'

import { mapLensModelExif } from 'utils/exif'

const StyledExifOverlay = styled(Flex)<TextProps & { isActive: boolean }>`
  background: linear-gradient(
    0,
    rgba(0, 0, 0, 1) 0%,
    rgba(200, 200, 200, 0) 100%
  );
  bottom: 0;
  color: white;
  display: flex;
  font-size: 1rem;
  justify-content: flex-end;
  padding: 10px;
  position: absolute;
  text-align: right;
  text-shadow: 0 0 4px #000;
  transition: opacity 0.5s;
  width: 100%;
`

interface Props {
  exif: ExifData | undefined
  isActive: boolean
}

const getExifDescription = _.memoize((exif: ExifData) => {
  const lensModel: string | undefined = mapLensModelExif(exif.LensModel || '')
  const { FNumber, FocalLength, ISO, ShutterSpeedFraction } = exif
  return (
    <>
      {FocalLength ? `${FocalLength}mm, ` : null}
      {ShutterSpeedFraction ? `${ShutterSpeedFraction}s, ` : null}
      {FNumber ? `ƒ${FNumber}, ` : null}
      {ISO ? `ISO ${ISO}` : null}
      <br />
      {lensModel}
    </>
  )
})

const ExifOverlay = ({ exif, isActive }: Props) => {
  if (!exif) {
    return null
  }
  return (
    <StyledExifOverlay
      fontFamily="smallcaps"
      isActive={isActive}
      style={{ opacity: isActive ? 1 : 0 }}
    >
      {getExifDescription(exif)}
    </StyledExifOverlay>
  )
}

export default ExifOverlay
