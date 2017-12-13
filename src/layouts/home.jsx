import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import Avatar from '../components/Avatar'
import SiteHeader from '../components/site-header'

import 'prismjs/themes/prism.css'

import styles from './home.module.scss'

class HomeTemplate extends Component {
  render() {
    console.log({ styles })
    console.log('rendering home layout')
    console.log({ props: this.props })

    return (
      <Fragment>
        <div className={styles.baseGrid}>
          <div className={styles.gridCol10}>
            <SiteHeader />
          </div>
        </div>
        <div className={styles.baseGrid}>
          <div style={{ gridColumn: '2 / 5' }}>
            <Avatar />
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
