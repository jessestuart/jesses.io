import React from 'react'
import SiteFooter from './SiteFooter'
import renderer from 'react-test-renderer'

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
