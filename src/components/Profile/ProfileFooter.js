// @flow
import React, { Component } from 'react'
import Promise from 'bluebird'
import styled from 'styled-components'
import classNames from 'classnames'
import { ChevronDown } from 'react-feather'

import Cancelable from '../../utils/cancelable.js'

const initialState = { isAnimatingChevron: false }

Promise.config({ cancellation: true })

// $FlowFixMe
export default class ProfileFooter extends Component {
  cancelable: Promise<*>
  interval: any
  state: {
    isAnimatingChevron: boolean,
  }
  constructor() {
    super()
    this.interval = {}
    this.state = { ...initialState }
  }

  componentDidMount() {
    this.cancelable = new Cancelable(
      new Promise(resolve => {
        this.interval = setInterval(
          () => this.toggleChevronAnimation(resolve),
          4000
        )
      })
    )
  }

  toggleChevronAnimation(resolveFn: Function) {
    Promise.delay(2000).then(() => {
      if (!this.cancelable.cancelled) {
        // $FlowFixMe
        this.setState({ isAnimatingChevron: !this.state.isAnimatingChevron })
      }
      resolveFn()
    })
  }

  componentWillUnmount() {
    clearInterval(this.interval)
    this.cancelable.cancel()
  }

  render() {
    const { isAnimatingChevron } = this.state
    return (
      <ProfileFooterSection>
        <h4 className="f4 fw7 tc lh-title code">
          I build software<br />
          on the pull requests<br />
          of giants.
        </h4>
        <div className="flex w-100 justify-center mt2">
          <div
            className={classNames({
              'hvr-wobble-vertical hvr-wobble-vertical-animating': isAnimatingChevron,
            })}
          >
            <ChevronDown color="#fc5270" size={'2rem'} />
          </div>
        </div>
      </ProfileFooterSection>
    )
  }
}

const ProfileFooterSection = styled.div.attrs({
  className: 'bb bw2 b--hot-pink bg-purple pt4 pb3 mb1',
})`
  grid-column: 1 / 13;
`
