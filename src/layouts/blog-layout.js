import React, { Fragment } from 'react'

import { SiteHeader, SiteFooter } from '../components'

import 'prismjs/themes/prism.css'

const BlogLayout = ({ children, location }) => {
  return (
    <Fragment>
      <SiteHeader location={location} />
      <div className="bg-light-gray black-80 pa4 bb b--purple bw1 flex justify-center flex-body-expand">
        <div className="mw6 mw7-ns lh-title">{children()}</div>
      </div>

      <SiteFooter theme={SiteFooter.Theme.Dark} />
    </Fragment>
  )
}

export default BlogLayout
