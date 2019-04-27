import classNames from 'classnames'
import _ from 'lodash'
import React from 'react'
import { Calendar } from 'react-feather'
import voca from 'voca'

import StyledLink from 'components/StyledLink/StyledLink'

interface Props {
  className?: string
  date?: string
  children: string
  link?: string
  location?: {
    pathname: string
  }
  title?: string
}

const BlogHeader = ({
  children,
  className,
  date,
  link,
  title,
  location,
}: Props) => {
  // If we pass in a link, just href to that. Otherwise generate a
  // `/path#section-header`-style ID for e.g., linking to section headers.
  const pathname: string = _.get(location, 'pathname', '')
  const headerID: string = link || voca.slugify(title)
  const headerLink: string = link || `${pathname || ''}#${headerID}`

  return (
    <>
      <h2
        className={classNames(
          className,
          'alegreya-sans f2 fw5 header-primary mt4',
        )}
        id={headerID}
      >
        <StyledLink href={headerLink}>{children}</StyledLink>
      </h2>
      {date && (
        <p className="f6 flex items-center mv2">
          <Calendar
            className="header-primary mr2"
            style={{ maxWidth: '15px' }}
          />
          <span className="silver">{date}</span>
        </p>
      )}
    </>
  )
}

export default BlogHeader
