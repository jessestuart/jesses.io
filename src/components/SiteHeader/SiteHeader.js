/* @flow */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import classNames from 'classnames'
import Headroom from 'react-headroom'

import '../../styles/base.css'

<<<<<<< HEAD
<<<<<<< HEAD
import '../../styles/js-tachyons.css'
import '../../styles/hamburgers/hamburgers.scss'
=======
import './site-header.css'
>>>>>>> 22c978a... [commit message skipped]

=======
>>>>>>> 0685726... [ui] Add twemojis as React components.
const initialState = { isHamburgerMenuEnabled: false }

type Props = {
  location: {
    pathname: string,
  },
}

class SiteHeader extends Component<Props> {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }

  static state = { ...initialState }

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
    const isRoot = location.pathname === '/'
    return (
      <Headroom>
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
              isActive={location.pathname === '/blog'}
            >
              words
            </HeaderLink>
            <HeaderLink href={'/photography'} isActive={false}>
              pictures
            </HeaderLink>
            {/* <HeaderLink href={'/'} isActive={true}>
              <Hamburger />
            </HeaderLink> */}
          </div>
        </header>
      </Headroom>
    )
  }
}

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
