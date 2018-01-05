import React, { Component } from 'react'
import _ from 'lodash'
import Link from 'gatsby-link'
import classNames from 'classnames'

import config from '../../../gatsby-config'
import '../../styles/js-tachyons.css'
import '../../styles/hamburgers/hamburgers.scss'

const initialState = { isHamburgerMenuEnabled: false }

class SiteHeader extends Component {
  state = { ...initialState }

  toggleHamburgerMenu = () => {
    this.setState({
      isHamburgerMenuEnabled: !this.state.isHamburgerMenuEnabled,
    })
  }

  render() {
    const { isHamburgerMenuEnabled } = this.state
    return (
      <div
        className="bb b--hot-pink w-100 center"
        style={{ background: '#282C34' }}
      >
        <div className="w-50 flex flex-row">
          <HeaderLink href={'/'} isActive={true}>
            about
          </HeaderLink>
          <HeaderLink href={'/'} isActive={true}>
            words
          </HeaderLink>
          <HeaderLink href={'/'} isActive={true}>
            pictures
          </HeaderLink>
          <HeaderLink href={'/'} isActive={true}>
            <Hamburger />
          </HeaderLink>
        </div>
      </div>
    )
  }
}

const HeaderLink = ({ children, href, isActive }) => {
  return (
    <h3 className="lato fw7 f4 pa3 flex-auto">
      <Link
        className="color-inherit no-underline shadow-none flex justify-center items-center"
        to={href}
      >
        {children}
      </Link>
    </h3>
  )
}

const Hamburger = ({ isEnabled, onClick }) => (
  <button
    className={classNames('hamburger hamburger--collapse outline-0', {
      'is-active': isEnabled,
    })}
    onClick={onClick}
    type="button"
  >
    <span className="hamburger-box">
      <span className="hamburger-inner" />
    </span>
  </button>
)

export default SiteHeader
