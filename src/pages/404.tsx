import React from 'react'
import Helmet from 'react-helmet'

import config from '../../gatsby-config'
import { StyledPanel } from '../components'

/**
 * TODO: Replace this.
 */
class FourOhFour extends React.Component {
  public render() {
    return (
      <div className="bg-near-white flex-body-expand lh-copy pa3-ns pv4">
        <Helmet title={`404 | ${config.siteMetadata.title}`} />
        <StyledPanel>
          <h2>:(</h2>
        </StyledPanel>
      </div>
    )
  }
}

export default FourOhFour
