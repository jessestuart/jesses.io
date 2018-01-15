import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { DateTime } from 'luxon'

const PhotographySectionHeader = ({ datetime, href }) => (
  <div className="alegreya mb2 f2 fw4 header-purple bb b--header-purple tr">
    <Link to={href}>{datetime.toFormat('dd LLLL yyyy')}</Link>
  </div>
)

PhotographySectionHeader.propTypes = {
  datetime: PropTypes.instanceOf(DateTime).isRequired,
  href: PropTypes.string.isRequired,
}

export default PhotographySectionHeader
