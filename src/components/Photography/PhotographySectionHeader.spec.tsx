import { DateTime } from 'luxon'
import React from 'react'
import renderer from 'react-test-renderer'
import PhotographySectionHeader from './PhotographySectionHeader'

test('Render StyledLink component with default colors.', () => {
  const datetime = DateTime.fromMillis(1556681549893)
  const tree = renderer
    .create(<PhotographySectionHeader datetime={datetime} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
