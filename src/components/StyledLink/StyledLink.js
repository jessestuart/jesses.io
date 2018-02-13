/* @flow */
import styled from 'styled-components'
import colors from '../../utils/colors'
import color from 'onecolor'

const defaultHoverColor: string = color(colors.secondary.light7)
  .alpha(0.8)
  .cssa()

const defaultLinkColor: string = color(colors.primary.main)
  .alpha(0.8)
  .cssa()

type Props = {
  linkColor?: string,
  hoverColor?: string,
  href?: string,
}

const generateUnderlineStyles = ({ hoverColor, href, linkColor }: Props) => `
  border-bottom: 2px solid ${linkColor || defaultLinkColor};
  position: relative;
  text-decoration: none;

  &::before {
    background-color: ${hoverColor || defaultHoverColor};
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

export default styled.span`
  ${props => generateUnderlineStyles(props)};
`
