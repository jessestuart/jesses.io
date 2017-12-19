import React, { Fragment } from 'react'

import '../../styles/js-tachyons.css'

const ProfileBlurb = () => (
  <Fragment>
    <h2 className="f3 fw3 lh-title">Hi. I'm Jesse.</h2>
    <h2 className="f3 fw3 lh-title mv2">
      <span>I contradict myself.&nbsp;</span>
      <span>I contain multitudes.</span>
    </h2>
    <p>
      <span className="f4 fw3 lh-title">NYC-based software engineer.</span>
      <span className="ml2">💻&nbsp;🤔</span>
    </p>
    <p>
      <span className="f4 fw3 lh-title">
        Published NLP researcher & <br /> USPO patent holder.
      </span>
      <span className="ml2">📖&nbsp;📜</span>
    </p>
    <p>
      <span className="js-ethos">Neuroscientist by degree.</span>
      <span className="ml2">🔬&nbsp;🐀</span>
    </p>
    <p>
      <span className="js-ethos">French translator by night.</span>
      <span className="ml2">🇫🇷&nbsp;🌙</span>
    </p>
  </Fragment>
)

export default ProfileBlurb
