import * as React from 'react'

import * as classNames from 'classnames'
import * as _ from 'lodash'
import { Calendar } from 'react-feather'
import voca from 'voca'

import { StyledLink } from '../StyledLink/StyledLink'

interface Props {
  className?: string
  date?: string
  children: string
  link?: string
  location: {
    pathname: string
  }
}

const BlogHeader = ({ children, className, date, link, location }: Props) => {
  // If we pass in a link, just href to that. Otherwise generate a
  // `/path#section-header`-style ID for e.g., linking to section headers.
  const pathname = _.get(location, 'pathname')
  const headerID = _.isEmpty(link) ? voca.slugify(children) : ''
  const headerLink = _.isEmpty(pathname) ? `/#${headerID}` : link

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
      {_.isNil(date) ? null : (
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
