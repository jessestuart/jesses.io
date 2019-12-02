import React from 'react'
import { renderWithTheme } from '../../../test/utils/helpers'
import SiteHeader from './SiteHeader'

jest.mock('react-headroom', () => 'Headroom')

test('Render SiteHeader component.', () => {
  const location = { location: { pathname: '/' } }
  const tree = renderWithTheme(<SiteHeader location={location} />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Render SiteHeader component as not-root.', () => {
  const location = { location: { pathname: '/blog' } }
  const tree = renderWithTheme(<SiteHeader location={location} />).toJSON()
  expect(tree).toMatchSnapshot()
})
