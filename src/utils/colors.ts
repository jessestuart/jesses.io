import { TinyColor as Color } from '@ctrl/tinycolor'

import gray from 'gray-percentage'

interface ColorMap {
  [colorName: string]: string
}

interface GrayColorMap extends ColorMap {
  calm: string
}

export interface ColorsTheme {
  bgDark: string
  defaultHover: string
  defaultLink: string
  gray: GrayColorMap
  primary: string
  secondary: ColorMap
  textDark: string
  textDarkMuted: string
  textLight: string
  textLightMuted: string
  textMediumMuted: string
}

// Primary accent color.
const primary = '#ff3a5c'

const secondaryColors: ColorMap = {
  dark5: '#331d5b',
  light0: '#fbfafc',
  light5: '#b39cdb',
  light7: '#9475cc',
  main: '#673ab7',
}

const colors: ColorsTheme = Object.freeze({
  primary,
  secondary: secondaryColors,

  bgDark: 'rgb(55, 59, 70)',

  gray: {
    calm: gray(90, 'cool'),
  },

  defaultHover: new Color(secondaryColors.light7)
    .setAlpha(0.8)
    .toPercentageRgbString(),

  defaultLink: new Color(primary).setAlpha(0.8).toPercentageRgbString(),

  textDark: 'rgba(0, 0, 0, 0.8)',
  textDarkMuted: 'rgba(0, 0, 0, 0.6)',
  textLight: 'hsla(0,0%,100%,.8)',
  textLightMuted: 'rgba(220, 220, 220, .9)',
  textMediumMuted: 'rgba(0, 0, 0, 0.7)',
})

export default colors
