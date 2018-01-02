import React, { Fragment } from 'react'
import classNames from 'classnames'

import DevIconColumn from './DevIconColumn'
import DevIconSkills from './DevIconSkills'

// import './styles.scss'

const ProfileDevIcons = () => {
  return (
    <section
      className="hot-pink center w-75 code"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridTemplateRows: 'repeat(4, 1fr)',
      }}
    >
      {DevIconSkills.map((devIcon, index) => (
        <Fragment key={devIcon.label}>
          <div
            className={classNames('flex items-center justify-end f4', {
              'bb b--green': index + 1 < DevIconSkills.length,
            })}
            style={{
              gridColumn: 'span 1',
              gridRow: `${index + 1} / ${index + 2}`,
            }}
          >
            {devIcon.label}
          </div>
          {devIcon.icons.map(icon => (
            <DevIconColumn
              key={icon.label}
              label={icon.label}
              useWordmark={icon.useWordmark}
              className={classNames({
                'bb b--green': index + 1 < DevIconSkills.length,
              })}
              style={{
                gridColumn: 'span 3',
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
