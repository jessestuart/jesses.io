import React from 'react'
import { Flex } from 'rebass/styled-components'

import ProfileStyledLink from 'components/Profile/ProfileStyledLink'

const WHITMAN_URL = 'https://genius.com/2057261'

const ProfileHeadingText = ({ children, href }: any) => (
  <Flex
    as="span"
    flex="1"
    flexWrap="wrap"
    justifyContent={['center', 'flex-end']}
    className="lh-title"
    href={href}
    sx={{
      display: 'inline-flex',
      className: 'lh-title',
      color: 'textLight',
      fontFamily: 'serif',
      fontSize: 5,
    }}
  >
    {children}
  </Flex>
)

const ProfileHeading = () => (
  <Flex flexDirection="column" pt="4">
    <ProfileHeadingText>
      Hi — I'm Jesse.
      <br />
    </ProfileHeadingText>
    <ProfileHeadingText>I contradict myself.</ProfileHeadingText>
    <ProfileHeadingText>
      I contain
      <ProfileStyledLink href={WHITMAN_URL}>&nbsp;multitudes</ProfileStyledLink>
      .
    </ProfileHeadingText>
  </Flex>
)

export default ProfileHeading
