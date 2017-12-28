import React from 'react'

import { SiteHeader } from '../components'

import 'prismjs/themes/prism.css'

const Template = ({ children, location }) => (
  <div
    style={{
      display: 'grid',
      gridGap: '1vw',
      gridTemplateColumns: 'repeat(10, 9vw)',
    }}
  >
    <SiteHeader />
    <div>foo</div>
    <div style={{ gridColumn: '3 / 9' }}>{children()}</div>
  </div>
)

export default Template
