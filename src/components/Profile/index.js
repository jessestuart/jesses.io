import React from 'react'
import classNames from 'classnames'

import Avatar from './Avatar'
import ProfileBlurb from './ProfileBlurb'
import ProfileFooter from './ProfileFooter'

import styles from './profile.module.scss'

const Profile = () => (
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
    <div className={classNames('bt b--light-silver', styles.footerContainer)}>
      <ProfileFooter />
    </div>
  </div>
)

export default Profile
