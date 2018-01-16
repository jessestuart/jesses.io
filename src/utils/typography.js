/* @flow */
import Typography from 'typography'

import 'typeface-alegreya-sans'
import 'typeface-alegreya-sans-sc'
import 'typeface-lato'
import 'typeface-spectral'

const typography = new Typography(
  Object.assign(
    {},
    {
      bodyFontFamily: ['Lato', 'sans-serif'],
      headerFontFamily: ['Spectral', 'serif'],
      fontFamily: ['Lato', 'sans-serif'],
      overrideThemeStyles: ({ rhythm }, options, styles) => ({
        blockquote: {
          fontStyle: 'inherit',
          textAlign: 'justify',
          textIndent: '2em',
        },
        code: {
          textShadow: 'none',
          fontFamily: ['Andale Mono', 'monospace'].join(','),
          fontWeight: 500,
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
      }),
    }
  )
)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
