import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../src/gatsby-plugin-theme-ui'

export const renderWithTheme = (component: any) => {
  return renderer.create(
    <ThemeProvider theme={theme}>{component}</ThemeProvider>,
  )
}
