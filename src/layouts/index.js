import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { SiteHeader, SiteFooter } from '../components'

import 'prismjs/themes/prism.css'

const BaseTemplate = ({ children, location }) => (
  <Fragment>
    <SiteHeader location={location} />
    {children()}
    <SiteFooter />
  </Fragment>
)

BaseTemplate.propTypes = {
  children: PropTypes.any,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default BaseTemplate
