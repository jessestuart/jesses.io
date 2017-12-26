import React from 'react'
import moment from 'moment'

const SiteFooter = () => (
  <div style={{ display: 'grid' }}>
    <footer className="flex f5 f4-ns pa4 flex-column bt b--white-50">
      <div className="center">
        © 2015-{moment().format('YYYY')} Jesse Stuart
      </div>
      <div className="center">
        Pixels, bits and bytes hand-crafted with ❤️ in NYC.
      </div>
    </footer>
  </div>
)

export default SiteFooter
