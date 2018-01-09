import React, { Fragment } from 'react'
import classNames from 'classnames'
import styled, { css } from 'styled-components'

import DevIconColumn from './DevIconColumn'
import DevIconSkills from './DevIconSkills'

// NB: Removing this breaks the responsive layout for the `Profile` component.
// import './styles.scss'
import '../../styles/base.css'
import '../../styles/hvr-animations.css'
import styles from './profile-dev-icons.module.scss'

const ProfileDevIcons = () => {
  return (
    <div className="bb b--white-20 bw3">
      <div className="flex justify-center align-center">
        <p className="serif f4 fw3 lh-copy center pv3 tc w-50-ns w-75">
          Tackling novel problems — at <em>every</em> level of the stack — is my
          jam.<br />
          Here are some of the technologies I've enjoyed hacking on lately:
        </p>
      </div>
      <section
        className={classNames('center w-75 code', styles.devIconsSection)}
      >
        {DevIconSkills.map((devIcon, index) => (
          <Fragment key={devIcon.label}>
            <div
              className={classNames(
                'moon-grey flex items-center justify-start f3',
                {
                  'bb b--white-50': index + 1 < DevIconSkills.length,
                }
              )}
              style={{
                gridColumn: 'span 2',
                gridRow: `${index + 1} / ${index + 2}`,
              }}
            >
              {devIcon.label}
            </div>
            {devIcon.icons.map((DevIcon, innerIndex) => (
              // <DevIconColumnStyled key={innerIndex} index={innerIndex}>
              //   <div className="pa4 w-50 flex justify-center items-center">
              //     <DevIcon width="100%" height="100%" className="hvr-grow" />
              //   </div>
              // </DevIconColumnStyled>
              <DevIconColumn
                key={innerIndex}
                DevIcon={DevIcon}
                className={classNames({
                  'bb b--white-50': index + 1 < DevIconSkills.length,
                })}
                style={{
                  gridColumn: 'span 2',
                  gridRow: `${index + 1} / ${index + 2}`,
                }}
              />
            ))}
          </Fragment>
        ))}
      </section>
    </div>
  )
}

const DevIconColumnStyled = styled.div.attrs({ className: 'bb b--white-50' })`
  grid-column: span 2;
  ${props =>
    css`
      grid-row: ${props.index + 1} / ${props.index + 2};
    `};
`

export default ProfileDevIcons
