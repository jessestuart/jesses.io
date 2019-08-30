import { DateTime } from 'luxon'
import React from 'react'
import { Link } from 'rebass'

interface Props {
  datetime: DateTime
  href?: string
}

const PhotographySectionHeader = ({
  datetime,
  href = '/photography',
}: Props) => (
  <Link fontFamily="smallCaps" className="db f2 fw5 mb3 tr w-100" href={href}>
    {datetime.toFormat('dd LLLL yyyy')}
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
