import React from 'react'

import renderer from 'react-test-renderer'

import HeaderLink from './HeaderLink'

jest.mock('react-headroom', () => 'Headroom')

test('Render HeaderLink component w/ default values.', () => {
  const component = renderer.create(
    <HeaderLink href="/" pathname="/">
      Header Link
    </HeaderLink>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
