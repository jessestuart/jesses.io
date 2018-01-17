import React, { Component } from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import { ChevronDown } from 'react-feather'

import makeCancelable from '../../utils/make-cancelable.js'

let interval = {}
let promise = {}
const initialState = { isAnimatingChevron: false }

export default class ProfileFooter extends Component {
  constructor() {
    super()
    this.state = { ...initialState }
  }

  componentDidMount() {
    promise = makeCancelable(
      new Promise(resolve => {
        interval = setInterval(() => {
          this.setState({ isAnimatingChevron: true }, () =>
            setTimeout(() => this.setState({ isAnimatingChevron: false }), 2000)
          )
        }, 4000)
        resolve()
      })
    )
  }

  componentWillUnmount() {
    clearInterval(interval)
    promise.cancel()
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
