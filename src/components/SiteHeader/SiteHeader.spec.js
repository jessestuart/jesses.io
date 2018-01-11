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
