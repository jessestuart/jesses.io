import React from 'react'

import styles from './avatar.module.scss'

// const placeholder = 'http://via.placeholder.com/800x800'

export default function Avatar() {
  const isDev = process.env.NODE_ENV === 'development'
  const pathPrefix = isDev ? '' : __PATH_PREFIX__
  return (
    <img
      className={styles.avatar}
      src={pathPrefix + '/img/avatar_square.jpg'}
    />
  )
}

// <img className={styles.avatar} src={placeholder} />
