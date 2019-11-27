// import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import React from 'react'
// import { ThemeProvider } from 'styled-components'

// import theme from 'styles/Theme'

import Profile from './Profile'

describe('Render Profile component.', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  test('Render Profile component.', () => {
    const component = render.create(
      // <ThemeProvider theme={theme}>
      <Profile href="/" />,
      // </ThemeProvider>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
