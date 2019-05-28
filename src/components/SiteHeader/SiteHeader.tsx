import '../../styles/base.css'

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
  href?: string
}

const Headers: Header[] = [
  { href: '/', title: 'home' },
  { href: '/posts', title: 'words' },
  { href: '/photography', title: 'pictures' },
  { title: 'about' },
]

const SiteHeader = (props: Props) => {
  const pathname: string = _.get(props, 'location.pathname', '/')
  const isRoot: boolean = _.isNil(pathname) || _.eq(pathname, '/')
  return (
    <Headroom
      className="bg-gray-primary"
      style={{
        MozTransition: 'all 0.7s ease-in-out',
        OTransaction: 'all 0.7s ease-in-out',
        Transition: 'all 0.7s ease-in-out',
        WebkitTranstion: 'all 0.7s ease-in-out',
      }}
    >
      <header
        className={`bb b--hot-pink center site-header flex w-100 bg-gray-primary ${
          !isRoot ? 'bw1' : ''
        }`}
      >
        <div className="w-35-ns flex flex-row center source-sans fw3">
          {Headers.map((header: Header, index: number) => (
            <HeaderLink
              className={index === Headers.length - 1 ? '' : 'br b--mid-gray'}
              key={header.title}
              href={header.href || `/${header.title}`}
              pathname={pathname}
            >
              {header.title}
            </HeaderLink>
          ))}
        </div>
      </header>
    </Headroom>
  )
}

export default SiteHeader
