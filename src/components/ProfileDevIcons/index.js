import React, { Fragment } from 'react'
import classNames from 'classnames'

import DevIconColumn from './DevIconColumn'
import DevIconSkills from './DevIconSkills'

// NB: Removing this breaks the responsive layout for the `Profile` component.
import './styles.scss'

const ProfileDevIcons = () => {
  return (
    <section
      className="center w-90 code"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(16, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
      }}
    >
      {DevIconSkills.map((devIcon, index) => (
        <Fragment key={devIcon.label}>
          <div
            className={classNames(
              'moon-grey flex items-center justify-end f3',
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
                gridColumn: `span 2`,
                gridRow: `${index + 1} / ${index + 2}`,
              }}
            />
          ))}
        </Fragment>
      ))}
    </section>
  )
}

export default ProfileDevIcons
