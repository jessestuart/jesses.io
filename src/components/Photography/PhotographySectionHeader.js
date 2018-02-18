/* @flow */
import React from 'react'
import Link from 'gatsby-link'
import { DateTime } from 'luxon'

import StyledLink from '../StyledLink/StyledLink'

type Props = {
  datetime: DateTime,
  href: string,
}

const PhotographySectionHeader = ({ datetime, href }: Props) => (
  <Link to={href || '#'}>
    <StyledLink className="alegreya-sans db f2 fw5 header-primary mb3 tr w-100">
      {datetime.toFormat('dd LLLL yyyy')}
    </StyledLink>
  </Link>
)

export default PhotographySectionHeader
