import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled, { css } from 'styled-components'

const DevIconColumn = props => {
  const { className, style, DevIcon } = props

  return (
    <div
      style={style}
      className={classNames('pa4 flex justify-center items-center', className)}
    >
      <DevIcon width="100%" height="100%" className="hvr-grow" />
    </div>
  )
}

// const DevIconColumnStyled = styled.div.attrs({
//   className: 'pa4 flex justify-center items-center',
// })`
//   ${props =>
//     css`
//       ${props.style};
//       background: white;
//       color: palevioletred;
//     `};
// `

DevIconColumn.propTypes = {
  className: PropTypes.string,
  DevIcon: PropTypes.any,
  style: PropTypes.object,
}

export default DevIconColumn
