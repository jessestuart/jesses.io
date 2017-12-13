import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import Avatar from '../components/Avatar'
import SiteHeader from '../components/site-header'

import 'prismjs/themes/prism.css'

import './home.scss'

class HomeTemplate extends Component {
  render() {
    console.log('rendering home layout')
    console.log({ props: this.props })

    const baseContainerStyle = {
      display: 'grid',
      gridTemplateColumns: `repeat(10, '1fr')`,
      gridGap: '15px',
    }
    const headerContainerStyle = {
      gridColumn: '1/11',
    }
    const bodyContainerStyle = {
      gridColumn: '2/10',
    }

    return (
      <div className="homeContainer">
        <div style={headerContainerStyle}>
          <SiteHeader />
        </div>
        <div style={bodyContainerStyle}>
          <Avatar />
        </div>
      </div>
    )
  }
}

HomeTemplate.propTypes = {
  children: PropTypes.any,
}

export default HomeTemplate
