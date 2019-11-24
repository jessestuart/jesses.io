import _ from 'lodash'

import Colors from 'utils/colors'
import preset from '@rebass/preset'

export const colors = {
  ...Colors,
  bgDark: Colors.bgDark,
  neutral: 'rgba( 0, 0, 0, 0.1)',
  textDark: 'rgba(0, 0, 0, 0.8)',
  textDarkMuted: 'rgba(0, 0, 0, 0.6)',
  textLight: 'rgba(255, 255, 255, .8)',
  textLightMuted: 'rgba(220, 220, 220, .9)',
  textMediumMuted: 'rgba(0, 0, 0, 0.7)',
}

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
  colors,
  fonts,
  fontSizes,
  shadows,
})

export default Theme
