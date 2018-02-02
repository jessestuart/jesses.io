import styled from 'styled-components'

const defaultLinkColor = 'rgba(199, 153, 255, 0.7)'
const defaultHoverColor = 'rgba(253, 82, 112, 0.7)'

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
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }
  &:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
  &.no-slide:hover:before {
    visibility: hidden;
  }
  &.no-slide:hover {
    color: #7ef1f9;
  }
`

export default styled.span`
  ${props =>
    generateUnderlineStyles({
      linkColor: props.linkColor,
      hoverColor: props.hoverColor,
    })};
`
