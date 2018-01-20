import React from 'react'
import SiteHeader from './SiteHeader'
import renderer from 'react-test-renderer'

jest.mock('react-headroom', () => 'Headroom')

test('Render SiteHeader component.', () => {
  const location = { pathname: '/' }
  const component = renderer.create(<SiteHeader location={location} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Render SiteHeader component as not-root.', () => {
  const location = { pathname: '/blog' }
  const component = renderer.create(<SiteHeader location={location} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
