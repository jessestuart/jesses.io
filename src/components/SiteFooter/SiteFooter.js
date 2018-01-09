import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import classNames from 'classnames'

import { Heart } from 'react-feather'

const SiteFooter = ({ theme }) => (
  <footer
    className={classNames(
      'b--hot-pink bb bw2 f6 f5-ns fw4 flex flex-column lh-title pa4',
      {
        'bg-gray-primary moon-gray': theme === SiteFooter.Theme.Dark,
        'bg-light-gray': theme === SiteFooter.Theme.Light,
      }
    )}
  >
    <div className="flex justify-center items-center">
      © 2015–{moment().format('YYYY')} Jesse Stuart
    </div>
    <div className="dib center tc flex-ns justify-center items-center">
      Pixels, bits and bytes hand-crafted with
      <Heart className="hot-pink mh1" width="15" height="15" fill="#FC5270" />
      in NYC.
    </div>
  </footer>
)

SiteFooter.Theme = {
  Light: 'Light',
  Dark: 'Dark',
}

SiteFooter.propTypes = {
  theme: PropTypes.oneOf(Object.keys(SiteFooter.Theme)).isRequired,
}

SiteFooter.defaultProps = {
  theme: SiteFooter.Theme.Light,
}

export default SiteFooter
