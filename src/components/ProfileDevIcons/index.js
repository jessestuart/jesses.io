import React, { Fragment } from 'react'
import classNames from 'classnames'

import DevIconColumn from './DevIconColumn'
import DevIconSkills from './DevIconSkills'

// NB: Removing this breaks the responsive layout for the `Profile` component.
import './styles.scss'

const ProfileDevIcons = () => {
  return (
    <Fragment>
      <div className="serif f4 fw2 lh-copy flex justify-center">
        <p className="flex w-50 center justify-center align-center pv3 tc">
          I've always been passionate about tackling novel problems, at every
          level of the stack. These are some of the technologies I've enjoyed
          working with lately.
        </p>
      </div>
      <section
        className="center w-75 code"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(14, 1fr)',
          gridTemplateRows: 'repeat(4, 1fr)',
        }}
      >
        {DevIconSkills.map((devIcon, index) => (
          <Fragment key={devIcon.label}>
            <div
              className={classNames(
                'moon-grey flex items-center justify-center f3',
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
            {devIcon.icons.map((icon, innerIndex) => (
              <DevIconColumn
                key={innerIndex}
                DevIcon={icon}
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
    </Fragment>
  )
}

export default ProfileDevIcons
