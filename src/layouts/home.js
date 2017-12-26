import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import { ProfileIntro, SiteFooter, SiteHeader } from 'components'

import 'prismjs/themes/prism.css'

import '../styles/js-tachyons.css'

const HomeTemplate = () => (
  <Fragment>
    <SiteHeader />
    <ProfileIntro />
    <SiteFooter />
  </Fragment>
)

// class HomeTemplate extends Component {
//   render() {
//     return (
//       <Fragment>
//         <SiteHeader />
//         <ProfileIntro />
//         <SiteFooter />
//       </Fragment>
//     )
//   }
// }

// HomeTemplate.propTypes = {
//   children: PropTypes.any,
// }

export default HomeTemplate
