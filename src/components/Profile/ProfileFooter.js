import React, { Component } from 'react'
import classNames from 'classnames'
import { ChevronDown } from 'react-feather'

let intervals = []

const initialState = { isAnimatingChevron: false }

export default class ProfileFooter extends Component {
  constructor() {
    super()
    this.state = { ...initialState }
  }

  componentDidMount() {
    intervals.forEach(clearInterval)
    intervals = []
    intervals.push(setInterval(this.animateChevron.bind(this), 4000))
  }

  componentWillUnmount() {
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
        className="bb bw2 b--hot-pink bg-purple pt4 pb3 mb1"
        style={{ gridColumn: '1 / 13' }}
      >
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
      </section>
    )
  }
}
