/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import 'js-tachyons'
import 'typeface-alegreya-sans'
import 'typeface-alegreya-sans-sc'
import 'typeface-fira-mono'
import 'typeface-lato'
import 'typeface-spectral'

import 'styles/base.css'

import React from 'react'

import Layout from './src/layouts'

// eslint-disable-next-line
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
