import classNames from 'classnames'
import React from 'react'
import styled from 'styled-components'

import colors from '../../utils/colors'

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
}

const StyledPanel = ({ children, className }: Props) => (
  <StyledPanelContainer
    className={classNames('br2 center mv5-ns mw7 mw8-ns pa5-ns', className)}
  >
    {children}
  </StyledPanelContainer>
)

export default StyledPanel
