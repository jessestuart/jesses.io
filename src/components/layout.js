/* @flow */
import 'js-tachyons'

import 'typeface-alegreya'
import 'typeface-alegreya-sans'
import 'typeface-lato'
import 'typeface-spectral'

import '../styles/base.css'

import Helmet from 'react-helmet'
import React, { Fragment } from 'react'

import { SiteFooter, SiteHeader } from '../components'
import config from '../../gatsby-config'

const { title, url }: { title: string, url: string } = config.siteMetadata

type Props = {
  children: *,
  location: {
    pathname: string,
  },
}

const Layout = ({ children, location }: Props) => (
  <Fragment>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'jesses.io' },
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
    <main className="flex flex-auto">{children}</main>
    <SiteFooter />
  </Fragment>
)

export default Layout
