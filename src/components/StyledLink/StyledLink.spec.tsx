import React from 'react'
import renderer from 'react-test-renderer'
import StyledLink from './StyledLink'

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
