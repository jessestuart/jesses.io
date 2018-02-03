import React, { Fragment } from 'react'

import ProfileStyledLink from './ProfileStyledLink'

const WHITMAN_URL = 'http://jstu.art/ojNe'

const ProfileHeading = () => (
  <Fragment>
    <h2 className="spectral f3-ns f3 fw5 lh-title moon-gray">
      Hi — I'm Jesse.
    </h2>
    <h2 className="spectral f3-ns f3 fw5 lh-title mv3 moon-gray">
      <span className="dib nowrap">I contradict myself.</span>
      <span className="dib nowrap ml2">
        I contain&nbsp;
        <ProfileStyledLink
          className="link dib"
          href={WHITMAN_URL}
          style={{ lineHeight: 1 }}
        >
          multitudes
        </ProfileStyledLink>.
      </span>
    </h2>
  </Fragment>
)

export default ProfileHeading
