import React from 'react'
import classNames from 'classnames'

import { Avatar, ProfileBlurb, ProfileFooter } from 'components'

import styles from './styles.module.scss'

export default function ProfileIntro() {
  return (
    <div
      className={classNames('items-center justify-center', styles.introWrapper)}
    >
      <div className={classNames(styles.avatarContainer)}>
        <Avatar />
      </div>
      <div className={classNames('tc tr-l', styles.blurbContainer)}>
        <ProfileBlurb />
      </div>
      <div className={styles.footerContainer}>
        <ProfileFooter />
      </div>
    </div>
  )
}
