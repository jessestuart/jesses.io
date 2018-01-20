/* @flow */
import React, { Component } from 'react'
import Promise from 'bluebird'
import styled from 'styled-components'
import classNames from 'classnames'
import _ from 'lodash'
import { ChevronDown } from 'react-feather'

import Cancelable from '../../utils/cancelable.js'

const initialState = { isAnimatingChevron: false }

// Configure Bluebird's Promise lib to be cancelable --
// we use this to cancel the bouncing chevron animation
// when the component is unmounted (e.g., because the user
// has navigated away from the Home page).
Promise.config({ cancellation: true })

// $FlowFixMe
export default class ProfileFooter extends Component {
  cancelable: Cancelable<*>
  interval: any
  state: {
    isAnimatingChevron: boolean,
  }

  constructor() {
    super()
    this.state = { ...initialState }
  }

  shouldComponentUpdate() {
    return !this.cancelable.cancelled
  }

  componentDidMount() {
    this.cancelable = new Cancelable(this.toggleChevronAnimation())
  }

  componentWillUnmount() {
    this.cancelChevronAnimation()
  }

  cancelChevronAnimation() {
    clearInterval(this.interval)
    this.cancelable.cancel()
  }

  toggleChevronAnimation() {
    return new Promise(() => {
      this.interval = setInterval(
        () =>
          Promise.delay(2000).then(() => {
            const canceled = _.get(this, 'cancelable.canceled')
            if (!canceled) {
              // $FlowFixMe
              this.setState({
                isAnimatingChevron: !this.state.isAnimatingChevron,
              })
            } else {
              this.cancelChevronAnimation()
            }
          }),
        4000
      )
    })
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
