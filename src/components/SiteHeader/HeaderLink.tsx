import classNames from 'classnames'
import Link from 'gatsby-link'
import _ from 'lodash'
import React, { ReactNode } from 'react'

import { HeaderTheme } from 'components/SiteHeader/SiteHeader'

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

const HeaderLink = ({ children, className, href, pathname }: Props) => {
  const isActive = getIsActive({ href, pathname })
  const theme = _.startsWith(pathname, '/photography')
    ? HeaderTheme.LIGHT
    : HeaderTheme.DARK
  return (
    <Link
      className={classNames(
        'shadow-none lato f4 ph3 mv2 pv2 light-silver fw3',
        className,
        {
          'light-silver': !isActive && theme === HeaderTheme.LIGHT,
          'black-90 fw5': isActive && theme === HeaderTheme.LIGHT,
          'light-silver fw3': !isActive && theme === HeaderTheme.DARK,
          'white-90 fw4': isActive && theme === HeaderTheme.DARK,
        },
      )}
      to={href}
    >
      {children}
    </Link>
  )
}

export default HeaderLink
