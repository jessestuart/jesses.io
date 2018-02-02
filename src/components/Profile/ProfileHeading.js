import React, { Fragment } from 'react'

import StyledLink from '../StyledLink/StyledLink'

const WHITMAN_URL = 'http://jstu.art/ojNe'

const ProfileHeading = () => (
  <Fragment>
    <h2 className="spectral f3-ns f3 fw5 lh-title">Hi — I'm Jesse.</h2>
    <h2 className="spectral f3-ns f3 fw5 lh-title mv3">
      <span className="dib nowrap">I contradict myself.</span>
      <span className="dib nowrap ml2">
        I contain&nbsp;
        <StyledLink
          className="link moon-gray dib"
          href={WHITMAN_URL}
          style={{ lineHeight: 1 }}
        >
          multitudes
        </StyledLink>.
      </span>
    </h2>
  </Fragment>
)

export default ProfileHeading
