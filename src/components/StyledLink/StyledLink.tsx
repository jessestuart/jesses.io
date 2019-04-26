import { Link } from 'gatsby'
import _ from 'lodash'
import React, { Component } from 'react'
import styled from 'styled-components'

import colors from '../../utils/colors'

interface Props {
  children: any
  className?: string
  linkColor?: string
  hoverColor?: string
  href?: string
}

interface StyledLinkProps {
  hoverColor?: string
  linkColor?: string
}

const generateUnderlineStyles = ({
  hoverColor = colors.defaultHover,
  linkColor = colors.defaultLink,
}: StyledLinkProps) => `
  border-bottom: 2px solid ${linkColor};
  position: relative;
  text-decoration: none;

  &::before {
    background-color: ${hoverColor};
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
  ${(props: Props) => generateUnderlineStyles(props)};
`

const StyledAnchorWrapper = styled.a`
  ${(props: Props) => generateUnderlineStyles(props)};
`

export default class StyledLink extends Component<Props> {
  public render() {
    const { children, href, ...rest } = this.props
    // Slightly janky hack to prevent gatsby from complaining
    // about `<Link>`'ing to external resources.
    // TODO: There must be a way to programmatically branch on
    //       this... right?
    if (
      _.startsWith(href, 'http') ||
      _.startsWith(href, 'mailto') ||
      _.endsWith(href, 'pdf')
    ) {
      return (
        <StyledAnchorWrapper {...this.props}>{children}</StyledAnchorWrapper>
      )
    }
    return href ? (
      <Link to={href}>
        <StyledLinkWrapper {...rest}>{children}</StyledLinkWrapper>
      </Link>
    ) : (
      <StyledLinkWrapper {...rest}>{children}</StyledLinkWrapper>
    )
  }
}
