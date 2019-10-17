import { DateTime } from 'luxon'
import React from 'react'
import _ from 'lodash'
import { Text } from 'rebass/styled-components'

import Colors from 'utils/colors'
// import StyledLink from 'components/StyledLink'
import Link from 'gatsby-link'

interface Props {
  datetime: DateTime
  href?: string
}

const PhotographySectionHeader = ({
  datetime,
  href = '/photography',
}: Props) => (
  <Link className="w-100" to={href}>
    <Text
      as="h2"
      borderBottom={`1px solid ${Colors.gray.calm}`}
      marginBottom="2"
      className="flex fw5 justify-end"
      color="textMediumMuted"
      flex="1"
      fontFamily="smallcaps"
      fontSize="6"
      justfiyContent="flex-end"
    >
      {datetime.toFormat('dd LLLL yyyy')}
    </Text>
  </Link>
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
