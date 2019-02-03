/* @flow */
import Img from 'gatsby-image'
import React from 'react'

import classNames from 'classnames'

const Avatar = ({ image }: { image: * }) =>
  image ? (
    <Img
      className={classNames('br-100 justify-center mv2 pa0')}
      style={{
        boxShadow: '0 0 12px 12px rgba(40, 40, 40, 0.6)',
      }}
      fluid={image}
    />
  ) : null

export default Avatar
