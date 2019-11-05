import { FluidObject } from 'gatsby-image'
import React from 'react'

import { StyledImg } from 'components'

interface Props {
  image: FluidObject
}

const Avatar = ({ image }: Props) => (
  // @ts-ignore
  <StyledImg
    boxShadow="large"
    className="br-100"
    padding={0}
    justifyContent="center"
    my={2}
    loading="eager"
    fluid={image}
  />
)

export default Avatar
