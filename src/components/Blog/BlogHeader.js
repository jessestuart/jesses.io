import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { Calendar } from 'react-feather'

const BlogHeader = ({ date, slug, title }) => {
  return (
    <Fragment>
      <h2 className="mb2 mt4 f3 fw7 underline header-purple">
        <Link to={slug}>{title}</Link>
      </h2>
      <p className="f6 mv2 flex items-center">
        <Calendar className="header-purple mr2" size="1rem" />
        {date}
      </p>
    </Fragment>
  )
}

BlogHeader.propTypes = {
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default BlogHeader
