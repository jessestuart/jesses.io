import React, { Fragment } from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import { DevIconColumn } from './DevIconColumn'
import { DevIconSkills } from './DevIconSkills'
import { colors } from '../../utils/colors'

import '../../styles/base.css'
import '../../styles/hvr-animations.css'

const ProfileDevIcons = () => {
  return (
    <Fragment>
      <div className="flex justify-center align-center">
        <p
          className="spectral fw3 lh-copy center pv3 tc w-75"
          style={{
            fontSize: '1.3rem',
          }}
        >
          Tackling novel problems —
          <span style={{ whiteSpace: 'nowrap' }}>
            &nbsp;at every level of the stack&nbsp;
          </span>
          — <span style={{ whiteSpace: 'nowrap' }}>is my jam.</span>
          <br />
          Here are some of the technologies I've enjoyed hacking on lately:
        </p>
      </div>
      <DevIconsSection>
        {DevIconSkills.map((devIcon, index) => (
          <Fragment key={devIcon.label}>
            <DevIconLabel>{devIcon.label}</DevIconLabel>
            {devIcon.icons.map((DevIcon, innerIndex) => (
              <DevIconColumn
                key={innerIndex}
                DevIcon={DevIcon}
                className={classNames({
                  'bb b--white-50':
                    innerIndex + 1 > devIcon.icons.length / 2 &&
                    index < DevIconSkills.length,
                  'bb-ns b--white-50': innerIndex + 1 < devIcon.icons.length,
                })}
              />
            ))}
          </Fragment>
        ))}
      </DevIconsSection>
    </Fragment>
  )
}

const DevIconLabel = styled.div.attrs({
  className: 'fira-mono moon-gray flex items-center justify-start',
})`
  font-size: 1.5rem;
  grid-column: span 9;
  grid-row: span 2;
  @media (max-width: 45em) {
    border-bottom: 1px solid ${colors.primary.main};
  }
  @media (min-width: 45em) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    grid-row: span 1;
    grid-column: span 2;
  }
`

const DevIconsSection = styled.div.attrs({ className: 'center code w-90' })`
  display: grid;
  @media (max-width: 45em) {
    grid-template-columns: repeat(9, 1fr);
    grid-auto-rows: max-content;
  }
  @media (min-width: 45em) {
    grid-template-columns: repeat(14, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`

export default ProfileDevIcons
