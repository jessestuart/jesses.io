/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const { initSentry } = require('./src/services/sentry')

const { GATSBY_ENV } = process.env

initSentry({ environment: GATSBY_ENV })
