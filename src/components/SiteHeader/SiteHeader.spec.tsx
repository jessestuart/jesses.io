import React from 'react'
import renderer from 'react-test-renderer'

import SiteHeader from './SiteHeader'

jest.mock('react-headroom', () => 'Headroom')

test('Render SiteHeader component.', () => {
  const location = { location: { pathname: '/' } }
  const component = renderer.create(<SiteHeader location={location} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Render SiteHeader component as not-root.', () => {
  const location = { location: { pathname: '/blog' } }
  const component = renderer.create(<SiteHeader location={location} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
