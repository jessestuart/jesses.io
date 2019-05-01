import React from 'react'
import renderer from 'react-test-renderer'
import PortfolioItem from './PortfolioItem'

test('Render StyledLink component with default colors.', () => {
  const tree = renderer
    .create(<PortfolioItem link="/" title="Portfolio Item" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
