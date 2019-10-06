import React from 'react'
import renderer from 'react-test-renderer'

import { ThemeProvider } from 'styled-components'

import theme from 'styles/Theme'
import SiteHeader from './SiteHeader'

jest.mock('react-headroom', () => 'Headroom')

test('Render SiteHeader component.', () => {
  const location = { location: { pathname: '/' } }
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <SiteHeader location={location} />
    </ThemeProvider>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Render SiteHeader component as not-root.', () => {
  const location = { location: { pathname: '/blog' } }
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <SiteHeader location={location} />
    </ThemeProvider>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
