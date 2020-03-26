import React from 'react'
import renderer from 'react-test-renderer'

import DevIcons from '.'

test('Render DevIcons component.', () => {
  Object.keys(DevIcons).forEach((key) => {
    const DevIcon = DevIcons[key]
    const tree = renderer.create(<DevIcon href={DevIcon.href} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
