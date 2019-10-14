// import 'typeface-alegreya-sans'
// import 'typeface-alegreya-sans-sc'
// import 'typeface-fira-mono'
// import 'typeface-lato'
// import 'typeface-spectral'

// import 'js-tachyons'

import Colors from 'utils/colors'

export const breakpoints = ['40em', '52em', '64em']

export const colors = {
  ...Colors,
  bgDark: Colors.bgDark,
  neutral: 'rgba( 0, 0, 0, 0.1)',
  textDark: 'rgba(0, 0, 0, 0.8)',
  textDarkMuted: 'rgba(0, 0, 0, 0.6)',
  textLight: 'rgba(255, 255, 255, .8)',
  textLightMuted: 'rgba(220, 220, 220, .9)',
}

export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64]

export const fonts = {
  monospace: [
    'Fira Mono',
    'SFMono-Regular',
    'Menlo',
    'Monaco',
    'Consolas',
    'Liberation Mono',
    'Courier New',
    'monospace',
  ],
  body: 'Lato, system-ui, sans-serif',
  heading: 'Alegreya Sans',
  serif: 'Spectral, serif',
  smallcaps: "'Alegreya Sans SC', 'Alegreya Sans', sans-serif",
}

export const shadows = {
  large: '0 0 24px rgba(0, 0, 0, .125)',
  small: '0 0 4px rgba(0, 0, 0, .125)',
}

export const space = [0, 4, 8, 16, 32, 64, 128, 256]

export default {
  breakpoints,
  colors,
  fontSizes,
  fonts,
  shadows,
  space,
}
