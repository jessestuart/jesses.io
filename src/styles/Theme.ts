import 'typeface-alegreya-sans'
import 'typeface-alegreya-sans-sc'
import 'typeface-fira-mono'
import 'typeface-lato'
import 'typeface-spectral'

import 'js-tachyons'

export const breakpoints = ['40em', '52em', '64em']

export const colors = {
  neutral: 'rgba( 0, 0, 0, 0.1)',
  text: 'rgba(0, 0, 0, 0.8)',
  textMuted: 'rgba(0, 0, 0, 0.6)',
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
  sans: [
    'Lato',
    'system-ui',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ],
  serif: "'Spectral', 'Georgia', 'Times New Roman', 'Times', 'serif'",
  smallCaps: "'Alegreya Sans SC', sans-serif",
  // serif: ['Spectral', 'Georgia', 'Times New Roman', 'Times', 'serif'].join(','),
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
