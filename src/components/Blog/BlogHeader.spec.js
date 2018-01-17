import React from 'react'
import BlogHeader from './BlogHeader'
import renderer from 'react-test-renderer'
import { DateTime } from 'luxon'

test('Render BlogHeader component.', () => {
  const dateISO = '2018-01-01'
  const datetime = DateTime.fromISO(dateISO)
  const tree = renderer
    .create(<BlogHeader date={datetime} slug={dateISO} title={'FooBar'} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
