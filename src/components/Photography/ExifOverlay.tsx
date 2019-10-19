import styled from 'styled-components'

const ExifOverlay = styled.div`
  background: linear-gradient(
    0,
    rgba(0, 0, 0, 1) 0%,
    rgba(200, 200, 200, 0) 100%
  );
  bottom: 0;
  color: white;
  display: flex;
  font-family: sans-serif;
  font-size: 0.9rem;
  font-variant: small-caps;
  justify-content: flex-end;
  opacity: ${({ isActive }: { isActive: boolean }) => (isActive ? 1 : 0)};
  padding: 10px;
  position: absolute;
  text-align: right;
  text-shadow: 0 0 4px #000;
  transition: all 0.5s;
  // width: 100%;
`

export default ExifOverlay
