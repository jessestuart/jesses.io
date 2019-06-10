import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { ChevronDown } from 'react-feather'

import colors from 'utils/colors'

const ProfileFooter = () => {
  const [isAnimatingChevron, setIsAnimatingChevron] = useState(false)

  const toggleChevron = () => setIsAnimatingChevron(!isAnimatingChevron)

  useEffect(() => {
    const interval = setInterval(() => toggleChevron(), 2000)
    return () => clearInterval(interval)
  }, [isAnimatingChevron])

  return (
    <div
      className="b--hot-pink bb bg-purple bw2 mb1 pb3 pt4"
      style={{ gridColumn: '1 / 13' }}
    >
      <h4 className="f4 fira-mono fw4 lh-title tc white-80">
        I build software
        <br />
        on the pull requests
        <br />
        of giants.
      </h4>
      <div className="flex justify-center mt2 w-100">
        <div
          className={classNames({
            'hvr-wobble-vertical hvr-wobble-vertical-animating': isAnimatingChevron,
          })}
        >
          <ChevronDown
            className="mw-5"
            color={colors.primary.main}
            size="30px"
          />
        </div>
      </div>
    </div>
  )
}

export default ProfileFooter
