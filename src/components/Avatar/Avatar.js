import React from 'react'
import classNames from 'classnames'

import styles from './avatar.module.scss'

import avatarImage from '../../../static/img/avatar_square.jpg'

const Avatar = () => (
  <img
    className={classNames('flex justify-center ma0 pa0', styles.avatar)}
    src={avatarImage}
  />
)

export default Avatar
