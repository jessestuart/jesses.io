import React, { Component } from 'react'
import Link from 'gatsby-link'
import { rhythm, scale } from '../utils/typography'
import config from '../../gatsby-config'

const innerTitle = () => (
  <Link
    style={{
      boxShadow: 'none',
      textDecoration: 'none',
      color: 'inherit',
    }}
    to={'/'}
  >
    {_.get(config, 'siteMetadata.title')}
  </Link>
)

/**
 * Render a SiteHeader. Size options are 'large' and 'small'. Default to 'small'.
 */
const SiteHeader = props => {
  const { size } = props

  const largeStyle = {
    ...scale(1.5),
    fontFamily: 'Lato',
    marginTop: 0,
    marginBottom: rhythm(1.5),
  }
  const smallStyle = {
    marginTop: 0,
    marginBottom: rhythm(-1),
  }

  const large = <h1 style={largeStyle}>{innerTitle()}</h1>
  const small = <h3 style={smallStyle}>{innerTitle()}</h3>

  return _.eq(size, 'large') ? large : small
}

export default SiteHeader
