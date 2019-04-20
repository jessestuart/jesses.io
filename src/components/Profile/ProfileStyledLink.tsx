import React from 'react'

import { StyledLink } from '../'
import colors from '../../utils/colors'

interface Props {
  children: any
  className?: string
  href: string
}

const ProfileStyledLink = ({ children, className, href }: Props) => (
  <StyledLink
    className={className}
    linkColor={colors.defaultLink}
    hoverColor={colors.defaultHover}
    href={href}
  >
    {children}
  </StyledLink>
)

export default ProfileStyledLink
