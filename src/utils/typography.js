/* @flow */
import Typography from 'typography'
import CodePlugin from 'typography-plugin-code'
import _ from 'lodash'
import fp from 'lodash/fp'

import color from 'onecolor'
import colors from './colors'

import 'typeface-alegreya-sans'
import 'typeface-alegreya-sans-sc'
import 'typeface-lato'
import 'typeface-spectral'
import 'typeface-roboto-mono'

const defaultLinkColor = color(colors.secondary.light7)
  .alpha(0.8)
  .cssa()

const defaultHoverColor = color(colors.primary.main)
  .alpha(0.8)
  .cssa()

const pseudoUnderline = {
  textDecoration: 'none',
  fontWeight: 'bold',
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
  'Space Mono',
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
  fontFamily: _.concat(['Lato'], sansSerifFontFamilies),
  bodyFontFamily: baseFontFamilyList,
  headerFontFamily: _.concat(['Alegreya Sans'], sansSerifFontFamilies),
  monospaceFontFamily: monospaceFontFamilies,
  baseFontSize: `18px`,
  baseLineHeight: 1.4,
  headerLineHeight: 1.075,
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
    code: {
      fontFamily: ['Roboto Mono', 'Consolas', 'monospace'].join(','),
      fontSize: '0.9rem !important',
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
    'article a': {
      ...pseudoUnderline,
      color: colors.accent,
    },
    'article a::before': {
      '-webkit-transform': 'scaleX(0)',
      '-webkit-transition': 'all 0.25s ease-in-out 0s',
      backgroundColor: `${defaultHoverColor}`,
      bottom: '-2px',
      content: '',
      height: '2px',
      left: '0',
      position: 'absolute',
      transform: 'scaleX(0)',
      transition: 'all 0.25s ease-in-out 0s',
      visibility: 'hidden',
      width: '100%',
    },
    'article a:hover::before': {
      '-webkit-transform': 'scaleX(1)',
      transform: 'scaleX(1)',
      visibility: 'visible',
    },
    'article a.anchor': {
      borderBottom: 'none',
      boxShadow: 'none',
      color: 'inherit',
      fill: colors.primary.main,
      textDecoration: 'none',
    },
  }),
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
