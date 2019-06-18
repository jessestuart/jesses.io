import classNames from 'classnames'
import Img, { FluidObject } from 'gatsby-image'
import React from 'react'

const Avatar = ({ image }: { image?: FluidObject }) =>
  !image ? null : (
    <Img
      className={classNames('br-100 justify-center mv2 pa0')}
      loading="eager"
      style={{
        boxShadow: '0 0 12px 12px rgba(40, 40, 40, 0.6)',
      }}
      fluid={image}
    />
  )

export default Avatar
