/* @flow */
import { Calendar } from 'react-feather'
import React, { Fragment } from 'react'
import _ from 'lodash'

import classNames from 'classnames'
import voca from 'voca'

import StyledLink from '../StyledLink/StyledLink'

type Props = {
  className?: string,
  date?: string,
  children: string,
  link?: string,
  location: {
    pathname: string,
  },
}

const BlogHeader = ({ children, className, date, link, location }: Props) => {
  // If we pass in a link, just href to that. Otherwise generate a
  // `/path#section-header`-style ID for e.g., linking to section headers.
  const pathname = _.get(location, 'pathname')
  const headerID = _.isEmpty(link) ? voca.slugify(children) : ''
  const headerLink = _.isEmpty(pathname) ? `/#${headerID}` : link

  return (
    <Fragment>
      <h2
        className={classNames(
          className,
          'alegreya-sans f2 fw5 header-primary mt4'
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
    </Fragment>
  )
}

export default BlogHeader
