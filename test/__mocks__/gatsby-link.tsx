import React from 'react'

// eslint-disable-next-line
const mockComponent = name => props =>
  React.createElement(name, props, props.children)

export default mockComponent('MockedLink')
