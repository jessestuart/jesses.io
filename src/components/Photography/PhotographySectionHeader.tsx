import StyledLink from 'components/StyledLink'
import { DateTime } from 'luxon'
import React from 'react'

interface Props {
  datetime: DateTime
  href?: string
}

const PhotographySectionHeader = ({
  datetime,
  href = '/photography',
}: Props) => (
  <StyledLink
    className="alegreya-sans db f2 fw5 header-primary mb3 tr w-100"
    href={href}
  >
    {datetime.toFormat('dd LLLL yyyy')}
  </StyledLink>
)

export default PhotographySectionHeader
