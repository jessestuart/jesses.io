import React from 'react'
import renderer from 'react-test-renderer'
import Avatar from './Avatar'

jest.mock('gatsby-image')

test('Render Avatar component.', () => {
  const component = renderer.create(
    <Avatar image={'https://my-site.com/foo.png'} />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
