import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/Theme'

import SiteFooter, { FooterTheme } from './SiteFooter'

test('Render SiteFooter component.', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <SiteFooter />
      </ThemeProvider>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('Render SiteFooter component with dark theme.', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <SiteFooter theme={FooterTheme.Dark} />
      </ThemeProvider>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
