import React from 'react'

// import { Follow } from 'react-twitter-widgets'
import { rhythm } from '../utils/typography'
import './bio.scss'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginBottom: rhythm(2.5),
        }}
      >
        {/* <div className="follow">
          <Follow
            username="jesse_stuart"
            options={{ size: 'medium', dnt: true }}
          />
        </div> */}
        <div>
          ©&nbsp;<strong>Jesse Stuart</strong> {new Date().getFullYear()}.
        </div>
      </div>
    )
  }
}

export default Bio
