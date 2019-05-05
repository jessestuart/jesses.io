import classNames from 'classnames'
import { Link } from 'gatsby'
import React from 'react'

interface Props {
  children: any
  className?: string
  href: string
  isActive?: boolean
}

const HeaderLink = ({ children, className, href, isActive = false }: Props) => (
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

export default HeaderLink
