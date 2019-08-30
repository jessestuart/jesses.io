import 'js-tachyons'

import 'typeface-alegreya-sans'
import 'typeface-alegreya-sans-sc'
import 'typeface-lato'
import 'typeface-spectral'

import 'styles/base.css'

import _ from 'lodash'
import React, { ReactNode } from 'react'
import Helmet from 'react-helmet'

import { SiteFooter, SiteHeader } from 'components'
import GatsbyLocation from 'types/GatsbyLocation'
import { useSiteMetadata } from 'utils/hooks'

const viewportContent =
  'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'

const getHelmetMeta = _.memoize(({ title, url }) => {
  return [
    { content: viewportContent, name: 'viewport' },
    { itemProp: 'name', content: title },
    { name: 'description', content: 'jesses.io' },
    { name: 'twitter:title', content: title },
    { property: 'og:title', content: title },
    { property: 'og:url', content: url },
  ]
})

interface Props {
  children: ReactNode
  location: GatsbyLocation
}

const Layout = ({ children, location }: Props) => {
  const { title, url } = useSiteMetadata()
  return (
    <>
      <Helmet title={title} meta={getHelmetMeta({ title, url })} />
      <SiteHeader location={location} />
      <main className="flex flex-auto">{children}</main>
      <SiteFooter />
    </>
  )
}

export default Layout
