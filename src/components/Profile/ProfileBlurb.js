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
const whitmanUrl =
  'http://www.english.illinois.edu/maps/poets/s_z/whitman/song.htm'

const ProfileBlurbHeading = () => (
  <Fragment>
    <h2 className="f3-ns f4 fw5 lh-title">Hi. I'm Jesse.</h2>
    <h2 className="f3-ns f4 fw5 lh-title mv3">
      <span className="dib nowrap">I contradict myself.</span>
      <span className="dib nowrap ml2">
        I contain&nbsp;
        <PrimaryBlurbLink className="link moon-gray" href={whitmanUrl}>
          multitudes.
        </PrimaryBlurbLink>
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
    <span className="f5 f4-ns fw3 dib tr lh-copy">{children}</span>
    <span className="f6 dib">
      <Emoji1 className="mh2" style={{ height: '1.25rem', width: '1.25rem' }} />
      <Emoji2 style={{ height: '1.25rem', width: '1.25rem' }} />
    </span>
  </p>
)

const BlurbLink = styled.a`
  text-decoration: none;
  border-bottom: 2px solid rgba(199, 153, 255, 0.7);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: rgba(126, 241, 249, 0.7);
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.2s ease-in-out 0s;
    transition: all 0.2s ease-in-out 0s;
  }
  &:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
  &.no-slide:hover:before {
    visibility: hidden;
  }
  &.no-slide:hover {
    color: #7ef1f9;
  }
`

const PrimaryBlurbLink = BlurbLink.extend`
  border-bottom: 2px solid rgba(199, 153, 255, 0.7);
  position: relative;

  &:before {
    position: absolute;
    height: 3px;
    bottom: -3px;
  }
`

SubBlurb.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  Emoji1: PropTypes.func.isRequired,
  Emoji2: PropTypes.func.isRequired,
}

export default ProfileBlurb
