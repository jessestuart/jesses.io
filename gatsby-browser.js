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

import { initSentry } from './src/services/sentry'

// import Theme from './src/styles/Theme'

const { GATSBY_ENV = 'Development' } = process.env

initSentry({ environment: GATSBY_ENV })

// export const wrapPageElement = ({ element, props }) => (
//   <ThemeProvider theme={Theme}>
//     <element {...props} />
//     <Layout {...props}>{element}</Layout>
//   </ThemeProvider>
// )
