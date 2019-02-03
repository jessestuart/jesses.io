import React from 'react'
import styled from 'styled-components'

const ImageZoomGridElement = styled.div`
  display: flex;
  flex-direction: column;
  grid-column-start: auto;
  grid-row: ${props => (props.aspectRatio > 1 ? 'span 1' : 'span 2')};
  overflow: hidden;
  position: relative;
  img {
    box-shadow: 3px 3px 4px 2px rgba(125, 125, 125, 0.9);
  }
`

type Props = {
  aspectRatio: *,
  children: *,
  onClick: *,
}

// eslint-disable-next-line react/display-name
export default ({ aspectRatio, children, onClick }: Props) => (
  <ImageZoomGridElement aspectRatio={aspectRatio} onClick={onClick}>
    {children}
  </ImageZoomGridElement>
)
