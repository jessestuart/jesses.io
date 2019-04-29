import Bluebird from 'bluebird'
import classNames from 'classnames'
import _ from 'lodash'
import React, { Component } from 'react'
import { ChevronDown } from 'react-feather'

import Cancelable from 'utils/cancelable'
import colors from 'utils/colors'

// Configure Bluebird's Promise lib to be cancelable -- we use this to cancel
// the bouncing chevron animation when the component is unmounted (e.g.,
// because the user has navigated away from the Home page).
Bluebird.config({ cancellation: true })

interface State {
  isAnimatingChevron: boolean
}

const initialState = { isAnimatingChevron: false }

export default class ProfileFooter extends Component<{}, State> {
  public readonly state = { ...initialState }
  private cancelable: Cancelable | undefined

  constructor(props: any) {
    super(props)
    this.state = { ...initialState }
  }

  public shouldComponentUpdate(): boolean {
    return _.isNil(this.cancelable) || this.cancelable.cancelled
  }

  public componentDidMount() {
    this.cancelable = new Cancelable(this.animateChevron())
  }

  public componentWillUnmount() {
    this.cancelChevronAnimation()
  }

  public render() {
    const { isAnimatingChevron } = this.state
    return (
      <div
        className="b--hot-pink bb bg-purple bw2 mb1 pb3 pt4"
        style={{ gridColumn: '1 / 13' }}
      >
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
      </div>
    )
  }

  private async animateChevron(): Bluebird<void> {
    if (_.get(this.cancelable, 'cancelled')) {
      return this.cancelChevronAnimation()
    }
    return Bluebird.delay(2000).then(() => {
      if (_.isNil(this.cancelable) || this.cancelable.cancelled) {
        return Bluebird.resolve()
      }
      this.setState({
        isAnimatingChevron: !this.state.isAnimatingChevron,
      })
      return Bluebird.resolve(this.animateChevron())
    })
  }

  private cancelChevronAnimation(): void {
    this.cancelable && this.cancelable.cancel()
  }
}
