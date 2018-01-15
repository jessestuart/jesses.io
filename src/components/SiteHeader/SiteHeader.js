import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Headroom from 'react-headroom'
import _ from 'lodash'

import HeaderLink from './HeaderLink'

import '../../styles/base.css'

const initialState = { isHamburgerMenuEnabled: false }

class SiteHeader extends Component {
  render() {
    const pathname = _.get(this, 'props.location.pathname')
    const isRoot = _.isNil(pathname) || pathname === '/'
    return (
      <Headroom
        style={{
          MozTransition: 'all 0.7s ease-in-out',
          OTransaction: 'all 0.7s ease-in-out',
          Transition: 'all 0.7s ease-in-out',
          WebkitTranstion: 'all 0.7s ease-in-out',
        }}
      >
        <header
          className={classNames('bb b--hot-pink center site-header flex', {
            bw1: !isRoot,
          })}
          style={{ background: '#282C34' }}
        >
          <div className="w-35-ns flex flex-row center source-sans fw3">
            <HeaderLink className="br b--mid-gray" href={'/'} isActive={isRoot}>
              about
            </HeaderLink>
            <HeaderLink
              className="br b--mid-gray"
              href={'/posts'}
              isActive={pathname.startsWith('/posts')}
            >
              words
            </HeaderLink>
            <HeaderLink
              href={'/photography'}
              isActive={pathname.startsWith('/photography')}
            >
              pictures
            </HeaderLink>
          </div>
        </header>
      </Headroom>
    )
  }
}

SiteHeader.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

SiteHeader.defaultProps = {
  location: {
    pathname: '/',
  },
}

SiteHeader.state = { ...initialState }

export default SiteHeader
