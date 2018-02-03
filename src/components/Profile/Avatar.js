import React from 'react'
import classNames from 'classnames'
import Img from 'gatsby-image'
import _ from 'lodash'

const Avatar = ({ image }) => (
  <Img
    className={classNames('br-100 justify-center mv2 pa0 shadow-6')}
    sizes={_.get(image, 'sizes')}
  />
)

export default Avatar
