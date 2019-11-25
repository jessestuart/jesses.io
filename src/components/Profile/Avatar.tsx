import Img, { FluidObject } from 'gatsby-image'
import React from 'react'

interface Props {
  image: FluidObject
}

const Avatar = ({ image }: Props) =>
  !image ? null : (
    <Img
      className="br-100 justify-center mv2 pa0"
      loading="eager"
      style={{
        boxShadow: '0 0 12px 12px rgba(40, 40, 40, 0.6)',
      }}
      fluid={image}
    />
  )

// const Avatar = ({ image }: Props) => (
//   <StyledImg
//     className="br-100 shadow-3"
//     padding={0}
//     justifyContent="center"
//     my={2}
//     loading="eager"
//     fluid={image}
//   />
// )

export default Avatar
