/* @flow */
import Typography from 'typography'
import CodePlugin from 'typography-plugin-code'
import _ from 'lodash'

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

const sansSerifFallbacks = [
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

const options = {
  plugins: [new CodePlugin()],
  bodyFontFamily: _.concat(['Lato'], sansSerifFallbacks),
  headerFontFamily: _.concat(['Alegreya Sans'], sansSerifFallbacks),
  fontFamily: _.concat(['Lato'], sansSerifFallbacks),
  overrideStyles: ({ rhythm, scale }, options) => ({
    blockquote: {
      fontStyle: 'inherit',
      textAlign: 'justify',
      textIndent: '2em',
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
      fontFamily: options.headerFontFamily.join(`,`),
    },
    'article a': {
      ...pseudoUnderline,
      color: colors.accent,
    },
    'article a::before': {
      content: ' ',
      position: 'absolute',
      width: '100%',
      height: '2px',
      bottom: '-2px',
      left: '0',
      backgroundColor: `${defaultHoverColor}`,
      visibility: 'hidden',
      '-webkit-transform': 'scaleX(0)',
      transform: 'scaleX(0)',
      '-webkit-transition': 'all 0.25s ease-in-out 0s',
      transition: 'all 0.25s ease-in-out 0s',
    },
    'article a:hover::before': {
      visibility: 'visible',
      '-webkit-transform': 'scaleX(1)',
      transform: 'scaleX(1)',
    },
    'article a.anchor': {
      color: `inherit`,
      fill: colors.primary,
      textDecoration: `none`,
      borderBottom: `none`,
      boxShadow: `none`,
    },
  }),
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
