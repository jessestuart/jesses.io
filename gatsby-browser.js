/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import * as Sentry from '@sentry/browser'

Sentry.init({
  dsn: 'https://5f7a25ceef2148bf946ffd3b8cd781c3@sentry.io/1340322',
})
