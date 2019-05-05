import React from 'react'
import renderer from 'react-test-renderer'

import Profile from './Profile'

describe('Render Profile component.', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  test('Render Profile component.', () => {
    const component = renderer.create(<Profile href="/" />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
