/* @flow */
import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import _ from 'lodash'

import config from '../../gatsby-config'

import 'js-tachyons'
import '../styles/base.css'

import { SiteFooter, SiteHeader } from '../components'

const title = _.get(config, 'siteMetadata.title')

const Layout = ({ children, location }: Props) => (
  <Fragment>
    <Helmet title={title}>
      <meta itemProp="name" content={title} />
      <meta name="twitter:title" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={config.siteMetadata.siteUrl} />
    </Helmet>
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
