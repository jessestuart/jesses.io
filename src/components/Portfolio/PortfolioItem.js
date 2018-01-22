import React from 'react'
import PropTypes from 'prop-types'
import { GitMerge } from 'react-feather'

const PortfolioItem = ({ link, title }) => (
  <li className="f4">
    <a className="flex items-center" href={link}>
      <div>
        <GitMerge className="mr2" size="30px" color="#933E51" />
      </div>
      <p className="fw7 underline">{title}</p>
    </a>
  </li>
)

PortfolioItem.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default PortfolioItem
