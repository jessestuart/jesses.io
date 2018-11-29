import classNames from 'classnames'
import { DateTime } from 'luxon'
import PropTypes from 'prop-types'
import React from 'react'
import { Heart } from 'react-feather'

import colors from '../../utils/colors'

interface Props {
  theme?: FooterTheme
}

export enum FooterTheme {
  Dark,
  Light,
}

const SiteFooter = ({ theme = FooterTheme.Light }: Props) => (
  <footer
    className={classNames(
      'b--hot-pink bb bottom-0 bw2 f5-ns f6 flex flex-column fw4 lh-title pa4 w-100 black-80',
      {
        'bg-gray-primary moon-gray': theme === FooterTheme.Dark,
        'bg-light-gray': theme === FooterTheme.Light,
      }
    )}
    style={{
      borderTop:
        theme === FooterTheme.Light
          ? `1px solid ${colors.secondary.light5}`
          : `3px solid ${colors.secondary.light5}`,
    }}
  >
    <div className="flex justify-center items-center">
      © 2013–
      {DateTime.local().year} Jesse Stuart
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

export default SiteFooter
