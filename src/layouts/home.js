import React, { Fragment } from 'react'

import { ProfileDevIcons, Profile, SiteFooter, SiteHeader } from 'components'

import 'js-devicon/devicon.min.css'
import 'prismjs/themes/prism.css'
import '../styles/js-tachyons.css'

const HomeTemplate = () => (
  <Fragment>
    <SiteHeader />
    <Profile />
    <ProfileDevIcons />
    <SiteFooter />
  </Fragment>
)

export default HomeTemplate
