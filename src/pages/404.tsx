import React from 'react'
import Helmet from 'react-helmet'
import { StyledPanel } from '../components'

/**
 * TODO: Replace this.
 */
class FourOhFour extends React.Component {
  public render() {
    return (
      <div className="bg-near-white flex-body-expand lh-copy pa3-ns pv4">
        <Helmet title={`404 | jesses.io`} />
        <StyledPanel>
          <h2>:(</h2>
        </StyledPanel>
      </div>
    )
  }
}

export default FourOhFour
