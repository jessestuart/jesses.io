import React from 'react'
import renderer from 'react-test-renderer'
import StyledPanel from './StyledPanel'

test('Render StyledPanel component.', () => {
  const tree = renderer
    .create(<StyledPanel>Basic Styled Panel</StyledPanel>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('Render StyledPanel with custom styling.', () => {
  const tree = renderer
    .create(<StyledPanel className="w-100">Custom Styled Panel</StyledPanel>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
