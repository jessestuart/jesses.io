import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { DateTime } from 'luxon'

const PhotographySectionHeader = ({ datetime, href }) => (
  <div className="alegreya-sans mb2 f1 fw5 header-purple bb b--header-purple">
    <Link to={href}>{datetime.toFormat('dd LLLL yyyy')}</Link>
  </div>
)

PhotographySectionHeader.propTypes = {
  datetime: PropTypes.instanceOf(DateTime).isRequired,
  href: PropTypes.string.isRequired,
}

export default PhotographySectionHeader
