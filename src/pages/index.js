import React from 'react'

import { ProfileDevIcons, Profile } from 'components'

import 'prismjs/themes/prism.css'
import '../styles/base.css'

const Home = () => (
  <div className="moon-gray bg-gray-primary">
    <Profile />
    <ProfileDevIcons />
  </div>
)

export default Home
