import classNames from 'classnames'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import React from 'react'

interface Props {
  children: any
  href: string

  className?: string
  isActive?: boolean
}

const HeaderLink = ({
  children,
  className,
  href = '/',
  isActive = false,
}: Props) => {
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
