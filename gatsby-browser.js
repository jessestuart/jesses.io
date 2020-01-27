/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react'

import Layout from './src/components/Layout'

// eslint-disable-next-line
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
