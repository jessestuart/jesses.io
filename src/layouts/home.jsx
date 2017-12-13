import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// import Avatar from '../components/Avatar'
// import SiteHeader from '../components/site-header'
import { Avatar, SiteHeader } from '../components'

import 'tachyons'
import 'prismjs/themes/prism.css'

import styles from './home.module.scss'

class HomeTemplate extends Component {
  render() {
    return (
      <Fragment>
        <div className={styles.vh100}>
          <div className={styles.baseGrid}>
            <div className={classNames(styles.gridCol12, 'bb b--dark-pink')}>
              <SiteHeader />
            </div>
          </div>
          <div className={styles.baseGrid}>
            <div className={styles.avatarWrapper}>
              <Avatar />
            </div>
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
