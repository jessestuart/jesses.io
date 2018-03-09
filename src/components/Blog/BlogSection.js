/* @flow */
import React from 'react'

import BlogHeader from './BlogHeader'

type Props = {
  children: any,
  date: string,
  title?: string,
  slug: string,
  location: {
    pathname: string,
  },
}

const BlogSection = ({ children, date, slug, title }: Props) => (
  <section key={slug} className="mw7 center flex-body-expand">
    <BlogHeader date={date} link={slug} location={location}>
      {title || slug}
    </BlogHeader>
    {children}
  </section>
)

export default BlogSection
