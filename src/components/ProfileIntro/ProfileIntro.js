import React, { Fragment } from 'react'
import classNames from 'classnames'

import { Avatar, ProfileBlurb, ProfileFooter } from 'components'

import styles from './styles.module.scss'

export default function ProfileIntro() {
  return (
    <Fragment>
      <div
        className={classNames(
          'items-center justify-center h-100',
          styles.introWrapper
        )}
      >
        <div className={classNames(styles.avatarContainer)}>
          <Avatar />
        </div>
        <div className={classNames('h-100 tr', styles.blurbContainer)}>
          <ProfileBlurb />
        </div>
        <div className={styles.footerContainer}>
          <ProfileFooter />
        </div>
      </div>
    </Fragment>
  )
}
