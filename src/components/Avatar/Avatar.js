import React from 'react'

import styles from './avatar.module.scss'

import avatarImage from '../../../static/img/avatar_square.jpg'
// import placeholder from '../../../static/img/avatar_square.jpg'
// const placeholder = 'http://via.placeholder.com/800x800'

const Avatar = () => <img className={styles.avatar} src={avatarImage} />
export default Avatar
