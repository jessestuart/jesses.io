import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { SiteHeader, SiteFooter } from '../components'

import 'prismjs/themes/prism-tomorrow.css'

const BlogLayout = ({ children, location }) => (
  <Fragment>
    <SiteHeader location={location} />
    <div className="bg-near-white black-80 flex justify-center flex-body-expand pv5">
      <div className="mw6 mw7-ns lh-copy center">{children()}</div>
    </div>
    <SiteFooter theme={SiteFooter.Theme.Dark} />
  </Fragment>
)

BlogLayout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
}

export default BlogLayout
