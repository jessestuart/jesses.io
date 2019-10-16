import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/Theme'

import Profile from './Profile'

describe('Render Profile component.', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  test('Render Profile component.', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Profile href="/" />
      </ThemeProvider>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
