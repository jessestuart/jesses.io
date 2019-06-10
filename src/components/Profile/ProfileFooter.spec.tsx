import React from 'react'
import renderer from 'react-test-renderer'

import { act } from 'react-hooks-testing-library'

import ProfileFooter from './ProfileFooter'

jest.useFakeTimers()

test('Render ProfileFooter component.', () => {
  const component = renderer.create(<ProfileFooter />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Render ProfileFooter component after 10s.', () => {
  const component = renderer.create(<ProfileFooter />)
  act(() => {
    jest.runTimersToTime(10000)
  })
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Render ProfileFooter component.', () => {
  const component = renderer.create(<ProfileFooter />)
  act(() => {
    component.unmount()
  })
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Render ProfileFooter component (cancelled) after 10s.', () => {
  const component = renderer.create(<ProfileFooter />)
  act(() => {
    jest.runTimersToTime(5000)
    component.unmount()
  })
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Render ProfileFooter component (cancelled) after 10s.', () => {
  const component = renderer.create(<ProfileFooter />)
  act(() => {
    jest.runTimersToTime(2001)
  })
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
