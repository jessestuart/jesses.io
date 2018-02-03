import React from 'react'
import Avatar from './Avatar'
import renderer from 'react-test-renderer'

jest.mock('gatsby-image')

test('Render Avatar component.', () => {
  const component = renderer.create(<Avatar />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
