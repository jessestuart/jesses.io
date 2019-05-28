import React from 'react'
import renderer from 'react-test-renderer'

import StyledLink, { isExternalLinkPredicate } from './StyledLink'

describe('isExternalLinkPredicate utility function', () => {
  test('external if begins w/ http', () => {
    expect(isExternalLinkPredicate('http://google.com')).toBe(true)
  })
  test('external if a "mailto" email address link', () => {
    expect(isExternalLinkPredicate('mailto:hi@jessestuart.com')).toBe(true)
  })
  test('external if starts with #, otherwise Gatsby complains', () => {
    expect(isExternalLinkPredicate('#about')).toBe(true)
  })
  test('external if link has a PDF extension', () => {
    expect(isExternalLinkPredicate('/about/foo-bar.pdf')).toBe(true)
  })
  test('...otherwise link is internal.', () => {
    expect(isExternalLinkPredicate('/about')).toBe(false)
  })
})

describe('StyledLink component.', () => {
  test('Render StyledLink component with default colors.', () => {
    const tree = renderer
      .create(<StyledLink href="/">My Styled Link</StyledLink>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Render StyledLink component with custom colors.', () => {
    const tree = renderer
      .create(
        <StyledLink linkColor="#333333" hoverColor="#555555" href="/">
          My Styled Link
        </StyledLink>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('StyledLink component w/out href renders as <span>.', () => {
    const tree = renderer
      .create(<StyledLink>Styled Link as span</StyledLink>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
