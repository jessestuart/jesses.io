/* @flow */
import _ from 'lodash'
import Typography from 'typography'

import 'typeface-alegreya-sans'
import 'typeface-lato'
import 'typeface-open-sans'
import 'typeface-spectral'

const fontWeights = _.map(_.range(300, 800, 100), String)

const typography = new Typography(
  _.assign(
    {},
    {
      bodyFontFamily: ['Lato', 'sans-serif'],
      headerFontFamily: ['Spectral', 'serif'],
      fontFamily: ['Lato', 'sans-serif'],
      googleFonts: [
        {
          name: 'Lato',
          styles: fontWeights,
        },
        {
          name: 'Spectral',
          styles: fontWeights,
        },
        {
          name: 'Source Sans Pro',
          styles: fontWeights,
        },
        {
          name: 'Open Sans',
          styles: fontWeights,
        },
        {
          name: 'Alegreya Sans',
          styles: fontWeights,
        },
        // {
        //   name: 'Arvo',
        //   styles: ['400', '400i', '700', '700i'],
        // },
      ],
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
