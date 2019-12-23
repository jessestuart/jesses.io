import _ from 'lodash'
import React from 'react'
import { Box, Flex } from 'rebass/styled-components'
import styled from 'styled-components'
import { Aperture } from 'react-feather'
import Fraction from 'fraction.js'
// import { MapPin } from 'react-feather'

import S3ImageAsset from 'types/S3ImageAsset'
import { mapLensModelExif } from 'utils/exif'

const StyledExifOverlay = styled(Flex)`
  background: linear-gradient(
    0,
    rgba(0, 0, 0, 1) 0%,
    rgba(200, 200, 200, 0) 100%
  );
  bottom: 0;
  color: white;
  display: flex;
  // font-family: Lato, system-ui, sans-serif;
  // font-size: 0.9rem;
  font-variant: small-caps;
  justify-content: flex-end;
  // opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  // padding: 10px;
  position: absolute;
  text-align: right;
  text-shadow: 0 0 4px #000;
  transition: opacity 0.5s;
  // width: 100%;
  user-select: none;
`

interface Props {
  image?: S3ImageAsset | any
  isActive: boolean
}

const ExifOverlay = ({ image, isActive }: Props) => {
  const EXIF = _.get(image, 'EXIF')
  if (!EXIF) {
    return null
  }

  const lensModel: string | undefined = mapLensModelExif(EXIF.LensModel || '')
  const { ExposureTime, FNumber, FocalLength, ISO, ShutterSpeedFraction } = EXIF
  let shutterSpeed: any
  if (ExposureTime > 0.5) {
    shutterSpeed = `${ExposureTime}"` //  new Fraction(ExposureTime).toFraction(false)
  } else {
    shutterSpeed = ShutterSpeedFraction
  }

  // TODO: Add this back in.
  // <Box sx={{ position: 'absolute', left: 0, bottom: 0, pl: 3 }}>
  //   <MapPin />
  // </Box>
  return (
    <StyledExifOverlay
      isActive={isActive}
      fontFamily="body"
      opacity="1"
      // opacity={isActive ? 1 : 0}
      width="100%"
      p={2}
      fontSize={[1]}
      flexDirection="column"
    >
      <Box textAlign="right">
        <Box as="span" pr={1}>
          <Aperture size={16} />
        </Box>
        {FocalLength ? `${FocalLength}mm, ` : null}
        {shutterSpeed ? `${shutterSpeed}, ` : null}
        {FNumber ? `ƒ${FNumber}, ` : null}
        {ISO ? `ISO ${ISO}` : null}
      </Box>
      <Box></Box>
      {lensModel}
    </StyledExifOverlay>
  )
}

export default ExifOverlay
