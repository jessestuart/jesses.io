import React from 'react'
import ProfileDevIcons from '.'
import renderer from 'react-test-renderer'

test('Render ProfileDevIcons component.', () => {
  const tree = renderer.create(<ProfileDevIcons />).toJSON()
  expect(tree).toMatchSnapshot()
})
