import React from 'react'
import renderer from 'react-test-renderer'

import { ProfileIntro } from '../../src/components'

describe('Sanity test components.', () => {
  it('Renders ProfileIntro component.', () => {
    // const div = document.createElement('div')
    // ReactDOM.render(<Avatar />, div)
    const tree = renderer.create(<ProfileIntro />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
