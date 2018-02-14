/* @flow */
import React from 'react'
import { GitMerge } from 'react-feather'
import styled from 'styled-components'

import StyledLink from '../../components/StyledLink/StyledLink'
import colors from '../../utils/colors'

type Props = {
  link: string,
  title: string,
}

const GitMergeStyled = styled.div`
  transition: all 500ms;
  stroke: ${colors.primary.dark5};
  &:hover {
    stroke: ${colors.secondary.light8};
  }
`

const PortfolioItem = ({ link, title }: Props) => (
  <li className="f4 portfolio-item flex items-center mb2">
    <a href={link}>
      <GitMergeStyled>
        <GitMerge className="mr2" size="30px" color="inherit" />
      </GitMergeStyled>
    </a>
    <StyledLink className="fw7 f4" href={link}>
      {title}
    </StyledLink>
  </li>
)

export default PortfolioItem
