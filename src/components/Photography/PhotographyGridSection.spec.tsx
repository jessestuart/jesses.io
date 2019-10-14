import { DateTime } from 'luxon'
import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/Theme'
import PhotographyGridSection from 'components/Photography/PhotographyGridSection'

const datetime = DateTime.utc(2019, 5, 1, 1, 1, 1)

test('Render PhotographyGridSection component.', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <PhotographyGridSection datetime={datetime} images={[]} />
      </ThemeProvider>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('Render PhotographyGridSection component w/ images.', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <PhotographyGridSection
          datetime={datetime}
          images={[{ id: 'image1' }, { id: 'image2' }]}
        />
      </ThemeProvider>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
