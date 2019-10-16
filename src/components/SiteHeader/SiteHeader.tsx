import 'styles/base.css'

import _ from 'lodash'
import React from 'react'
import Headroom from 'react-headroom'
import classNames from 'classnames'
import { Flex, Heading } from 'rebass/styled-components'

import GatsbyLocation from 'types/GatsbyLocation'

import HeaderLink from './HeaderLink'

export enum HeaderTheme {
  DARK,
  LIGHT,
}

interface Header {
  title: string
  href: string
}

const Headers: Header[] = [
  { href: '/', title: 'home' },
  { href: '/posts', title: 'words' },
  { href: '/photography', title: 'pictures' },
  { href: '/about', title: 'about' },
]

const SiteHeader = (props: { location: GatsbyLocation }) => {
  const pathname: string = _.get(props, 'location.pathname', '/')
  const isRoot: boolean = _.eq(pathname, '/')

  const theme = _.startsWith(pathname, '/photography')
    ? HeaderTheme.LIGHT
    : HeaderTheme.DARK

  return (
    <Headroom
      style={{
        MozTransition: 'all 0.7s ease-in-out',
        OTransition: 'all 0.7s ease-in-out',
        WebkitTransition: 'all 0.7s ease-in-out',
        transition: 'all 0.7s ease-in-out',
      }}
    >
      <Heading
        as="header"
        id="site-header"
        alignItems="center"
        width="100%"
        className={classNames('bb center flex justify-center ', {
          'bg-gray-primary b--hot-pink': theme === HeaderTheme.DARK,
          'bg-near-white b--black-10': theme === HeaderTheme.LIGHT,
          bw1: !isRoot,
        })}
        style={{
          transition: 'all 0.5s ease-in-out',
        }}
      >
        <Flex flexDirection="row" className="gray-primary fw3 w-35-ns">
          {Headers.map((header: Header, index: number) => (
            <HeaderLink
              key={header.href}
              className={index === Headers.length - 1 ? '' : 'br b--moon-grey'}
              href={header.href || `/${header.title}`}
              pathname={pathname}
            >
              {header.title}
            </HeaderLink>
          ))}
        </Flex>
      </Heading>
    </Headroom>
  )
}

export default SiteHeader
