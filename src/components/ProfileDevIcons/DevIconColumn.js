import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const DevIconColumn = props => {
  const { className, label, style, useWordmark } = props

  const iconClass = `devicon-${label}-plain${useWordmark ? '-wordmark' : ''}`

  return (
    <div
      style={style}
      className={classNames('white pv3 flex justify-center', className)}
    >
      <i className={`f1 ${iconClass} hvr-grow`} />
    </div>
  )
}

DevIconColumn.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  style: PropTypes.object,
  useWordmark: PropTypes.bool.isRequired,
}

export default DevIconColumn
