import classNames from 'classnames'
import React from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
  DevIcon: any
  style?: any
}

const DevIconColumn = ({ className, DevIcon, style }: Props) => (
  <DevIconContainer
    style={style}
    className={classNames(
      'pa3 pa4-l flex justify-center items-center',
      className,
    )}
  >
    <a href={DevIcon.href}>
      <DevIcon width="75%" height="75%" className="hvr-grow" />
    </a>
  </DevIconContainer>
)

const DevIconContainer = styled.div`
  grid-row: auto;
  svg {
    max-width: 100px;
    filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.75));
    &:hover {
      filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.8));
    }
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
