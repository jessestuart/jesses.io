import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Link from 'gatsby-link'

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
    <h3 className={headerClassNames}>
      <Link className="shadow-none flex justify-center items-center" to={href}>
        {children}
      </Link>
    </h3>
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
