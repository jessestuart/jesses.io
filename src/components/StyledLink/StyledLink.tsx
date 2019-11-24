import { Link } from 'gatsby'
import _ from 'lodash'
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import colors from 'utils/colors'

/**
 * Is a given link "external" -- i.e., should it use Gatby's optimized `<Link>`
 * component or a plain anchor tag?
 */
export const isExternalLinkPredicate: (href: string) => boolean = (
  href: string,
) =>
  _.some([
    _.startsWith(href, 'http'),
    _.startsWith(href, 'mailto'),
    _.startsWith(href, '#'),
    _.endsWith(href, 'pdf'),
  ])

interface Props {
  // ===============
  // Required props:
  // ===============
  children: ReactNode | string
  // ===============
  // Optional props:
  // ===============
  className?: string
  hoverColor?: string
  href?: string
  linkColor?: string
}

/**
 * Fancy-looking component for links or otherwise accented text, with a subtle
 * but delightful hover animation.
 * This can be rendered one of three different ways depending on the input props:
 * 1) "Normal" link to another page on the site. This uses Gatsby's `Link`
 *    component for near-instant loading.
 * 2) "External" links to outside URL's. Uses regular anchor tags.
 * 3) Fraudsters that don't link anywhere, but still look snazzy.
 */
const StyledLink = (props: Props) => {
  const { href, children, ...rest } = props
  // Case #1: no link provided.
  // Just render as a fancypants `<span>`.
  if (!href) {
    return <span {...rest}>{children}</span>
  }

  // Slightly janky hack to prevent Gatsby from complaining
  // about `<Link>`'ing to external resources.
  // TODO: There must be a way to programmatically branch on
  //       this... right?
  const isExternalLink = isExternalLinkPredicate(href)
  // Case #2: link is external.
  if (isExternalLink) {
    return <a {..._.pick(props, ['href', 'className'])}>{children}</a>
  }

  // Case #1: link is internal.
  return (
    <Link to={href} {...rest}>
      {children}
    </Link>
  )
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
