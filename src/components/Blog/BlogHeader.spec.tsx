import React from 'react'
import renderer from 'react-test-renderer'

import BlogHeader from './BlogHeader'

test('Render BlogHeader component.', () => {
  const dateISO = '2018-01-01'
  const tree = renderer
    .create(
      <BlogHeader date={dateISO} link={`/${dateISO}`}>
        FooBar
      </BlogHeader>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('Render BlogHeader component w/ null link.', () => {
  const dateISO = '2018-01-01'
  const tree = renderer
    .create(
      <BlogHeader date={dateISO} title="About">
        FooBar
      </BlogHeader>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
