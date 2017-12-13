import React from 'react'
import Link from 'gatsby-link'
import config from '../../../gatsby-config'
import _ from 'lodash'
import { scale } from '../../utils/typography'

// import colors from '../utils/colors'

const largeStyle = {
  ...scale(0.5),
  fontFamily: 'Lato',
  margin: 0,
  padding: '1rem',
  // borderBottom: `1px solid ${colors.pink}`,
}
const smallStyle = { ...largeStyle }
const titleStyle = {
  boxShadow: 'none',
  color: 'inherit',
  textDecoration: 'none',
}

const innerTitle = () => (
  <Link style={titleStyle} to={'/'}>
    {_.get(config, 'siteMetadata.title')}
  </Link>
)

/**
 * Render a SiteHeader. Size options are 'large' and 'small'. Default to 'small'.
 */
const SiteHeader = props =>
  _.eq(props.size, 'large') ? (
    <h1 style={largeStyle}>{innerTitle()}</h1>
  ) : (
    <h3 style={smallStyle}>{innerTitle()}</h3>
  )

export default SiteHeader
