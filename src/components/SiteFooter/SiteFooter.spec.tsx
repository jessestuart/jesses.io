import React from 'react'

import { renderWithTheme } from '../../../test/utils/helpers'

import SiteFooter, { FooterTheme } from './SiteFooter'

test('Render SiteFooter component.', () => {
  const tree = renderWithTheme(<SiteFooter />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Render SiteFooter component with dark theme.', () => {
  const tree = renderWithTheme(<SiteFooter theme={FooterTheme.Dark} />).toJSON()
  expect(tree).toMatchSnapshot()
})
