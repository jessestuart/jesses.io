import classNames from 'classnames'
import _ from 'lodash'
import React from 'react'
import { Calendar } from 'react-feather'
import voca from 'voca'

import StyledLink from '../StyledLink/StyledLink'

interface Props {
  className?: string
  date?: string
  children: string
  link?: string
  // @Deprecated (?)
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
  // const pathname = _.get(location, 'pathname')
  const headerID = _.isEmpty(link) ? voca.slugify(title) : link
  const headerLink = link || `/${location.pathname}#${headerID}`

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
        <p className="f6 mv2 flex items-center">
          <Calendar
            className="header-primary mr2"
            style={{ maxWidth: '15px' }}
          />
          {date}
        </p>
      )}
    </>
  )
}

export default BlogHeader
