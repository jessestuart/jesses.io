import React from 'react'

import { SiteHeader } from '../components'

import 'prismjs/themes/prism.css'

const Template = ({ children, location }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(10, 9vw)',
      gridGap: '1vw',
    }}
  >
    <div>
      <SiteHeader />
    </div>
    <div style={{ gridColumn: '3 / 9' }}>{children()}</div>
  </div>
)
export default Template

// class Template extends React.Component {
//   render() {
//     // eslint-disable-next-line
//     const { children, location } = this.props

//     return (
//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(10, 9vw)',
//           gridGap: '1vw',
//         }}
//       >
//         <div style={{ gridColumn: '1 / 11' }}>
//           <SiteHeader />
//         </div>
//         <div style={{ gridColumn: '3 / 9' }}>{children()}</div>
//       </div>
//     )
//   }
// }

// export default Template
