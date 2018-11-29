import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
  DevIcon: React.SFC
  style?: object
}
const DevIconColumn = (props: Props) => {
  const { className, style, DevIcon } = props

  return (
    <DevIconContainer style={style} className={className}>
      <a href={DevIcon.href}>
        <DevIcon width="75%" height="75%" className="hvr-grow" />
      </a>
    </DevIconContainer>
  )
}

const DevIconContainer: React.SFC<
  Props & { className?: string }
> = styled.div.attrs({
  className: 'pa3 pa4-l flex justify-center items-center',
})`
  grid-row: auto;
  svg {
    max-width: 100px;
  }
  @media (min-width: 45em) {
    grid-column: span 2;
  }
  @media (max-width: 45em) {
    grid-column: span 3;
    border-bottom: none !important;
  }
`

export default DevIconColumn
