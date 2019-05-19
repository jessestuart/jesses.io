import { MouseEventHandler, ReactNode } from 'react'
import styled from 'styled-components'
import { withProps } from 'utils/styled-components'

const StyledImageZoomGridElement = styled.div`
  display: flex;
  flex-direction: column;
  grid-column-start: auto;
  overflow: hidden;
  position: relative;
  transition: all 0.4s;
  // Throw in some drop shadow to make it pretty (extra on hover) — and just a
  // smidge of border radius, too:
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.75));
  &:hover {
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.9));
  }
  border-radius: 2px;
`

interface Props {
  aspectRatio: number
  children: ReactNode
  onClick: MouseEventHandler<HTMLDivElement>
}

export default withProps<Props>()(styled(StyledImageZoomGridElement))`
  grid-row: ${props => (props.aspectRatio > 1 ? 'span 1' : 'span 2')};
`

// export default styled(StyledImageZoomGridElement)`
//   gridRow: aspectRatio > 1 ? 'span 1' : 'span 2',
// `
// const ImageZoomGridElement: FunctionComponent<Props> = ({
//   aspectRatio,
//   children,
//   onClick = () => null,
// }: Props) => (
//   <StyledImageZoomGridElement
//     onClick={onClick}
//     style={{
//       gridRow: aspectRatio > 1 ? 'span 1' : 'span 2',
//     }}
//   >
//     {children}
//   </StyledImageZoomGridElement>
// )

// export default ImageZoomGridElement
