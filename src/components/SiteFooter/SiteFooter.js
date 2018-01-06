import React from 'react'
import moment from 'moment'

import { Heart } from 'react-feather'

const SiteFooter = () => (
  <footer className="b--white-50 bt f5 flex flex-column lh-title pa4">
    <div className="flex justify-center items-center">
      © 2015-{moment().format('YYYY')} Jesse Stuart
    </div>
    <div className="flex justify-center items-center">
      Pixels, bits and bytes hand-crafted with
      <Heart className="hot-pink mh1" width="15" height="15" fill="#FC5270" />
      in NYC.
    </div>
  </footer>
)

export default SiteFooter
