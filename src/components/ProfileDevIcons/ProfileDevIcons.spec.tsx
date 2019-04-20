import React from 'react'
import renderer from 'react-test-renderer'
import ProfileDevIcons from '.'

test('Render ProfileDevIcons component.', () => {
  const tree = renderer.create(<ProfileDevIcons />).toJSON()
  expect(tree).toMatchSnapshot()
})
