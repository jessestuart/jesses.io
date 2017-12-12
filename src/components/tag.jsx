import React from 'react'
import Link from 'gatsby-link'

import './tag.scss'

const Tag = props => {
  const { display, name } = props
  return (
    <div>
      <Link to={`/tags/${name}`} className="tag-content">
        {display || name}
      </Link>
    </div>
  )
}

export default Tag
