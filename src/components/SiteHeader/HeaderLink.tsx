import classNames from 'classnames'
import Link from 'gatsby-link'
import _ from 'lodash'
import React, { ReactNode } from 'react'
import styled from 'styled-components'

import { HeaderTheme } from 'components/SiteHeader/SiteHeader'
import Theme from 'styles/Theme'
// import StyledLink from 'components/StyledLink/StyledLink'

const StyledHeaderLink = styled(Link)`
  transition: all 0.5s;
  &:hover {
    color: ${Theme.colors.textLight};
  }
`

interface Props {
  children?: ReactNode
  className?: string
  href: string
  isActive?: boolean
  pathname?: string
}

const getIsActive = ({ href, pathname }): boolean =>
  (href === '/' && pathname === '/') ||
  (href !== '/' && _.startsWith(pathname, href))

const getThemeForPathname = (pathname: string): HeaderTheme =>
  _.startsWith(pathname, '/photography') ? HeaderTheme.LIGHT : HeaderTheme.DARK

const HeaderLink = (props: Props) => {
  const { children, className, href, pathname } = props
  if (!pathname) {
    return null
  }
  const isActive = getIsActive({ href, pathname })
  const theme = getThemeForPathname(pathname)

  return (
    <StyledHeaderLink
      className={classNames(
        'b--mid-gray f4 fw3 mv2 ph3 pv2 shadow-none',
        {
          'black-90 fw5': isActive && theme === HeaderTheme.LIGHT,
          'light-silver': !isActive && theme === HeaderTheme.LIGHT,
          'light-silver fw3': !isActive && theme === HeaderTheme.DARK,
          'white-90 fw4': isActive && theme === HeaderTheme.DARK,
        },
        className,
      )}
      to={href}
    >
      {children}
    </StyledHeaderLink>
  )
}

export default HeaderLink
