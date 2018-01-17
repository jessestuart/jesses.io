import React from 'react'
import ProfileFooter from './ProfileFooter'
import renderer from 'react-test-renderer'

jest.mock('react-headroom', () => 'Headroom')
test('Render ProfileFooter component.', () => {
  const component = renderer.create(<ProfileFooter />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
