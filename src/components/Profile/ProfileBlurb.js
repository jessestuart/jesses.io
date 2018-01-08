import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  CrescentMoon,
  France,
  Microscope,
  OpenBook,
  PersonalComputer,
  Rat,
  Scroll,
  ThinkingFace,
} from '../Icons/Twemoji'

const beigbederUrl =
  'https://www.scribd.com/doc/184481594/Love-Lasts-Three-Years'
const colingUrl =
  'https://f001.backblazeb2.com/file/js-public/Dimensions%20of%20Variation%20in%20American%20English%20(COLING%2C%202014).pdf'
const uspoUrl = 'https://f001.backblazeb2.com/file/js-public/US20150026079.pdf'

const ProfileBlurbHeading = () => (
  <Fragment>
    <h2 className="f3-ns f4 fw5 lh-title">Hi. I'm Jesse.</h2>
    <h2 className="f3-ns f4 fw5 lh-title mv3">
      <span className="dib nowrap">I contradict myself.</span>
      <span className="dib nowrap ml2">
        I contain&nbsp;
        <a
          className="link moon-gray underline"
          style={{ textDecorationColor: 'rgba(199, 153, 255, 0.5)' }}
          href="http://www.english.illinois.edu/maps/poets/s_z/whitman/song.htm"
        >
          multitudes.
        </a>
      </span>
    </h2>
  </Fragment>
)

const ProfileBlurb = () => (
  <Fragment>
    <ProfileBlurbHeading />
    <SubBlurb Emoji1={PersonalComputer} Emoji2={ThinkingFace}>
      NYC-based software engineer.
    </SubBlurb>
    <SubBlurb Emoji1={OpenBook} Emoji2={Scroll}>
      <span className="db">
        Published <BlurbLink href={colingUrl}>NLP researcher</BlurbLink>, and
      </span>
      <BlurbLink href={uspoUrl}>USPO Patent holder.</BlurbLink>
    </SubBlurb>
    <SubBlurb Emoji1={Microscope} Emoji2={Rat}>
      Neuroscientist by degree.
    </SubBlurb>
    <SubBlurb Emoji1={France} Emoji2={CrescentMoon}>
      <BlurbLink href={beigbederUrl}>French translator</BlurbLink> by night.
    </SubBlurb>
  </Fragment>
)

const SubBlurb = ({ Emoji1, Emoji2, children }) => (
  <p className="flex justify-center justify-end-ns items-center">
    <span className="f5 f4-ns fw3 dib tr" style={{ lineHeight: 1.375 }}>
      {children}
    </span>
    <span className="f6 dib">
      <Emoji1 className="mh2" style={{ height: '1.25rem', width: '1.25rem' }} />
      <Emoji2 style={{ height: '1.25rem', width: '1.25rem' }} />
    </span>
  </p>
)

const BlurbLink = styled.a`
  text-decoration: underline;
  text-decoration-color: rgba(199, 153, 255, 0.5);
  text-underline-position: auto;
`

SubBlurb.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  Emoji1: PropTypes.element.isRequired,
  Emoji2: PropTypes.element.isRequired,
}

export default ProfileBlurb
