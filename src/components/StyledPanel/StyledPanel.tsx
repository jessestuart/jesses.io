import styled from 'styled-components'

import colors from '../../utils/colors'

const StyledPanel = styled.section.attrs({
  className: 'br2 center mv5-ns mw7 mw8-ns pa5-ns',
})`
  background-color: ${colors.secondary.light0};
  box-shadow: rgba(25, 17, 34, 0.1) 0px 3px 10px;
  @media (max-width: 45em) {
    margin: 1rem !important;
    padding: 1rem 2rem !important;
  }
`

export { StyledPanel }

export default StyledPanel
