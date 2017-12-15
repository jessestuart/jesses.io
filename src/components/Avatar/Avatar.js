import React from 'react'

import styles from './avatar.module.scss'
import avatarImage from '../../../static/img/avatar_square.jpg'

const placeholder = 'http://via.placeholder.com/800x800'
// const imagepath = placeholder
const getImagePath = () => {
  const isDev = process.env.NODE_ENV === 'development'
  return avatarImage
  // if (!isDev) { return placeholder
  // }
  // const pathPrefix = isDev ? '' : __PATH_PREFIX__
}

export default function Avatar() {
  return (
    <img
      className={styles.avatar}
      src={avatarImage}
      // src={pathPrefix + '/img/avatar_square.jpg'}
    />
  )
}

// <img className={styles.avatar} src={placeholder} />
