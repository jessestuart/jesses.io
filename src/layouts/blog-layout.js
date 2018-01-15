import React, { Fragment } from 'react'

import { SiteHeader, SiteFooter } from '../components'

import 'prismjs/themes/prism-tomorrow.css'

const BlogLayout = ({ children, location }) => {
  return (
    <Fragment>
      <SiteHeader location={location} />
      <div className="bg-near-white black-80 flex justify-center flex-body-expand">
        <div className="mw6 mw7-ns lh-copy w-75 w-50-ns center">
          {children()}
        </div>
      </div>
      <SiteFooter theme={SiteFooter.Theme.Dark} />
    </Fragment>
  )
}

export default BlogLayout
