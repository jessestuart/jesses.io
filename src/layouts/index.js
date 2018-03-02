/* @flow */
import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import config from '../../gatsby-config'

import 'js-tachyons'
import '../styles/base.css'

import { SiteFooter, SiteHeader } from '../components'

const { title, url }: { title: string, url: string } = config.siteMetadata

const Layout = ({ children, location }: Props) => (
  <Fragment>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'jessestuart.com' },
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
        },
        { itemProp: 'name', content: title },
        { name: 'twitter:title', content: title },
        { property: 'og:title', content: title },
        { property: 'og:url', content: url },
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
        },
      ]}
    />
    <SiteHeader location={location} />
    <div className="flex-body-expand">{children()}</div>
    <SiteFooter />
  </Fragment>
)

type Props = {
  children: any,
  location: {
    pathname: String,
  },
}

export default Layout
