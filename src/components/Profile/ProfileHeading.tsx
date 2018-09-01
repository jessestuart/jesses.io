import React, { Fragment } from 'react'

import ProfileStyledLink from './ProfileStyledLink'

const WHITMAN_URL = 'http://jstu.art/ojNe'

const ProfileHeading = () => (
  <Fragment>
    <h2 className="f3 fw5 lh-title white-80 spectral">Hi — I'm Jesse.</h2>
    <h2 className="f3 fw5 lh-title white-80 mv3 spectral">
      <span className="dib nowrap">I contradict myself.</span>
      <span className="dib nowrap ml2">
        I contain&nbsp;
        <ProfileStyledLink className="dib" href={WHITMAN_URL}>
          multitudes
        </ProfileStyledLink>.
      </span>
    </h2>
  </Fragment>
)

export default ProfileHeading
