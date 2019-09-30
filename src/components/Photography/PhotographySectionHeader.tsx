import { DateTime } from 'luxon'
import React from 'react'
import _ from 'lodash'
import { Text } from 'rebass'

import StyledLink from 'components/StyledLink'
// import Link from 'gatsby-link'

interface Props {
  datetime: DateTime
  href?: string
}

// const PhotographySectionHeader = ({
//   datetime,
//   href = '/photography',
// }: Props) => (
//   <Link className="db f2 fw5 mb3 tr w-100" href={href}>
//     <Text fontFamily="smallCaps">{datetime.toFormat('dd LLLL yyyy')}</Text>
//   </Link>
// )

const PhotographySectionHeader = ({
  datetime,
  href = '/photography',
}: Props) => (
  <StyledLink
    className="sans-serif db f2 fw5 header-primary mb3 tr w-100"
    href={href}
  >
    <Text fontFamily="Alegreya Sans SC">
      {_.lowerCase(datetime.toFormat('dd LLLL yyyy'))}
    </Text>
  </StyledLink>
)

export default PhotographySectionHeader
