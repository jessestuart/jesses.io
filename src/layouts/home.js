import React from 'react'

import { ProfileDevIcons, Profile, SiteFooter, SiteHeader } from 'components'

import 'js-devicon/devicon.min.css'
import 'prismjs/themes/prism.css'
import '../styles/js-tachyons.css'
import './home.scss'

const HomeTemplate = () => (
  <div className="moon-gray" style={{ backgroundColor: 'rgba(55, 59, 70, 1)' }}>
    <SiteHeader />
    <Profile />
    <ProfileDevIcons />
    <SiteFooter />
  </div>
)

export default HomeTemplate
