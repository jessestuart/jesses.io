import classNames from 'classnames'
import { Link } from 'gatsby'
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
    <ul
      className={classNames('lato f4 ph3 mv2 pv2 flex-auto', className, {
        'light-silver fw3': !isActive,
        'white-90 fw4': isActive,
      })}
    >
      <Link className="shadow-none flex justify-center items-center" to={href}>
        {children}
      </Link>
    </ul>
  )
}

export default HeaderLink
