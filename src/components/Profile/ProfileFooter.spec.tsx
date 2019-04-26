import React from 'react'
import renderer from 'react-test-renderer'

import ProfileFooter from './ProfileFooter'

jest.useFakeTimers()

test('Render ProfileFooter component.', () => {
  const component = renderer.create(<ProfileFooter />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Render ProfileFooter component after 10s.', () => {
  const component = renderer.create(<ProfileFooter />)

  const tree = component.toJSON()
  jest.runTimersToTime(10000)
  expect(tree).toMatchSnapshot()
})

test('Render ProfileFooter component.', () => {
  const component = renderer.create(<ProfileFooter />)
  component.unmount()
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Render ProfileFooter component (cancelled) after 10s.', () => {
  const component = renderer.create(<ProfileFooter />)
  jest.runTimersToTime(5000)
  component.unmount()

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
