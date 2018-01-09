import styled from 'styled-components'

export const BlurbLink = styled.a`
  text-decoration: none;
  border-bottom: 2px solid rgba(199, 153, 255, 0.7);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: rgba(126, 241, 249, 0.7);
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.2s ease-in-out 0s;
    transition: all 0.2s ease-in-out 0s;
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
