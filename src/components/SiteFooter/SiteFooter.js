/* @flow */
import { DateTime } from 'luxon'
import { Heart } from 'react-feather'
import React from 'react'

import classNames from 'classnames'

import colors from '../../utils/colors'

enum FooterTheme {
  Light: 'Light',
    Dark: 'Dark',
}

type Props = {
  theme: FooterTheme,
}

const SiteFooter = ({ theme = 'Light' }: Props) => (
  <footer
    className={classNames(
      'b--hot-pink bb bottom-0 bw2 f5-ns f6 flex flex-column fw4 lh-title pa4 w-100',
      {
        'bg-gray-primary moon-gray': theme === SiteFooter.Theme.Dark,
        'bg-near-white black-80': theme === SiteFooter.Theme.Light,
      }
    )}
    style={{
      borderTop:
        theme === SiteFooter.Theme.Light
          ? `1px solid ${colors.secondary.light5}`
          : `3px solid ${colors.secondary.light5}`,
    }}
  >
    <div className="flex justify-center items-center">
      © 2013–{DateTime.local().year} Jesse Stuart
    </div>
    <div className="dib center tc flex-ns justify-center items-center">
      Pixels, bits and bytes hand-crafted with
      <Heart
        className="hot-pink mh1"
        width="15"
        height="15"
        fill={colors.primary.main}
      />
      in NYC.
    </div>
  </footer>
)

// TODO Replace w/ TS enum.
SiteFooter.Theme = {
  Light: 'Light',
  Dark: 'Dark',
}

export default SiteFooter
