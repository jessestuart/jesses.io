import { Link } from 'gatsby'
import React, { Component } from 'react'

import _ from 'lodash'
import styled from 'styled-components'

import colors from '../../utils/colors'

interface Props {
  className?: string
  children?: any
  linkColor?: string
  hoverColor?: string
  href?: string
}

const generateUnderlineStyles = ({ hoverColor, linkColor }) => `
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

const StyledLinkWrapper = styled.span`
  ${(props: Props) =>
    generateUnderlineStyles({
      hoverColor: props.hoverColor,
      linkColor: props.linkColor,
    })};
`

const StyledAnchorWrapper = styled.a`
  ${(props: Props) =>
    generateUnderlineStyles({
      hoverColor: props.hoverColor,
      linkColor: props.linkColor,
    })};
`

export class StyledLink extends Component<Props> {
  public render() {
    const { children, href } = this.props
    if (_.startsWith(href, 'http') || _.startsWith(href, 'mailto')) {
      return (
        <StyledAnchorWrapper {...this.props}>{children}</StyledAnchorWrapper>
      )
    }
    return (
      <Link to={href}>
        <StyledLinkWrapper {...this.props}>{children}</StyledLinkWrapper>
      </Link>
    )
  }
}

export default StyledLink
