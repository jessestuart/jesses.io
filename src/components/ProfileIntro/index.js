import React from 'react'

import Avatar from '../Avatar'

import './styles.scss'

export default function ProfileIntro() {
  return (
    <div className="container js-intro-flex-container">
      <section className="js-intro-section js-intro-container">
        <div className="row">
          <div className="col-xs-12 col-lg-4">
            <Avatar />
          </div>
          <div className="col-xs-12 col-lg-8">
            <h2 className="js-intro">Hi. I'm Jesse.</h2>
            <h2 className="js-intro">
              <span>I contradict myself.&nbsp;</span>
              <span className="span-dont-break">I contain multitudes.</span>
            </h2>
            <p className="js-lead">
              <span className="js-ethos">NYC-based software engineer.</span>
              <span className="js-ethos-icons">💻&nbsp;🤔</span>
            </p>
            <p className="js-lead">
              <span className="js-ethos">
                Published NLP researcher & <br /> USPO patent holder.
              </span>
              <span className="js-ethos-icons">📖&nbsp;📜</span>
            </p>
            <p className="js-lead">
              <span className="js-ethos">Neuroscientist by degree.</span>
              <span className="js-ethos-icons">🔬&nbsp;🐀</span>
            </p>
            <p className="js-lead">
              <span className="js-ethos">French translator by night.</span>
              <span className="js-ethos-icons">🇫🇷&nbsp;🌙</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
