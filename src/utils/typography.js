/* @flow */
import Typography from 'typography'

import 'typeface-alegreya-sans'
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
        'a.gatsby-resp-image-link': {
          boxShadow: 'none',
        },
        blockquote: {
          fontStyle: 'inherit',
          textAlign: 'justify',
          textIndent: '2em',
        },
        code: {
          fontFamily: ['Andale Mono', 'monospace'].join(','),
          fontWeight: 500,
        },
        'p > code': {
          background: '#f3f0ee',
          fontSize: '0.95em',
          fontWeight: 400,
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
