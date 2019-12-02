import React from 'react'

import { renderWithTheme } from '../../../test/utils/helpers'
import Profile from './Profile'

describe('Render Profile component.', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  test('Render Profile component.', () => {
    const tree = renderWithTheme(<Profile />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
