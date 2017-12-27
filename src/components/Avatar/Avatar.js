import React from 'react'
import classNames from 'classnames'

import avatarImage from '../../../static/img/avatar_square.jpg'

const Avatar = () => (
  <img
    className={classNames('br-100 flex justify-center mv2 pa0 shadow-6')}
    src={avatarImage}
  />
)

export default Avatar
