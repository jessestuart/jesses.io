import { DateTime } from 'luxon'
import React from 'react'

import { renderWithTheme } from '../../../test/utils/helpers'

import PhotographySectionHeader from 'components/Photography/PhotographySectionHeader'

jest.mock('react-headroom', () => 'Headroom')

const datetime = DateTime.utc(2019, 5, 1, 1, 1, 1)

test('Render PhotographySectionHeader.', () => {
  const component = renderWithTheme(
    <PhotographySectionHeader datetime={datetime} />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
