import React from 'react'
import _ from 'lodash'
import Link from 'gatsby-link'

import config from 'gatsby-config'

/**
 * Render a SiteHeader. Size options are 'large' and 'small'. Default to 'small'.
 */
const SiteHeader = () => (
  <h3 className="sans-serif fw2 f3 pa3">
    <Link className="color-inherit no-underline shadow-none" to={'/'}>
      {_.get(config, 'siteMetadata.title')}
    </Link>
  </h3>
)

export default SiteHeader
