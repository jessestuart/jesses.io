import React from 'react'
import renderer from 'react-test-renderer'

import Avatar from 'components/Profile/Avatar'
import img from 'img/avatar_square.jpg'

jest.mock('gatsby-image')

test('Render Avatar component.', () => {
  const component = renderer.create(<Avatar image={img} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
