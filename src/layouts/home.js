import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { ProfileIntro, SiteHeader } from '../components'

import 'prismjs/themes/prism.css'

import 'tachyons-colors'
import styles from './home.module.scss'

class HomeTemplate extends Component {
  render() {
    return (
      <>
        <div className={styles.vh100}>
          <div className={styles.baseGrid}>
            <div className={classNames(styles.gridCol12, 'bb b--hot-pink')}>
              <SiteHeader />
            </div>
          </div>
          <div className={classNames(styles.baseGrid, styles.gridRow10)}>
            <ProfileIntro />
          </div>
        </div>
      </>
    )
  }
}

HomeTemplate.propTypes = {
  children: PropTypes.any,
}

export default HomeTemplate
