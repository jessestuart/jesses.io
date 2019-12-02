import classNames from 'classnames'
import React from 'react'
import { Flex, Text } from 'rebass/styled-components'

import ProfileStyledLink from 'components/Profile/ProfileStyledLink'

const WHITMAN_URL = 'https://jstu.art/ojNe'

const ProfileHeadingText = ({ children, className, ...rest }: any) => (
  <Text
    as="span"
    className={classNames('lh-title', className)}
    color="textLight"
    flex="1"
    flexWrap="wrap"
    fontFamily="serif"
    fontSize={5}
    fontWeight="body"
    justifyContent={['center', 'flex-end']}
    sx={{ display: 'inline-flex' }}
    {...rest}
  >
    {children}
  </Text>
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
