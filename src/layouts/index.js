import React, { Fragment } from 'react'

import { SiteHeader, SiteFooter } from '../components'

import 'prismjs/themes/prism.css'

const Template = ({ children, location }) => {
  // console.log({ children, location })
  return (
    <Fragment>
      <SiteHeader />
      {children()}
      <SiteFooter />
    </Fragment>
  )
}

export default Template
