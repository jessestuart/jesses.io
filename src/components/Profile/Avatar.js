import Img from 'gatsby-image'
import React from 'react'
import _ from 'lodash'

import classNames from 'classnames'

const Avatar = ({ image }: { image: * }) => (
  <Img
    className={classNames('br-100 justify-center mv2 pa0')}
    style={{
      boxShadow: '0 0 12px 12px rgba(40, 40, 40, 0.6)',
    }}
    sizes={_.get(image, 'sizes')}
  />
)

export default Avatar
