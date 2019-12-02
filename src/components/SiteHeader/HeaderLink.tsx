import classNames from 'classnames'
import Link from 'gatsby-link'
import _ from 'lodash'
import React, { ReactNode } from 'react'
import { Text } from 'rebass/styled-components'
import styled from 'styled-components'

import { HeaderTheme } from 'components/SiteHeader/SiteHeader'
import useHover from 'utils/use-hover'

const StyledHeaderLink = styled(Text)`
  transition: color 0.3s;
`

const getIsActivePath = ({ href, pathname }): boolean =>
  (href === '/' && pathname === '/') ||
  (href !== '/' && _.startsWith(pathname, href))

const getThemeForPathname = (pathname: string): HeaderTheme =>
  _.startsWith(pathname, '/photography') ? HeaderTheme.LIGHT : HeaderTheme.DARK

interface Props {
  children: ReactNode
  className?: string
  href: string
  pathname: string
}

const HeaderLink = (props: Props) => {
  const [isHovered, setIsHovered] = useHover()
  const { children, className, href, pathname } = props
  if (!pathname) {
    return null
  }

  const isActive = getIsActivePath({ href, pathname })
  const headerTheme = getThemeForPathname(pathname)

  return (
    <StyledHeaderLink
      {...setIsHovered}
      as={Link}
      to={href}
      className={classNames(
        'f4 fw3 mv2 ph3 pv2 shadow-none',
        {
          'black-80': isHovered && headerTheme === HeaderTheme.LIGHT,
          'black-80 fw5 b--light-silver':
            isActive && headerTheme === HeaderTheme.LIGHT,
          'light-silver b--light-silver':
            !isActive && headerTheme === HeaderTheme.LIGHT,
          'light-silver b--mid-gray':
            !isActive && headerTheme === HeaderTheme.DARK,
          'white-90': isHovered && headerTheme === HeaderTheme.DARK,
          'white-90 fw4 b--mid-gray':
            isActive && headerTheme === HeaderTheme.DARK,
        },
        className,
      )}
    >
      {children}
    </StyledHeaderLink>
  )
}

export default HeaderLink
