import React from 'react'
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
      gridColumn: '3/9',
    }

    return (
      <div
        style={{
          display: 'grid',
          gridGap: '1vw',
          gridTemplateColumns: '9vw 9vw 9vw 9vw 9vw 9vw 9vw 9vw 9vw 9vw',
          // gridTemplateRows: '10rem',
        }}
      >
        <div style={containerStyle}>
          <SiteHeader size={isRoot ? 'large' : 'small'} />
          {children()}
        </div>
      </div>
    )
  }
}

export default Template
