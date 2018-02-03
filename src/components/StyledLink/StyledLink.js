import styled from 'styled-components'
import colors from '../../utils/colors'
import color from 'onecolor'

const defaultHoverColor = color(colors.secondary.light7)
  .alpha(0.8)
  .cssa()

const defaultLinkColor = color(colors.primary.main)
  .alpha(0.8)
  .cssa()

export const generateUnderlineStyles = ({ linkColor, hoverColor }) => `
  text-decoration: none;
  border-bottom: 2px solid ${linkColor || defaultLinkColor};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: ${hoverColor || defaultHoverColor};
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.25s ease-in-out 0s;
    transition: all 0.25s ease-in-out 0s;
  }
  &:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
`

export default styled.span`
  ${props =>
    generateUnderlineStyles({
      linkColor: props.linkColor,
      hoverColor: props.hoverColor,
    })};
`
