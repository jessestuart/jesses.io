import React from 'react'

import renderer from 'react-test-renderer'

import SiteFooter from './SiteFooter'

test('Render SiteFooter component.', () => {
  const tree = renderer.create(<SiteFooter />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Render SiteFooter component with dark theme.', () => {
  const tree = renderer
    .create(<SiteFooter theme={SiteFooter.Theme.Dark} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
