/* @flow */
import React from 'react'

import BlogHeader from './BlogHeader'

type Props = {
  children: any,
  date: string,
  title: string,
  slug: string,
}

const BlogSection = ({ children, date, slug, title }: Props) => (
  <section key={slug} className="mw7 center flex-body-expand">
    <BlogHeader date={date} slug={slug} title={title || slug} />
    {children}
  </section>
)

export default BlogSection
