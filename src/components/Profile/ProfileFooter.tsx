import { Box, Flex, Text } from 'rebass'
import { ChevronDown } from 'react-feather'
import React, { useEffect, useState } from 'react'
import classNames from 'classnames'

import colors from 'utils/colors'

const WigglyChevron = ({ isAnimating }: { isAnimating: boolean }) => (
  <Flex
    className={classNames('justify-center mt2', {
      'hvr-wobble-vertical hvr-wobble-vertical-animating': isAnimating,
    })}
  >
    <ChevronDown className="mw-5" color={colors.primary.main} size="30px" />
  </Flex>
)

const ProfileFooter = () => {
  const [isAnimatingChevron, setIsAnimatingChevron] = useState(false)

  useEffect(() => {
    const interval = setInterval(
      () => setIsAnimatingChevron(!isAnimatingChevron),
      2000,
    )
    return () => clearInterval(interval)
  }, [isAnimatingChevron])

  return (
    <Box
      className="b--hot-pink bb bg-purple bw2 mb1 pb3 pt4"
      style={{ gridColumn: '1 / 13' }}
    >
      <Text
        as="h3"
        className="f4 fw4 lh-title tc white-80"
        fontFamily="monospace"
      >
        I build software
        <br />
        on the pull requests
        <br />
        of giants.
      </Text>
      <WigglyChevron isAnimating={isAnimatingChevron} />
    </Box>
  )
}

export default ProfileFooter
