import React from 'react'
import SiteHeader from '../components/site-header'
import _ from 'lodash'

import 'prismjs/themes/prism.css'

class Template extends React.Component {
  render() {
    const { children, location } = this.props

    const rootPath = '/'
    const isRoot = location.pathname === rootPath

    const baseContainerStyle = {
      display: 'grid',
      gridTemplateColumns: _.times(10, () => '9vw').join(' '),
      gridGap: '1vw',
    }
    const headerContainerStyle = {
      gridColumn: '1/11',
    }
    const bodyContainerStyle = {
      gridColumn: '3/9',
    }

    return (
      <div style={baseContainerStyle}>
        <div style={headerContainerStyle}>
          <SiteHeader size={isRoot ? 'large' : 'small'} />
        </div>
        <div style={bodyContainerStyle}>{children()}</div>
      </div>
    )
  }
}

export default Template
