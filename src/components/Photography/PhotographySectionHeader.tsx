import { DateTime } from 'luxon'
import { Text } from 'rebass/styled-components'
import Link from 'gatsby-link'
import React from 'react'

import Colors from 'utils/colors'

interface Props {
  datetime: DateTime
  href?: string
}

const PhotographySectionHeader = ({
  datetime,
  href = '/photography',
}: Props) => (
  <Text
    as="h2"
    borderBottom={`1px solid ${Colors.gray.calm}`}
    marginBottom="2"
    className="flex fw5 justify-end w-100"
    color="textMediumMuted"
    flex="1"
    fontFamily="smallcaps"
    fontSize="6"
    justfiyContent="flex-end"
  >
    <Link to={href}>{datetime.toFormat('dd LLLL yyyy')}</Link>
  </Text>
)

// const PhotographySectionHeader = ({
//   datetime,
//   href = '/photography',
// }: Props) => (
//   <StyledLink
//     className="db f2 fw5 header-primary mb3 tr"
//     href={href}
//     linkColor={Colors.gray.calm}
//     // hoverColor={Colors.gray.dark}
//   >
//     <Text
//       as="h2"
//       className="flex fw5 justify-end"
//       color="textDark"
//       flex="1"
//       fontFamily="smallcaps"
//       fontSize="6"
//       justfiyContent="flex-end"
//     >
//       {datetime.toFormat('dd LLLL yyyy')}
//     </Text>
//   </StyledLink>
// )

export default PhotographySectionHeader
