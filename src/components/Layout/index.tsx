import _ from 'lodash'
import React, { ReactNode } from 'react'
import Helmet from 'react-helmet'
import { Flex } from 'rebass/styled-components'
import { ThemeProvider } from 'styled-components'
import { useThemeUI } from 'theme-ui'

import 'js-tachyons'
import 'typeface-alegreya-sans'
import 'typeface-alegreya-sans-sc'
import 'typeface-fira-mono'
import 'typeface-lato'
import 'typeface-spectral'

import 'styles/base.css'

import GatsbyLocation from 'types/GatsbyLocation'

import { SiteFooter, SiteHeader } from 'components'
import config from '../../../gatsby-config'

const title: string = _.get(config, 'siteMetadata.title')
const url: string = _.get(config, 'siteMetadata.url')

const viewportContent =
  'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'

const HELMET_META = [
  { content: viewportContent, name: 'viewport' },
  { itemProp: 'name', content: title },
  { name: 'description', content: 'jesses.io' },
  { name: 'twitter:title', content: title },
  { property: 'og:title', content: title },
  { property: 'og:url', content: url },
]

interface Props {
  children: ReactNode
  location: GatsbyLocation
}

const Layout = ({ children, location }: Props) => {
  const context = useThemeUI()
  const { theme } = context
  return (
    <ThemeProvider theme={theme}>
      <Helmet title={title} meta={HELMET_META} />
      <SiteHeader location={location} />
      <Flex as="main" flex="1 1 auto">
        {children}
      </Flex>
      <SiteFooter />
    </ThemeProvider>
  )
}

export default Layout
