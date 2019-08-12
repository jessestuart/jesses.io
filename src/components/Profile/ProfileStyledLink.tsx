import React from 'react'

import Color from 'color'
import { StyledLink } from 'components'
import colors from 'utils/colors'

const linkColor: string = Color(colors.secondary.light7)
  .alpha(0.8)
  .string()

const hoverColor: string = Color(colors.primary.main)
  .alpha(0.8)
  .string()

interface Props {
  children: any
  className?: string
  href: string
}

const ProfileStyledLink = ({ children, className, href }: Props) => (
  <StyledLink
    className={className}
    linkColor={linkColor}
    hoverColor={hoverColor}
    href={href}
  >
    {children}
  </StyledLink>
)

export default ProfileStyledLink
