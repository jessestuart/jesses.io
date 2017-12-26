import React, { Fragment } from 'react'
import classNames from 'classnames'

import { Avatar, ProfileBlurb, ProfileFooter } from 'components'

import styles from './styles.module.scss'

export default function ProfileIntro() {
  return (
    <div
      className={classNames(
        'items-center justify-center pv4',
        styles.introWrapper
      )}
    >
      <div
        className={classNames('center mw-100-ns mw-50', styles.avatarContainer)}
      >
        <Avatar />
      </div>
      <div className={classNames('tc tr-ns ph2', styles.blurbContainer)}>
        <ProfileBlurb />
      </div>
      <div className={styles.footerContainer}>
        <ProfileFooter />
      </div>
    </div>
  )
}
