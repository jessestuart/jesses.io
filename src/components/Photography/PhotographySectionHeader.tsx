import { DateTime } from 'luxon'
import React from 'react'
import { Link, Text } from 'rebass'

interface Props {
  datetime: DateTime
  href?: string
}

const PhotographySectionHeader = ({
  datetime,
  href = '/photography',
}: Props) => (
  <Link className="db f2 fw5 mb3 tr w-100" href={href}>
    <Text fontFamily="smallCaps">{datetime.toFormat('dd LLLL yyyy')}</Text>
  </Link>
)

// const PhotographySectionHeader = ({
//   datetime,
//   href = '/photography',
// }: Props) => (
//   <StyledLink
//     className="alegreya-sans db f2 fw5 header-primary mb3 tr w-100"
//     href={href}
//   >
//     {_.lowerCase(datetime.toFormat('dd LLLL yyyy'))}
//   </StyledLink>
// )

export default PhotographySectionHeader
