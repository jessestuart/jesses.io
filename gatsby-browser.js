/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const React = require('react')
const { initSentry } = require('./src/services/sentry')

require('typeface-alegreya-sans')
require('typeface-alegreya-sans-sc')
require('typeface-fira-mono')
require('typeface-lato')
require('typeface-spectral')
require('js-tachyons')

const { GATSBY_ENV } = process.env

initSentry({ environment: GATSBY_ENV })

const Theme = require('./src/styles/Theme').default

const Layout = require('./src/components/Layout').default

const { ThemeProvider } = require('styled-components')

// eslint-disable-next-line
exports.wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get including
  // location, data, etc - you don't need to pass it
  return (
    <ThemeProvider theme={Theme}>
      <Layout {...props}>{element}</Layout>
    </ThemeProvider>
  )
}
