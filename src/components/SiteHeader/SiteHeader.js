import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import classNames from 'classnames'
import Headroom from 'react-headroom'
import _ from 'lodash'

import '../../styles/base.css'

const initialState = { isHamburgerMenuEnabled: false }

class SiteHeader extends Component {
  // toggleHamburgerMenu = () => {
  //   const isHamburgerMenuEnabled: boolean = _.get(
  //     this,
  //     'state.isHamburgerMenuEnabled',
  //     false
  //   )
  //   this.setState({
  //     isHamburgerMenuEnabled: !isHamburgerMenuEnabled,
  //   })
  // }

  render() {
    // const { isHamburgerMenuEnabled } = this.state
    const pathname = _.get(this, 'props.location.pathname')
    const isRoot = _.isNil(pathname) || pathname === '/'
    return (
      <Headroom
        style={{
          mozTransition: 'all 0.7s ease-in-out',
          oTransaction: 'all 0.7s ease-in-out',
          transition: 'all 0.7s ease-in-out',
          webkitTranstion: 'all 0.7s ease-in-out',
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
              href={'/blog'}
              isActive={pathname === '/blog'}
            >
              words
            </HeaderLink>
            <HeaderLink
              href={'/photography'}
              isActive={pathname === '/photography'}
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

SiteHeader.state = { ...initialState }

const HeaderLink = ({ children, className, href, isActive }) => {
  const headerClassNames: string = classNames(
    'lato f4 ph3 mv2 pv2 flex-auto',
    className,
    {
      'white-90 fw4': isActive,
      'light-silver fw3': !isActive,
    }
  )
  return (
    <h3 className={headerClassNames}>
      <Link className="shadow-none flex justify-center items-center" to={href}>
        {children}
      </Link>
    </h3>
  )
}

HeaderLink.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
}

HeaderLink.defaultProps = {
  href: '/',
  isActive: false,
}

// const Hamburger = ({ isEnabled, onClick }) => (
//   <button
//     className={classNames('hamburger hamburger--collapse outline-0', {
//       'is-active': isEnabled,
//     })}
//     onClick={onClick}
//     type="button"
//   >
//     <span className="hamburger-box">
//       <span className="hamburger-inner" />
//     </span>
//   </button>
// )

export default SiteHeader
