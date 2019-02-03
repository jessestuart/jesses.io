/* @flow */
import React, { Component } from 'react'
import _ from 'lodash'
import classNames from 'classnames'
import Promise from 'bluebird'
import styled from 'styled-components'

import { ChevronDown } from 'react-feather'

import colors from '../../utils/colors'
import Cancelable from '../../utils/cancelable.js'

// Configure Bluebird's Promise lib to be cancelable -- we use this to cancel
// the bouncing chevron animation when the component is unmounted (e.g.,
// because the user has navigated away from the Home page).
Promise.config({ cancellation: true })

type Props = {}

type State = {
  isAnimatingChevron: boolean,
}

const initialState = { isAnimatingChevron: false }

export default class ProfileFooter extends Component<Props, State> {
  cancelable: Cancelable<*>
  interval: any

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
            const isAnimationCanceled = _.get(this, 'cancelable.canceled')
            if (isAnimationCanceled) {
              this.cancelChevronAnimation()
            } else {
              // $FlowFixMe
              this.setState({
                isAnimatingChevron: !this.state.isAnimatingChevron,
              })
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
        <h4 className="f4 fira-mono fw4 lh-title tc white-80">
          I build software
          <br />
          on the pull requests
          <br />
          of giants.
        </h4>
        <div className="flex justify-center mt2 w-100">
          <div
            className={classNames({
              'hvr-wobble-vertical hvr-wobble-vertical-animating': isAnimatingChevron,
            })}
          >
            <ChevronDown
              className="mw-5"
              color={colors.primary.main}
              size="30px"
            />
          </div>
        </div>
      </ProfileFooterSection>
    )
  }
}

const ProfileFooterSection = styled.div.attrs({
  className: 'b--hot-pink bb bg-purple bw2 mb1 pb3 pt4',
})`
  grid-column: 1 / 13;
`
