import _ from 'lodash'

import Colors from 'utils/colors'
import preset from '@rebass/preset'

// export const breakpoints = ['40em', '52em', '64em']

export const colors = {
  ...Colors,
  bgDark: Colors.bgDark,
  neutral: 'rgba( 0, 0, 0, 0.1)',
  textDark: 'rgba(0, 0, 0, 0.8)',
  textMediumMuted: 'rgba(0, 0, 0, 0.7)',
  textDarkMuted: 'rgba(0, 0, 0, 0.6)',
  textLight: 'rgba(255, 255, 255, .8)',
  textLightMuted: 'rgba(220, 220, 220, .9)',
}

// export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64]

export const fonts = {
  monospace: 'Fira Mono',
  body: 'Lato, system-ui, sans-serif',
  heading: 'Alegreya Sans',
  serif: 'Spectral, serif',
  smallcaps: 'Alegreya Sans SC',
  // smallcaps: "'Alegreya Sans SC', 'Alegreya Sans', sans-serif",
}

export const shadows = {
  large: '0 0 12px 12px rgba(40, 40, 40, 0.6)',
  small: '0 0 4px 4px rgba(40, 40, 40, 0.6)',
}

// export const space = [0, 4, 8, 16, 32, 64, 128, 256]

const Theme = _.merge(preset, {
  // breakpoints,
  colors,
  fonts,
  shadows,
  // space,
})

console.log({ Theme })

export default Theme
