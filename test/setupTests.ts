import _ from 'lodash'
import 'styled-components'

import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

window.matchMedia = jest.fn().mockImplementation((query) => {
  return {
    addEventListener: jest.fn(),
    addListener: jest.fn(), // deprecated
    dispatchEvent: jest.fn(),
    matches: false,
    media: query,
    onchange: null,
    removeEventListener: jest.fn(),
    removeListener: jest.fn(), // deprecated
  }
})

// Gatsby's `<Link>` overrides:
// Gatsby defines a global called ___loader to prevent its method calls from
// creating console errors.
// @ts-ignore
global.___loader = {
  enqueue: _.noop,
  hovering: _.noop,
}
