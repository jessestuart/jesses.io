import React from 'react'
import _ from 'lodash'
import Link from 'gatsby-link'

import config from '../../../gatsby-config'

const SiteHeader = () => (
  <div className="bb b--hot-pink">
    <h3 className="lato fw7 f3 pa3">
      <Link className="color-inherit no-underline shadow-none" to={'/'}>
        {_.get(config, 'siteMetadata.title')}
      </Link>
    </h3>
  </div>
)

export default SiteHeader
