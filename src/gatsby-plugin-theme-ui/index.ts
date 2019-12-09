import _ from 'lodash'
import preset from '@rebass/preset'

import colors from 'utils/colors'

export const fonts = {
  body: 'Lato, system-ui, sans-serif',
  heading: 'Alegreya Sans',
  monospace: 'Fira Mono, Menlo, Consolas, monospace',
  serif: 'Spectral, serif',
  smallcaps: 'Alegreya Sans SC',
}

export const shadows = {
  large: '0 0 12px 12px rgba(40, 40, 40, 0.6)',
  small: '0 0 4px 4px rgba(40, 40, 40, 0.6)',
}

export const fontSizes = [12, 14, 16, 20, 24, 28, 36, 44]

export const breakpoints = ['45em', '60em', '75em']

const Theme = _.merge(preset, {
  breakpoints,
  colors,
  fontSizes,
  fonts,
  shadows,
})

export default Theme
