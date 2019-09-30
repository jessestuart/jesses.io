import classNames from 'classnames'
import _ from 'lodash'
import React, { ReactNode } from 'react'
import { Flex, Text } from 'rebass'

import ProfileStyledLink from './ProfileStyledLink'

const WHITMAN_URL = 'http://jstu.art/ojNe'

const ProfileHeadingText = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => (
  <Text
    as="span"
    fontFamily="spectral"
    color="textLight"
    className={classNames('justify-end fw5 f3 lh-title', className)}
  >
    {children}
  </Text>
)

const ProfileHeading = () => (
  <Flex className="mv3" flexDirection="column">
    <ProfileHeadingText className="pb3">Hi — I'm Jesse.</ProfileHeadingText>
    <ProfileHeadingText className="flex-wrap">
      I contradict myself.
    </ProfileHeadingText>
    <ProfileHeadingText className="flex-wrap">
      I contain{' '}
      <ProfileStyledLink href={WHITMAN_URL}>multitudes</ProfileStyledLink>.
    </ProfileHeadingText>
  </Flex>
)

export default ProfileHeading
