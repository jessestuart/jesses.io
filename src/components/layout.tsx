import 'js-tachyons'

import 'typeface-alegreya'
import 'typeface-alegreya-sans'
import 'typeface-lato'
import 'typeface-spectral'

import '../styles/base.css'

import React from 'react'
import Helmet from 'react-helmet'

import _ from 'lodash'

import config from '../../gatsby-config'
import { SiteFooter, SiteHeader } from '../components'

const title: string = _.get(config, 'siteMetadata.title')
const url: string = _.get(config, 'siteMetadata.url')

const HELMET_META = Object.freeze([
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
])

interface Props {
  children: any
  location: {
    pathname: string
  }
}

const Layout = ({ children, location }: Props) => {
  return (
    <>
      <Helmet title={title} meta={HELMET_META} />
      <SiteHeader location={location} />
      <main className="flex flex-auto">{children}</main>
      <SiteFooter />
    </>
  )
}

export default Layout
