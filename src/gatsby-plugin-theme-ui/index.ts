import _ from 'lodash'

import preset from '@rebass/preset'
import Colors from 'utils/colors'

export const fonts = {
  body: 'Lato, system-ui, sans-serif',
  heading: 'Alegreya Sans',
  monospace: 'Fira Mono',
  serif: 'Spectral, serif',
  smallcaps: 'Alegreya Sans SC',
}

export const shadows = {
  large: '0 0 12px 12px rgba(40, 40, 40, 0.6)',
  small: '0 0 4px 4px rgba(40, 40, 40, 0.6)',
}

export const fontSizes = [12, 14, 16, 20, 24, 28, 36, 44]

const Theme = _.merge(preset, {
  colors: Colors,
  fonts,
  fontSizes,
  shadows,
})

export default Theme
