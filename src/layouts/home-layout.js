import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { SiteHeader, SiteFooter } from '../components'

import 'prismjs/themes/prism.css'

const HomeLayout = ({ children, location }) => (
  <Fragment>
    <SiteHeader location={location} />
    {children()}
    <SiteFooter />
  </Fragment>
)

HomeLayout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default HomeLayout
