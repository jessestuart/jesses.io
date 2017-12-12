import React, { Component } from 'react'
import classNames from 'classnames'

import feather from 'feather-icons'

import './styles.scss'

const initialState = {
  isAnimatingChevron: false,
}

let intervals = []

export default class ProfileDevIcons extends Component {
  state = { ...initialState }

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
    intervals.push(setInterval(this.animateChevron.bind(this), 4000))
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
        className="bg-primary text-white text-center header-section"
        id="features"
      >
        <h4 className="section-heading profile-footer-header">
          I build software<br />
          on the pull requests<br />
          of giants.
        </h4>
        <div
          className={classNames(
            'chevron-wrapper',
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
