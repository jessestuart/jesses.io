import React from 'react'

import DevIconColumn from './DevIconColumn'
import DevIconSkills from './DevIconSkills'

import './styles.scss'

export default function ProfileDevIcons() {
  return (
    <div className="dev-icons-wrapper">
      <section className="bg-primary text-white text-center features-devicons">
        {DevIconSkills.map(devIcon => (
          <div key={devIcon.label} className="container skills-container">
            <div className="row justify-content-center">
              <div className="dev-icon-label">
                {devIcon.label}&nbsp;
                <span className="dev-icon-brace">{'{'}</span>
              </div>
              {devIcon.icons.map(icon => (
                <DevIconColumn
                  key={icon.label}
                  label={icon.label}
                  useWordmark={icon.useWordmark}
                />
              ))}
              <span className="dev-icon-brace dev-icon-close-brace">{'}'}</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
