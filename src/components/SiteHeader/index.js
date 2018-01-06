import React, { Fragment, Component } from 'react'
import _ from 'lodash'
import Link from 'gatsby-link'
import classNames from 'classnames'

import config from '../../../gatsby-config'
import '../../styles/hamburgers/hamburgers.scss'

class SiteHeader extends Component {
  constructor() {
    super()
    this.initialState = {
      isHamburgerMenuEnabled: false,
    }
  }

  toggleHamburgerMenu() {
    this.setState({
      isHamburgerMenuEnabled: !this.state.isHamburgerMenuEnabled,
    })
  }

  render() {
    const isHamburgerMenuEnabled = this.state
    return (
      <Fragment>
        <div className="bb b--hot-pink">
          <h3 className="lato fw7 f3 pa3">
            <Link className="color-inherit no-underline shadow-none" to={'/'}>
              {_.get(config, 'siteMetadata.title')}
            </Link>
          </h3>
        </div>
        <button
          className={classNames('hamburger hamburger--collapse', {
            'is-active': isHamburgerMenuEnabled,
          })}
          onClick={this.toggleHamburgerMenu}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </Fragment>
    )
  }
}

export default SiteHeader
