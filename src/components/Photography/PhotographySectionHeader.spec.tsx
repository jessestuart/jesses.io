import { DateTime } from 'luxon'
import React from 'react'
import renderer from 'react-test-renderer'
import PhotographySectionHeader from './PhotographySectionHeader'

const datetime = DateTime.utc(2019, 5, 1, 1, 1, 1)

test('Render PhotographySectionHeader.', () => {
  const tree = renderer
    .create(<PhotographySectionHeader datetime={datetime} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
