import React from 'react'
import renderer from 'react-test-renderer'
import PortfolioItem from './PortfolioItem'

test('Render PortfolioItem component.', () => {
  const tree = renderer
    .create(<PortfolioItem link="/" title="Portfolio Item" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
