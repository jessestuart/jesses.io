import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import {
  ProfileFooter,
  ProfileIntro,
  SiteFooter,
  SiteHeader,
} from '../components'

import 'prismjs/themes/prism.css'

import '../styles/js-tachyons.css'
import styles from './home.module.scss'

class HomeTemplate extends Component {
  render() {
    return (
      <Fragment>
        <div className={styles.vh100}>
          <div className={classNames(styles.navbar, 'bb b--hot-pink')}>
            <SiteHeader />
          </div>
          <div className={styles.baseGrid}>
            <div className={classNames(styles.profileMain)}>
              <ProfileIntro />
              <ProfileFooter />
            </div>
          </div>
        </div>
        <SiteFooter />
      </Fragment>
    )
  }
}

HomeTemplate.propTypes = {
  children: PropTypes.any,
}

export default HomeTemplate
