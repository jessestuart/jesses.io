import React from 'react'
import PropTypes from 'prop-types'
import { GitMerge } from 'react-feather'

import StyledLink from '../../components/StyledLink/StyledLink'
import colors from '../../utils/colors'

const PortfolioItem = ({ link, title }) => (
  <li className="f4 portfolio-item">
    <a className="flex items-center" href={link}>
      <div>
        <GitMerge className="mr2" size="30px" color={colors.secondary.light6} />
      </div>
      <p className="fw7">
        <StyledLink>{title} </StyledLink>
      </p>
    </a>
  </li>
)

PortfolioItem.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default PortfolioItem
