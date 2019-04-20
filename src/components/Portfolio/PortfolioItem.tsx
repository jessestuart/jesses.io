import React from 'react'
import { Download } from 'react-feather'
import styled from 'styled-components'
import { StyledLink } from '../../components/StyledLink/StyledLink'
import { colors } from '../../utils/colors'

interface Props {
  link: string
  title: string
}

const GitMergeStyled = styled.div`
  transition: all 500ms;
  stroke: ${colors.secondary.dark5};
  &:hover {
    stroke: ${colors.secondary.main};
  }
`

const PortfolioItem = ({ link, title }: Props) => (
  <li className="f4 portfolio-item flex items-center mb2">
    <a href={link}>
      <GitMergeStyled>
        <Download className="mr2" size="27px" color="inherit" />
      </GitMergeStyled>
    </a>
    <StyledLink className="fw7 f4" href={link}>
      {title}
    </StyledLink>
  </li>
)

export default PortfolioItem
