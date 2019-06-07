import React from 'react'
import renderer from 'react-test-renderer'

import ExifOverlay from 'components/Photography/ExifOverlay'

test('Render valid inactive ExifOverlay component.', () => {
  const component = (
    <ExifOverlay isActive={false}>Shot with a camera</ExifOverlay>
  )
  const tree = renderer.create(component).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Render valid active ExifOverlay component.', () => {
  const component = (
    <ExifOverlay isActive={true}>Shot with a camera</ExifOverlay>
  )
  const tree = renderer.create(component).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Rendering ExifOverlay w/out any text is empty div.', () => {
  // @ts-ignore
  const tree = renderer.create(<ExifOverlay />).toJSON()
  expect(tree).toMatchSnapshot()
})
