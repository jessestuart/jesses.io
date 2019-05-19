const Sentry = require('@sentry/browser')
const _ = require('lodash')

// Just use the package.json version number as the Sentry release param.
// Keep in mind this auto-incremented by semantic-release on deploys, so
// is a pretty good stand-in here.
const version = require('../../package.json').version

// This is public anyway, so no sense hiding it in an env var. ¯\_(ツ)_/¯
const SENTRY_DSN = 'https://5f7a25ceef2148bf946ffd3b8cd781c3@sentry.io/1340322'

export const initSentry = _.once(({ environment }) => {
  Sentry.init({
    dsn: SENTRY_DSN,
    environment,
    release: version,
  })
})
