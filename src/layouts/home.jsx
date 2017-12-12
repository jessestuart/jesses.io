import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SiteHeader from '../components/site-header'
import _ from 'lodash'

import 'prismjs/themes/prism.css'

class HomeTemplate extends Component {
  render() {
    const { children } = this.props

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
          <SiteHeader />
        </div>
        <div style={bodyContainerStyle}>{children()}</div>
      </div>
    )
  }
}

HomeTemplate.propTypes = {
  children: PropTypes.any,
}

export default HomeTemplate
