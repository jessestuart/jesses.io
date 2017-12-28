import React from 'react'
// import renderer from 'react-test-renderer'
import { configure, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import adapter from 'enzyme-adapter-react-15'

import { Avatar } from '../../src/components'

describe('Sanity test components.', () => {
  configure({ adapter })

  it('Renders Avatar component.', () => {
    // const div = document.createElement('div')
    const avatar = mount(<Avatar />)
    expect(toJson(avatar)).toMatchSnapshot()
    // ReactDOM.render(<Avatar />, div)
    // const tree = renderer.create(<Avatar />).toJSON()
    // expect(tree).toMatchSnapshot()
  })
})
