import React from 'react'

import './styles.scss'

export default function Avatar() {
  const isDev = process.env.NODE_ENV === 'development'
  const pathPrefix = isDev ? '' : __PATH_PREFIX__
  return (
    <img className="js-avatar" src={pathPrefix + '/img/avatar_square.jpg'} />
  )
}
