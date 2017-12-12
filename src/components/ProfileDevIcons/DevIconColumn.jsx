import React from 'react'
import PropTypes from 'prop-types'

export default function DevIconColumn(props) {
  const { label, useWordmark } = props

  return (
    <div className="col-lg-3 col-3">
      <div
        className="service-box service-box-devicon"
        data-placement="top"
        data-toggle="tooltip"
        title={label}
      >
        <i
          className={`devicon-${label}-plain${
            useWordmark ? '-wordmark' : ''
          } hvr-grow`}
        />
      </div>
    </div>
  )
}

DevIconColumn.propTypes = {
  label: PropTypes.string.isRequired,
  useWordmark: PropTypes.bool.isRequired,
}
