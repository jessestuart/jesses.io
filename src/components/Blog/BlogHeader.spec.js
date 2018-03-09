import React from 'react'
import BlogHeader from './BlogHeader'
import renderer from 'react-test-renderer'

test('Render BlogHeader component.', () => {
  const dateISO = '2018-01-01'
  const tree = renderer
    .create(
      <BlogHeader date={dateISO} slug={dateISO}>
        FooBar
      </BlogHeader>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
