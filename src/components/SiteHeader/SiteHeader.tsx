import 'styles/base.css'

import classNames from 'classnames'
import _ from 'lodash'
import React, { Fragment } from 'react'
import Headroom from 'react-headroom'
import { Flex, Heading } from 'rebass/styled-components'

import HeaderLink from 'components/SiteHeader/HeaderLink'
import GatsbyLocation from 'types/GatsbyLocation'

export enum HeaderTheme {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
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

  const theme: HeaderTheme = _.startsWith(pathname, '/photography')
    ? HeaderTheme.LIGHT
    : HeaderTheme.DARK

  const Wrapper = theme === HeaderTheme.DARK ? Headroom : Fragment

  return (
    <Wrapper>
      <Heading
        as="header"
        id="site-header"
        fontFamily="body"
        className={classNames('bb flex justify-center items-center', {
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
              className={index === Headers.length - 1 ? '' : 'br b--mid-gray'}
              href={header.href || `/${header.title}`}
              pathname={pathname}
            >
              {header.title}
            </HeaderLink>
          ))}
        </Flex>
      </Heading>
    </Wrapper>
  )
}

export default SiteHeader
