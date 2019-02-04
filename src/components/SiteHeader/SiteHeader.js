/* @flow */
import '../../styles/base.css'

import Headroom from 'react-headroom'
import React from 'react'
import _ from 'lodash'

import HeaderLink from './HeaderLink'

type Props = {
  location: {
    pathname: string,
  },
}

const SiteHeader = (props: Props) => {
  const pathname = _.get(this, 'props.location.pathname', '/')
  const isRoot = _.isNil(pathname) || _.eq(pathname, '/')
  return (
    <Headroom>
      <header
        className={`bb b--hot-pink center site-header flex ${
          !isRoot ? 'bw1' : ''
        }`}
        style={{ background: '#282C34' }}
      >
        <div className="w-35-ns flex flex-row center source-sans fw3">
          <HeaderLink className="br b--mid-gray" href={'/'} isActive={isRoot}>
            home
          </HeaderLink>
          <HeaderLink
            className="br b--mid-gray"
            href={'/posts'}
            isActive={pathname.startsWith('/posts')}
          >
            words
          </HeaderLink>
          <HeaderLink
            className="br b--mid-gray"
            href={'/photography'}
            isActive={pathname.startsWith('/photography')}
          >
            pictures
          </HeaderLink>
          <HeaderLink href={'/about'} isActive={pathname.startsWith('/about')}>
            about
          </HeaderLink>
        </div>
      </header>
    </Headroom>
  )
}

export default SiteHeader
