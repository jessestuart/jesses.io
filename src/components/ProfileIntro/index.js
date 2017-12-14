import React, { Fragment } from 'react'

import Avatar from '../Avatar'

import styles from './styles.module.scss'

export default function ProfileIntro() {
  return (
    <Fragment>
      <div className={styles.avatarWrapper}>
        <Avatar />
      </div>
      <div className={styles.introWrapper}>
        <h2 className="fw5 tc">Hi. I'm Jesse.</h2>
        <h2 className="fw5 tc">
          <span>I contradict myself.&nbsp;</span>
          <span className="span-dont-break">I contain multitudes.</span>
        </h2>
        <p>
          <span className="js-ethos">NYC-based software engineer.</span>
          <span className="js-ethos-icons">💻&nbsp;🤔</span>
        </p>
        <p>
          <span className="js-ethos">
            Published NLP researcher & <br /> USPO patent holder.
          </span>
          <span className="js-ethos-icons">📖&nbsp;📜</span>
        </p>
        <p>
          <span className="js-ethos">Neuroscientist by degree.</span>
          <span className="js-ethos-icons">🔬&nbsp;🐀</span>
        </p>
        <p>
          <span className="js-ethos">French translator by night.</span>
          <span className="js-ethos-icons">🇫🇷&nbsp;🌙</span>
        </p>
      </div>
    </Fragment>
  )
}
