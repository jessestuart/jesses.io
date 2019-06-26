import 'styles/base.css'

import _ from 'lodash'
import React from 'react'
import Headroom from 'react-headroom'

import GatsbyLocation from 'types/GatsbyLocation'

import HeaderLink from './HeaderLink'

interface Props {
  location: GatsbyLocation
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

const SiteHeader = (props: Props) => {
  const pathname: string = _.get(props, 'location.pathname', '/')
  const isRoot: boolean = _.eq(pathname, '/')
  return (
    <Headroom
      className="bg-gray-primary"
      style={{
        MozTransition: 'all 0.7s ease-in-out',
        OTransition: 'all 0.7s ease-in-out',
        WebkitTransition: 'all 0.7s ease-in-out',
        transition: 'all 0.7s ease-in-out',
      }}
    >
      <header
        id="site-header"
        className={`b--hot-pink bb bg-gray-primary center flex pb1 site-header w-100 ${
          !isRoot ? 'bw1' : ''
        }`}
      >
        <ol className="center flex flex-row fw3 mb1 source-sans w-35-ns">
          {Headers.map((header: Header, index: number) => (
            <li key={header.title}>
              <HeaderLink
                className={index === Headers.length - 1 ? '' : 'br b--mid-gray'}
                href={header.href || `/${header.title}`}
                pathname={pathname}
              >
                {header.title}
              </HeaderLink>
            </li>
          ))}
        </ol>
      </header>
    </Headroom>
  )
}

export default SiteHeader
