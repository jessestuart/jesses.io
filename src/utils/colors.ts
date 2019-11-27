import { TinyColor as Color } from '@ctrl/tinycolor'

import gray from 'gray-percentage'

interface ColorMap {
  [colorName: string]: string
}

interface GrayColorMap extends ColorMap {
  dark: string
  copy: string
  calm: string
}

export interface ColorsTheme {
  bgDark: string
  defaultHover: string
  defaultLink: string
  gray: GrayColorMap
  primary: ColorMap
  secondary: ColorMap
  ui: ColorMap
}

const primaryColors = {
  // Main primary.
  main: '#ff3a5c',
}

const secondaryColors = {
  dark5: '#331d5b',
  light0: '#fbfafc',
  light5: '#b39cdb',
  light7: '#9475cc',
  main: '#673ab7',
}

const colors: ColorsTheme = Object.freeze({
  primary: primaryColors,
  secondary: secondaryColors,

  bgDark: 'rgb(55, 59, 70)',

  ui: {
    bright: '#ffc9d2',
    light: '#f5f3f7',
    whisper: '#fbfafc',
  },

  gray: {
    calm: gray(80, 'cool'),
    dark: gray(8, 270),
  },

  defaultHover: new Color(secondaryColors.light7)
    .setAlpha(0.8)
    .toPercentageRgbString(),

  defaultLink: new Color(primaryColors.main)
    .setAlpha(0.8)
    .toPercentageRgbString(),
})

export default colors
