import React from 'react'
import renderer from 'react-test-renderer'

import Profile from './Profile'

describe('Render Profile component.', () => {
  test('Render Profile component.', () => {
    const component = renderer.create(<Profile />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
