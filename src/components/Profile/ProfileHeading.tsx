import classNames from 'classnames'
import _ from 'lodash'
import React, { ReactNode } from 'react'
import { Text } from 'rebass/styled-components'
import { Flex } from 'reflexbox'

import ProfileStyledLink from './ProfileStyledLink'

const WHITMAN_URL = 'http://jstu.art/ojNe'

const ProfileHeadingText = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => (
  <Text fontFamily="serif" className={classNames('justify-end pb3', className)}>
    {children}
  </Text>
)

const ProfileHeading = () => (
  <Flex className="f3 fw5 lh-title white-80 mv3" flexDirection="column">
    <ProfileHeadingText>Hi — I'm Jesse.</ProfileHeadingText>
    <ProfileHeadingText className="flex-wrap">
      I contradict myself. I contain{' '}
      <ProfileStyledLink href={WHITMAN_URL}>multitudes</ProfileStyledLink>.
    </ProfileHeadingText>
  </Flex>
)

export default ProfileHeading
