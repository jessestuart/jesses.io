import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import twemoji from 'twemoji'
import classNames from 'classnames'
import styled, { css } from 'styled-components'

import './profile-blurb.scss'

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
          className="link moon-gray"
          // style={{ textDecorationColor: '#FC5270' }}
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
    <SubBlurb emoji1="💻" emoji2="🤔">
      NYC-based software engineer.
    </SubBlurb>
    <SubBlurb emoji1="📖" emoji2="📜">
      <span className="db">
        Published <BlurbLink href={colingUrl}>NLP researcher</BlurbLink>, and
      </span>
      <BlurbLink href={uspoUrl}>USPO Patent holder.</BlurbLink>
    </SubBlurb>
    <SubBlurb emoji1="🔬" emoji2="🐀">
      Neuroscientist by degree.
    </SubBlurb>
    <SubBlurb emoji1="🇫🇷" emoji2="🌙">
      <BlurbLink href={beigbederUrl}>French translator</BlurbLink> by night.
    </SubBlurb>
  </Fragment>
)

const SubBlurb = ({ emoji1, emoji2, children }) => (
  <p className="flex justify-center justify-end-ns items-center">
    <span className="f5 f4-ns fw3 dib tr" style={{ lineHeight: 1.375 }}>
      {children}
    </span>
    <span className="f6 ml2">
      <span
        dangerouslySetInnerHTML={{
          __html: twemoji.parse(emoji1, {
            folder: 'svg',
            ext: '.svg',
          }),
        }}
      />
      &nbsp;&nbsp;
      <span
        dangerouslySetInnerHTML={{
          __html: twemoji.parse(emoji2, {
            folder: 'svg',
            ext: '.svg',
          }),
        }}
      />
    </span>
  </p>
)

// const UnstyledBlurbLink = ({ className, children, href }) => (
//   <a href={href} className={classNames('mr1', className)}>
//     {children}
//   </a>
// )
const BlurbLink = styled.a`
  text-decoration: underline;
  text-decoration-color: rgba(199, 153, 255, 0.5);
  text-underline-position: auto;
`

SubBlurb.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  emoji1: PropTypes.string.isRequired,
  emoji2: PropTypes.string.isRequired,
}

export default ProfileBlurb
