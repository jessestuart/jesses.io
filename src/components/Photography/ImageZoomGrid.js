import React from 'react'
import styled from 'styled-components'

const ImageZoomGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
  grid-auto-rows: minmax(200px, auto);
`

// eslint-disable-next-line react/display-name
export default ({ children }) => <ImageZoomGrid>{children}</ImageZoomGrid>
