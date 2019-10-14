import { DateTime } from 'luxon'
import React from 'react'
import renderer from 'react-test-renderer'

import { ThemeProvider } from 'styled-components'

import PhotographySectionHeader from 'components/Photography/PhotographySectionHeader'
import theme from 'styles/Theme'

jest.mock('react-headroom', () => 'Headroom')

const datetime = DateTime.utc(2019, 5, 1, 1, 1, 1)

test('Render PhotographySectionHeader.', () => {
  const component = renderer.create(
    // @ts-ignore
    <ThemeProvider theme={theme}>
      <PhotographySectionHeader datetime={datetime} />,
    </ThemeProvider>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
