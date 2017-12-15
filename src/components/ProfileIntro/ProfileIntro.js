import React, { Fragment } from 'react'

import { Avatar } from 'components'

// import styles from './styles.module.scss'

export default function ProfileIntro() {
  return (
    <Fragment>
      <div
        className="flex items-center justify-center"
        style={{ gridColumn: '3 / 6' }}
      >
        <Avatar />
      </div>
      <div
        className="flex h-100 flex-column tr"
        style={{ gridColumn: '6 / 9' }}
      >
        <h2 className="f3 fw3 lh-title">Hi. I'm Jesse.</h2>
        <h2 className="f3 fw3 lh-title mv2">
          <span className="">I contradict myself.&nbsp;</span>
          <span className="">I contain multitudes.</span>
        </h2>
        <p>
          <span className="f4 fw3 lh-title">NYC-based software engineer.</span>
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
