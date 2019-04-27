import React from 'react'

import { StyledLink } from 'components'
import color from 'onecolor'
import colors from 'utils/colors'

const linkColor: string = color(colors.secondary.light7)
  .alpha(0.8)
  .cssa()

const hoverColor: string = color(colors.primary.main)
  .alpha(0.8)
  .cssa()

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
