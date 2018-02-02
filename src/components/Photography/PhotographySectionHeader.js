import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { DateTime } from 'luxon'

import StyledLink from '../StyledLink/StyledLink'

const PhotographySectionHeader = ({ datetime, href }) => (
  <div className="alegreya-sans mb2 f2 fw5 header-purple tr w-100">
    <Link style={{ textDecoration: 'none' }} to={href}>
      <StyledLink className="db">
        {datetime.toFormat('dd LLLL yyyy')}
      </StyledLink>
    </Link>
  </div>
)

PhotographySectionHeader.propTypes = {
  datetime: PropTypes.instanceOf(DateTime).isRequired,
  href: PropTypes.string.isRequired,
}

export default PhotographySectionHeader
