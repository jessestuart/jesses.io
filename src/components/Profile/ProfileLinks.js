import styled from 'styled-components'

export const BlurbLink = styled.a`
  text-decoration: none;
  border-bottom: 2px solid rgba(199, 153, 255, 0.7);
  position: relative;

  &::before {
    background-color: rgba(253, 82, 112, 0.8);
    bottom: -2px;
    content: '';
    height: 2px;
    left: 0;
    position: absolute;
    transform: scaleX(0);
    transition: all 0.2s ease-in-out 0s;
    visibility: hidden;
    width: 100%;
  }
  &:hover:before {
    transform: scaleX(1);
    visibility: visible;
  }
  &.no-slide:hover:before {
    visibility: hidden;
  }
  &.no-slide:hover {
    color: #f63f6c;
  }
`
