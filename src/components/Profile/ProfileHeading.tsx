import classNames from 'classnames'
import React from 'react'
import { Text } from 'rebass/styled-components'

import ProfileStyledLink from 'components/Profile/ProfileStyledLink'

const WHITMAN_URL = 'https://jstu.art/ojNe'

const ProfileHeadingText = ({ children, className, ...rest }: any) => (
  <Text
    as="span"
    className={classNames('flex justify-end fw5 lh-title', className)}
    color="textLight"
    flex="1"
    fontFamily="serif"
    fontSize={5}
    {...rest}
  >
    {children}
  </Text>
)

const ProfileHeading = () => (
  <>
    <ProfileHeadingText as="div" className="flex flex-wrap">
      Hi — I'm Jesse.
    </ProfileHeadingText>
    <ProfileHeadingText className="flex flex-wrap">
      I contradict myself.
    </ProfileHeadingText>
    <ProfileHeadingText className="flex flex-wrap">
      I contain
      <ProfileStyledLink href={WHITMAN_URL}>multitudes</ProfileStyledLink>.
    </ProfileHeadingText>
  </>
)

export default ProfileHeading
