import React from 'react'
import styled from 'styled-components'

const StyledImageZoomGridElement = styled.div(
  ({ aspectRatio }: { aspectRatio: number }) => `
    display: flex;
    flex-direction: column;
    grid-column-start: auto;
    grid-row: ${aspectRatio > 1 ? 'span 1' : 'span 2'};
    overflow: hidden;
    position: relative;
    img {
      box-shadow: 3px 3px 4px 2px rgba(125, 125, 125, 0.9);
    }
`,
)

interface Props {
  aspectRatio: number
  children: any
  onClick: React.MouseEventHandler<HTMLDivElement>
}

// eslint-disable-next-line react/display-name
const ImageZoomGridElement = ({ aspectRatio, children, onClick }: Props) => (
  <StyledImageZoomGridElement aspectRatio={aspectRatio} onClick={onClick}>
    {children}
  </StyledImageZoomGridElement>
)

export default ImageZoomGridElement
