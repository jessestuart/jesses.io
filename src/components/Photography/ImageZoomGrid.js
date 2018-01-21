import React from 'react'
import styled from 'styled-components'

const ImageZoomGrid = styled.div`
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

// eslint-disable-next-line react/display-name
export default ({ children }) => <ImageZoomGrid>{children}</ImageZoomGrid>
