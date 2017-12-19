import React, { Fragment } from 'react'
import classNames from 'classnames'

import { Avatar, ProfileFooter } from 'components'

import styles from './styles.module.scss'

export default function ProfileIntro() {
  return (
    <Fragment>
      <div
        className={classNames(
          'items-center justify-center h-100',
          styles.introWrapper
        )}
      >
        <div className={classNames(styles.avatarContainer)}>
          <Avatar />
        </div>
        <div className={classNames('h-100 tr', styles.blurbContainer)}>
          <div style={{ gridRow: '1 / 3' }}>
            <h2 className="f3 fw3 lh-title">Hi. I'm Jesse.</h2>
            <h2 className="f3 fw3 lh-title mv2">
              <span className="">I contradict myself.&nbsp;</span>
              <span className="">I contain multitudes.</span>
            </h2>
          </div>
          <p>
            <span className="f4 fw3 lh-title">
              NYC-based software engineer.
            </span>
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
        <div className={styles.footerContainer}>
          <ProfileFooter />
        </div>
      </div>
    </Fragment>
  )
}
