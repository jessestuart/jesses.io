/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
const { initSentry } = require('./src/services/sentry')

initSentry({ environment: process.env.GATSBY_ENV })
