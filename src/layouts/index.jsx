import React from 'react'
import { Container } from 'react-responsive-grid'
import { rhythm } from '../utils/typography'
import SiteHeader from '../components/site-header'

import 'prismjs/themes/prism.css'

class Template extends React.Component {
  render() {
    const { children, location } = this.props

    const rootPath = '/'
    const isRoot = location.pathname === rootPath

    const containerStyle = {
      maxWidth: rhythm(24),
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
    }

    return (
      <Container style={containerStyle}>
        <SiteHeader size={isRoot ? 'large' : 'small'} />
        {children()}
      </Container>
    )
  }
}

export default Template
