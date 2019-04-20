import React from 'react'
import DevIcons from '.'
import renderer from 'react-test-renderer'

test('Render DevIcons component.', () => {
  Object.keys(DevIcons).forEach(key => {
    const DevIcon = DevIcons[key]
    const tree = renderer.create(<DevIcon />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
