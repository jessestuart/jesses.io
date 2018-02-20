/* @flow */
import _ from 'lodash'
import color from 'onecolor'
import fp from 'lodash/fp'
import Typography from 'typography'

import 'typeface-alegreya-sans'
import 'typeface-fira-mono'
import 'typeface-lato'
import 'typeface-spectral'

import CodePlugin from 'typography-plugin-code'

import colors from './colors'

const defaultLinkColor = color(colors.secondary.light7)
  .alpha(0.8)
  .cssa()

// const defaultHoverColor = color(colors.primary.main)
//   .alpha(0.8)
//   .cssa()

const pseudoUnderline = {
  textDecoration: 'none',
  borderBottom: `2px solid ${defaultLinkColor}`,
  position: 'relative',
}

const sansSerifFontFamilies = [
  '-apple-system',
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
]

const serifFontFamilies = [
  'Spectral',
  'Georgia',
  'Times New Roman',
  'Times',
  'serif',
]

const monospaceFontFamilies = [
  'Fira Mono',
  'SFMono-Regular',
  'Menlo',
  'Monaco',
  'Consolas',
  'Liberation Mono',
  'Courier New',
  'monospace',
]

const baseFontFamilyList = _.concat(['Lato'], sansSerifFontFamilies)

const mapFontFamilyListToString: Function = fp.join(',')

const options = {
  fontFamily: baseFontFamilyList,
  bodyFontFamily: baseFontFamilyList,
  headerFontFamily: _.concat(['Alegreya Sans'], sansSerifFontFamilies),
  monospaceFontFamily: monospaceFontFamilies,
  baseFontSize: '16px',
  baseLineHeight: 1.75,
  headerLineHeight: 1.3,
  headerColor: colors.gray.dark,
  bodyColor: colors.gray.copy,
  blockMarginBottom: 0.75,
  scaleRatio: 2,
  plugins: [new CodePlugin()],
  overrideStyles: ({ rhythm, scale }, options) => ({
    blockquote: {
      fontStyle: 'inherit',
      textAlign: 'justify',
      textIndent: '2em',
    },
    '.spectral': {
      fontFamily: mapFontFamilyListToString(serifFontFamilies),
    },
    '.lato': {
      fontFamily: mapFontFamilyListToString(baseFontFamilyList),
    },
    '.code': {
      fontFamily: mapFontFamilyListToString(monospaceFontFamilies),
    },
    '.fira-mono': {
      fontFamily: mapFontFamilyListToString(monospaceFontFamilies),
    },
    '#___gatsby code': {
      fontFamily: mapFontFamilyListToString(monospaceFontFamilies),
      fontWeight: 400,
      textShadow: 'none',
    },
    '.gatsby-highlight > pre': {
      borderRadius: '5px',
    },
    '.token.operator': {
      background: 'inherit !important',
    },
    'blockquote > *not(:last-child)': {
      paddingBottom: '0.5',
    },
    '.pseudo-underline': {
      ...pseudoUnderline,
      fontFamily: options.headerFontFamily.join(','),
    },
    'article a.anchor': {
      borderBottom: 'none',
      boxShadow: 'none',
      color: 'inherit',
      fill: colors.primary.main,
      textDecoration: 'none',
    },
    button: {
      outline: 'none',
    },
  }),
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
