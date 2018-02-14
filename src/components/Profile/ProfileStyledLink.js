import React from 'react'
import color from 'onecolor'
import colors from '../../utils/colors'

import StyledLink from '../StyledLink/StyledLink'

const linkColor = color(colors.secondary.light7)
  .alpha(0.8)
  .cssa()

const hoverColor = color(colors.primary.main)
  .alpha(0.8)
  .cssa()

type Props = {
  children: React.Node,
  href: string,
}

const ProfileStyledLink = ({ children, href }: Props) => (
  <StyledLink linkColor={linkColor} hoverColor={hoverColor} href={href}>
    {children}
  </StyledLink>
)

export default ProfileStyledLink
