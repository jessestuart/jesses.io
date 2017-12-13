import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import includes from 'lodash/includes'

import './style.scss'

function SiteNavi(props) {
  const { location, title } = props
  return (
    <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bg-navbar">
      <Link className="text-center" to="/">
        <h1 className="navbar-brand mb-0">{title}</h1>
      </Link>
      <div className="navbar-nav-scroll">
        <ul className="navbar-nav bd-navbar-nav flex-row">
          <li
            className={
              includes(location.pathname, '/photography')
                ? 'nav-item active'
                : 'nav-item'
            }
          >
            <Link className="nav-link" to={`${location.pathname}#`}>
              Photography
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
    </nav>
  )
}

SiteNavi.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string,
}

SiteNavi.defaultProps = {
  title: '',
}

export default SiteNavi
