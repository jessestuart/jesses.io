import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ProfileBlurb = () => (
  <Fragment>
    <ProfileBlurbHeading />
    <SubBlurb emoji1="💻" emoji2="🤔">
      NYC-based software engineer.
    </SubBlurb>
    <SubBlurb emoji1="📖" emoji2="📜">
      Published NLP researcher & <br /> USPO patent holder.
    </SubBlurb>
    <SubBlurb emoji1="🔬" emoji2="🐀">
      Neuroscientist by degree.
    </SubBlurb>
    <SubBlurb emoji1="🇫🇷" emoji2="🌙">
      French translator by night.
    </SubBlurb>
  </Fragment>
)

const ProfileBlurbHeading = () => (
  <Fragment>
    <h2 className="f3-ns f4 fw5 lh-title">Hi. I'm Jesse.</h2>
    <h2 className="f3-ns f4 fw5 lh-title mv3">
      <span className="dib nowrap">I contradict myself.</span>
      <span className="dib nowrap ml2">I contain multitudes.</span>
    </h2>
  </Fragment>
)

const SubBlurb = ({ emoji1, emoji2, children }) => (
  <p className="flex justify-center justify-end-ns items-center">
    <span className="f5 f4-ns fw3 lh-title dib tr">{children}</span>
    <span className="f4 ml2">
      {emoji1}&nbsp;&nbsp;{emoji2}
    </span>
  </p>
)

SubBlurb.propTypes = {
  emoji1: PropTypes.string.isRequired,
  emoji2: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
}

export default ProfileBlurb
