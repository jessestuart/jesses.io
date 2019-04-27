import { Link } from 'gatsby'
import _ from 'lodash'
import React, { Component } from 'react'
import styled from 'styled-components'

import colors from '../../utils/colors'

interface Props {
  children: any
  className?: string
  hoverColor?: string
  href?: string
  linkColor?: string
}

class StyledLink extends Component<Props> {
  public render() {
    const { children, href, ...rest } = this.props
    // Slightly janky hack to prevent gatsby from complaining
    // about `<Link>`'ing to external resources.
    // TODO: There must be a way to programmatically branch on
    //       this... right?
    const isExternalLink =
      _.startsWith(href, 'http') ||
      _.startsWith(href, 'mailto') ||
      _.endsWith(href, 'pdf')

    if (isExternalLink) {
      return <a {..._.pick(this.props, ['href', 'className'])}>{children}</a>
    }

    return href ? (
      <Link to={href} {...rest}>
        {children}
      </Link>
    ) : (
      <span {...rest}>{children}</span>
    )
  }
}

export default styled(StyledLink)`
  border-bottom: 2px solid ${props => props.linkColor || colors.defaultLink};
  position: relative;
  text-decoration: none;

  &::before {
    background-color: ${props => props.hoverColor || colors.defaultHover};
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
