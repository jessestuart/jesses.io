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
      <div className="bb b--hot-pink w-100 flex flex-row">
        <h3 className="lato fw7 f3 pa3 flex-auto">
          <Link className="color-inherit no-underline shadow-none" to={'/'}>
            {_.get(config, 'siteMetadata.title')}
          </Link>
        </h3>
        <button
          className={classNames('hamburger hamburger--collapse outline-0', {
            'is-active': isHamburgerMenuEnabled,
          })}
          onClick={this.toggleHamburgerMenu}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </div>
    )
  }
}

export default SiteHeader
