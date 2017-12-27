import React, { Component } from 'react'
import classNames from 'classnames'

import feather from 'feather-icons'

import styles from './styles.module.scss'

// const initialState = {
//   isAnimatingChevron: false,
// }

let intervals = []

export default class ProfileFooter extends Component {
  // state = { ...initialState }

  constructor() {
    super()
    this.initialState = {
      isAnimatingChevron: false,
    }
    this.state = { ...this.intiialState }
  }

  componentWillMount() {
    try {
      feather.replace({
        color: '#FF3A5C',
        height: '2.5rem',
        width: '2.5rem',
      })
    } catch (e) {}
  }

  componentDidMount() {
    feather.replace({
      color: '#FF3A5C',
      height: '2.5rem',
      width: '2.5rem',
    })
    intervals.forEach(clearInterval)
    intervals = []
    // intervals.push(setInterval(this.animateChevron.bind(this), 4000))
  }

  componentWillUnmount() {
    this.cancelAnimation()
  }

  cancelAnimation() {
    intervals.forEach(interval => clearInterval(interval))
    intervals = []
  }

  animateChevron() {
    this.setState({ isAnimatingChevron: true }, () =>
      setTimeout(() => this.setState({ isAnimatingChevron: false }), 2000)
    )
  }

  render() {
    const { isAnimatingChevron } = this.state
    return (
      <section
        className="bb bw3 b--hot-pink bg-purple pt3 mb1"
        style={{ gridColumn: '1 / 13' }}
      >
        <h4 className="f4 fw7 tc lh-title code">
          I build software<br />
          on the pull requests<br />
          of giants.
        </h4>
        <div
          className={classNames(
            styles.chevronWrapper,
            isAnimatingChevron
              ? 'hvr-wobble-vertical hvr-wobble-vertical-animating'
              : null
          )}
        >
          <i data-feather="chevron-down" />
        </div>
      </section>
    )
  }
}
