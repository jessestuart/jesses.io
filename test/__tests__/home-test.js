import React from 'react'

import renderer from 'react-test-renderer'

import { Avatar } from '../../src/components'

it('renders correctly', () => {
  const tree = renderer.create(<Avatar />).toJSON()
  expect(tree).toMatchSnapshot()
  // const div = document.createElement('div')
  // ReactDOM.render(<Avatar />, div)
})
