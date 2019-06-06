import React from 'react'
import renderer from 'react-test-renderer'

import ExifOverlay from 'components/Photography/ExifOverlay'

test('Render valid ExifOverlay component.', () => {
  const tree = renderer
    .create(<ExifOverlay>Shot with a camera</ExifOverlay>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('Rendering ExifOverlay w/out any text is empty div.', () => {
  // @ts-ignore
  const tree = renderer.create(<ExifOverlay />).toJSON()
  expect(tree).toMatchSnapshot()
})
