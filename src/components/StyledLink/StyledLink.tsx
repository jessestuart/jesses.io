import styled from 'styled-components'
import colors from '../../utils/colors'

interface Props {
  linkColor?: string
  hoverColor?: string
  href?: string
}

const generateUnderlineStyles = ({ hoverColor, linkColor }: Props) => `
  border-bottom: 2px solid ${linkColor || colors.defaultLink};
  position: relative;
  text-decoration: none;

  &::before {
    background-color: ${hoverColor || colors.defaultHover};
    bottom: -2px;
    content: '';
    height: 2px;
    left: 0;
    position: absolute;
    transform: scaleX(0);
    transition: all 0.25s ease-in-out 0s;
    visibility: hidden;
    width: 100%;
  }
  &:hover:before {
    transform: scaleX(1);
    visibility: visible;
  }
`

export default styled.a`
  ${(props: Props) => generateUnderlineStyles(props)};
`
