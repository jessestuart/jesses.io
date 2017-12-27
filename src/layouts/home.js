import React, { Fragment } from 'react'

import {
  ProfileDevIcons,
  ProfileIntro,
  SiteFooter,
  SiteHeader,
} from 'components'

import 'prismjs/themes/prism.css'
import '../styles/js-tachyons.css'

const HomeTemplate = () => (
  <Fragment>
    <SiteHeader />
    <ProfileIntro />
    <ProfileDevIcons />
    <SiteFooter />
  </Fragment>
)

export default HomeTemplate
