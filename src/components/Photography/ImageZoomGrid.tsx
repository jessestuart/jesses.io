import React from 'react'

import styled from 'styled-components'

const StyledImageZoomGrid = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-auto-rows: minmax(4em, auto);
  @media (min-width: 45em) {
    grid-template-columns: repeat(auto-fill, minmax(16em, 1fr));
  }
  @media (max-width: 45em) {
    grid-template-columns: repeat(auto-fill, minmax(50vw, 1fr));
  }
`

interface Props {
  children?: any
}

const ImageZoomGrid = ({ children }: Props) => (
  <StyledImageZoomGrid>{children}</StyledImageZoomGrid>
)

export default ImageZoomGrid
