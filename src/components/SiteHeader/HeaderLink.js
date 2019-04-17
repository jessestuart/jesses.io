/* @flow */
import { Link } from 'gatsby'
import React from 'react'

import classNames from 'classnames'

type Props = {
  children: *,
  className?: *,
  href: *,
  isActive: *,
}

const HeaderLink = ({ children, className, href, isActive = false }: Props) => {
  const headerClassNames: string = classNames(
    'lato f4 ph3 mv2 pv2 flex-auto',
    className,
    {
      'white-90 fw4': isActive,
      'light-silver fw3': !isActive,
    }
  )
  return (
    <ul className={headerClassNames}>
      <Link className="shadow-none flex justify-center items-center" to={href}>
        {children}
      </Link>
    </ul>
  )
}

export default HeaderLink
