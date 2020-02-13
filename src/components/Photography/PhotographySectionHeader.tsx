import Link from 'gatsby-link'
import { DateTime } from 'luxon'
import React from 'react'
import { Text } from 'rebass/styled-components'

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
    className="flex fw5"
    flex="1"
    fontSize="6"
    marginBottom="2"
    mx="2"
    sx={{
      borderBottom: `1px solid ${Colors.gray.calm}`,
      color: 'textMediumMuted',
      fontFamily: 'smallcaps',
      justifyContent: 'flex-end',
    }}
  >
    <Link to={href}>{datetime.toFormat('dd LLLL yyyy')}</Link>
  </Text>
)

export default PhotographySectionHeader
