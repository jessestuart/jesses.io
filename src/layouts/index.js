import React from 'react'
import PropTypes from 'prop-types'

import { SiteHeader, SiteFooter } from '../components'

import 'prismjs/themes/prism.css'

const BaseTemplate = ({ children, location }) => (
  <div className="moon-gray bg-gray-primary">
    <SiteHeader location={location} />
    <div className="w-100 flex justify-center flex-body-expand">
      {children()}
    </div>
    <SiteFooter />
  </div>
)

BaseTemplate.propTypes = {
  children: PropTypes.any,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default BaseTemplate
