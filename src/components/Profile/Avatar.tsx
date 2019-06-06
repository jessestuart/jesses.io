import classNames from 'classnames'
import Img from 'gatsby-image'
import React from 'react'
import GatsbyImage from 'types/GatsbyImage'

const Avatar = ({ image }: { image?: GatsbyImage | any }) =>
  !image ? null : (
    <Img
      className={classNames('br-100 justify-center mv2 pa0')}
      style={{
        boxShadow: '0 0 12px 12px rgba(40, 40, 40, 0.6)',
      }}
      fluid={image}
    />
  )

export default Avatar
