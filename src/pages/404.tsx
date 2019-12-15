import React from 'react'
import Helmet from 'react-helmet'
import { Heading } from 'rebass/styled-components'

import { StyledPanel } from 'components'

const NotFound = () => (
  <div className="bg-near-white flex-body-expand lh-copy pa3-ns pv4">
    <Helmet title="404 | jesses.io" />
    <StyledPanel>
      <Heading>:(</Heading>
    </StyledPanel>
  </div>
)

export default NotFound
