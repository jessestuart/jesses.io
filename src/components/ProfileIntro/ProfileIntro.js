import React, { Fragment } from 'react'

import { Avatar } from 'components'

import styles from './styles.module.scss'

export default function ProfileIntro() {
  return (
    <Fragment>
      <div className={styles.avatarWrapper}>
        <Avatar />
      </div>
      <div className={styles.introWrapper}>
        <div className={styles.introContainer}>
          <h2 className="fw5 tc">Hi. I'm Jesse.</h2>
          <h2 className="fw5 tc">
            <span className="tc">I contradict myself.&nbsp;</span>
            <span className="tc">I contain multitudes.</span>
          </h2>
          <p className="tc">
            <span className="js-ethos">NYC-based software engineer.</span>
            <span className="js-ethos-icons">💻&nbsp;🤔</span>
          </p>
          <p className="tc">
            <span className="js-ethos">
              Published NLP researcher & <br /> USPO patent holder.
            </span>
            <span className="js-ethos-icons">📖&nbsp;📜</span>
          </p>
          <p className="tc">
            <span className="js-ethos">Neuroscientist by degree.</span>
            <span className="js-ethos-icons">🔬&nbsp;🐀</span>
          </p>
          <p className="tc">
            <span className="js-ethos">French translator by night.</span>
            <span className="js-ethos-icons">🇫🇷&nbsp;🌙</span>
          </p>
        </div>
      </div>
    </Fragment>
  )
}
