import classNames from 'classnames'
import React from 'react'
import styled from 'styled-components'

import colors from 'utils/colors'

const StyledPanelContainer = styled.section`
  background-color: ${colors.secondary.light0};
  box-shadow: rgba(25, 17, 34, 0.1) 0px 3px 10px;
  @media (max-width: 45em) {
    margin: 1rem !important;
    padding: 1rem 2rem !important;
  }
`

interface Props {
  children: any
  className?: string
  maxWidth?: number
}

const StyledPanel = ({ children, className, maxWidth = 8 }: Props) => (
  <StyledPanelContainer
    className={classNames(
      `br2 center mv5-ns mw7 mw${maxWidth}-ns pa5-ns`,
      className,
    )}
    style={{ transition: 'all 0.5s' }}
  >
    {children}
  </StyledPanelContainer>
)

export default StyledPanel
