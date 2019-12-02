import classNames from 'classnames'
import { DateTime } from 'luxon'
import React from 'react'
import { Heart } from 'react-feather'
import { Text } from 'rebass/styled-components'

import colors from 'utils/colors'

export enum FooterTheme {
  Light = 'Light',
  Dark = 'Dark',
}

interface Props {
  theme?: FooterTheme
}

const SiteFooter = ({ theme = FooterTheme.Light }: Props) => (
  <footer
    className={classNames(
      'b--hot-pink bb bottom-0 bw2 f5-ns f6 flex flex-column fw4 lh-title pa4 w-100',
      {
        'bg-gray-primary moon-gray': theme === FooterTheme.Dark,
        'bg-near-white black-80': theme === FooterTheme.Light,
      },
    )}
    style={{
      borderTop:
        theme === FooterTheme.Light
          ? `1px solid ${colors.secondary.light5}`
          : `3px solid ${colors.secondary.light5}`,
    }}
  >
    <Text className="flex justify-center items-center">
      © 2013–{DateTime.local().year} Jesse Stuart
    </Text>
    <Text
      fontFamily="body"
      className="dib center tc flex-ns justify-center items-center"
    >
      Pixels, bits and bytes hand-crafted with
      <Heart
        className="hot-pink mh1 hvr-grow"
        fill={colors.primary}
        height="15"
        width="15"
      />
      in NYC.
    </Text>
  </footer>
)

export default SiteFooter
