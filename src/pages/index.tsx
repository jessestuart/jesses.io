import { graphql, useStaticQuery } from 'gatsby'
import _ from 'lodash'
import React from 'react'
import { Box } from 'rebass/styled-components'

import { Profile, ProfileDevIcons } from 'components'

const Home = () => {
  return (
    <Box width="100%" className="moon-gray bg-gray-primary">
      <Profile />
      <ProfileDevIcons />
    </Box>
  )
}

export default Home
