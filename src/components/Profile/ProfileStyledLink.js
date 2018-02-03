import React from 'react'
import color from 'onecolor'
import colors from '../../utils/colors'

import StyledLink from '../StyledLink/StyledLink'

const linkColor = color(colors.secondary.light7)
  .alpha(0.8)
  .cssa()

const hoverColor = color(colors.primary.main)
  .alpha(0.7)
  .cssa()

const ProfileStyledLink = ({ children }) => (
  <StyledLink linkColor={linkColor} hoverColor={hoverColor}>
    {children}
  </StyledLink>
)

export default ProfileStyledLink
