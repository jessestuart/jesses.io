#!/bin/bash
# export SENTRY_AUTH_TOKEN=$SENTRY_AUTH_TOKEN
# export SENTRY_ORG=jesses

# VERSION=$(sentry-cli releases propose-version)

# # Create a release
# sentry-cli releases new -p jesses-io "$VERSION"

# # Associate commits with the release
# sentry-cli releases set-commits --auto "$VERSION"

# sentry-cli releases deploys "$VERSION" new -e Production

set -eu

export SENTRY_DSN="https://5f7a25ceef2148bf946ffd3b8cd781c3@sentry.io/1340322"
export SENTRY_AUTH_TOKEN=$SENTRY_AUTH_TOKEN
export SENTRY_ORG=jesses
export SENTRY_PROJECT=jesses-io

function create_release() {
  version=$1
  # Create a release.
  sentry-cli releases -p jesses-io new "$version"
  # Associate commits with the release.
  sentry-cli releases -p jesses-io set-commits --auto "$version"
}

GIT_HASH="jesses.io@$(sentry-cli releases propose-version)"
GIT_TAG="jesses.io@$(git tags --list | tail -n1)"

create_release "$GIT_HASH"
create_release "$GIT_TAG"

sentry-cli releases -p jesses-io deploys "$GIT_TAG" new -e Production
