import classNames from 'classnames'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import React from 'react'

const HeaderLink = ({ children, className, href, isActive }) => {
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

HeaderLink.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
}

HeaderLink.defaultProps = {
  href: '/',
  isActive: false,
}

export default HeaderLink
