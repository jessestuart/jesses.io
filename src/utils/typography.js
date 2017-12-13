import _ from 'lodash'
import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

const fontWeights = _.map(_.range(300, 700, 200), String)

const typography = new Typography(
  _.assign({}, Wordpress2016, {
    bodyFontFamily: ['Lato', 'sans-serif'],
    headerFontFamily: ['Spectral', 'serif'],
    fontFamily: ['Lato', 'sans-serif'],
    googleFonts: [
      {
        name: 'Fira Mono',
        styles: ['400', '500'],
      },
      {
        name: 'Lato',
        styles: fontWeights,
      },
      {
        name: 'Spectral',
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
        fontFamily: ['Fira Mono', 'monospace'].join(','),
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
  })
)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
