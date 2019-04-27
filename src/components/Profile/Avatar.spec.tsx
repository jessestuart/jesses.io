import React from 'react'

import renderer from 'react-test-renderer'

import img from '../../../static/img/avatar_square.jpg'
import Avatar from './Avatar'

jest.mock('gatsby-image')

test('Render Avatar component.', () => {
  const component = renderer.create(<Avatar image={img} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
