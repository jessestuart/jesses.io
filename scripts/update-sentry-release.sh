#!/bin/sh
export SENTRY_AUTH_TOKEN=$SENTRY_AUTH_TOKEN
export SENTRY_ORG=jesses

VERSION=$(sentry-cli releases propose-version)

# Create a release
sentry-cli releases new -p jesses-io "$VERSION"

# Associate commits with the release
sentry-cli releases set-commits --auto "$VERSION"

sentry-cli releases deploys "$VERSION" new -e Production
