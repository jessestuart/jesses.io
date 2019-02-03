/* @flow */
import React from 'react'

type Props = {
  children: *,
}

// eslint-disable-next-line
const mockComponent = name => (props: Props) =>
  React.createElement(name, props, props.children)

export default mockComponent('MockedLink')
