/* @flow */
import React from 'react'
import styled from 'styled-components'

const StyledImageZoomGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-auto-rows: minmax(200px, auto);
  @media (min-width: 45em) {
    grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
  }
  @media (max-width: 45em) {
    grid-template-columns: repeat(auto-fill, minmax(50vw, 1fr));
  }
`

type Props = {
  children?: React.Node,
}

const ImageZoomGrid = ({ children }: Props) => (
  <StyledImageZoomGrid>{children}</StyledImageZoomGrid>
)

export default ImageZoomGrid
