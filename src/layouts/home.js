import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { ProfileFooter, ProfileIntro, SiteHeader } from '../components'

import 'prismjs/themes/prism.css'

import '../styles/tachyons.css'
import styles from './home.module.scss'

class HomeTemplate extends Component {
  render() {
    return (
      <Fragment>
        <div className={styles.vh100}>
          <div className={styles.baseGrid}>
            <div className={classNames(styles.gridCol12, 'bb b--hot-pink')}>
              <SiteHeader />
            </div>
          </div>
          <div className={styles.baseGrid}>
            <ProfileIntro />
            <ProfileFooter />
          </div>
        </div>
      </Fragment>
    )
  }
}

HomeTemplate.propTypes = {
  children: PropTypes.any,
}

export default HomeTemplate
