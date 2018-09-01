import React from 'react'
import renderer from 'react-test-renderer'
import BlogHeader from './BlogHeader'

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
