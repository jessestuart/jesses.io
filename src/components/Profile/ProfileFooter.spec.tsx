import React from 'react'
import { ProfileFooter } from './ProfileFooter'
import renderer from 'react-test-renderer'

jest.useFakeTimers()

test('Render ProfileFooter component.', async () => {
  const component = await renderer.create(<ProfileFooter />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Render ProfileFooter component after 10s.', async () => {
  const component = await renderer.create(<ProfileFooter />)

  let tree = component.toJSON()
  await jest.runTimersToTime(10000)
  expect(setInterval).toHaveBeenCalledTimes(2)
  expect(tree).toMatchSnapshot()
})

test('Render ProfileFooter component.', async () => {
  const component = await renderer.create(<ProfileFooter />)
  component.unmount()
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Render ProfileFooter component (cancelled) after 10s.', async () => {
  const component = await renderer.create(<ProfileFooter />)
  await jest.runTimersToTime(5000)
  await component.unmount()

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
