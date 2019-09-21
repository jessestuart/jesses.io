import classNames from 'classnames'
import Link from 'gatsby-link'
import _ from 'lodash'
import React, { ReactNode } from 'react'

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
  return (
    <Link
      className={classNames(
        'shadow-none flex justify-center items-center lato f4 ph3 mv2 pv2 flex-auto light-silver fw3',
        className,
        {
          'light-silver fw3': !isActive,
          'white-90 fw4': isActive,
        },
      )}
      to={href}
    >
      {children}
    </Link>
  )
}

export default HeaderLink
