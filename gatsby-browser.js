/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

require('js-tachyons')
require('typeface-alegreya-sans')
require('typeface-alegreya-sans-sc')
require('typeface-fira-mono')
require('typeface-lato')
require('typeface-spectral')

const React = require('react')

const { initSentry } = require('./src/services/sentry')

const { GATSBY_ENV = 'Development' } = process.env

initSentry({ environment: GATSBY_ENV })

const Theme = require('./src/styles/Theme').default

const Layout = require('./src/components/Layout').default

const { Styled } = require('theme-ui')
const { ThemeProvider } = require('styled-components')

// eslint-disable-next-line
exports.wrapPageElement = ({ element, props }) => {
  return (
    <Styled.root>
      <ThemeProvider theme={Theme}>
        <Layout {...props}>{element}</Layout>
      </ThemeProvider>
    </Styled.root>
  )
}
