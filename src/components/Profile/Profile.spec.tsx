import React from 'react'
import { Profile } from './Profile'
import renderer from 'react-test-renderer'

jest.mock('gatsby-image')

describe('Render Profile component.', () => {
  test('Render Profile component.', () => {
    const component = renderer.create(<Profile avatar={{}} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
