const _ = require('lodash')

const version = require('./package.json').version

// If we detect if we're running in a CI environment, only a few sample
// photos will be downloaded from a test bucket, rather the the full
// high-resolution photos displayed in production. This is simply to
// save on AWS costs :)
const GATSBY_ENV = process.env.GATSBY_ENV
// const IS_DEV = GATSBY_ENV !== 'Production'

// We use `NODE_ENV` to disable Sentry logging in development.
const IS_PROD = process.env.NODE_ENV === 'production'

const siteMetadata = {
  author: 'Jesse Stuart',
  description: 'I build things and thoughts.',
  siteUrl: 'https://jesses.io',
  title: 'Jesse Stuart',
}

const sourceFilesystem = {
  resolve: 'gatsby-source-filesystem',
  options: {
    path: `${__dirname}/src/pages`,
    name: 'pages',
  },
}
const sourceFilesystemImages = {
  resolve: 'gatsby-source-filesystem',
  options: {
    path: `${__dirname}/src/images`,
    name: 'images',
  },
}

const transformerRemark = {
  resolve: 'gatsby-transformer-remark',
  options: {
    plugins: [
      {
        resolve: 'gatsby-remark-images',
        options: {
          maxWidth: 768,
        },
      },
      'gatsby-remark-autolink-headers',
      'gatsby-remark-copy-linked-files',
      'gatsby-remark-prismjs',
      'gatsby-remark-smartypants',
    ],
  },
}

const typographyPlugin = {
  resolve: 'gatsby-plugin-typography',
  options: {
    pathToConfigModule: 'src/utils/typography',
  },
}

const googleAnalyticsPlugin = {
  resolve: 'gatsby-plugin-google-analytics',
  options: {
    trackingId: 'UA-113515971-1',
  },
}

// const sourceS3 = {
//   resolve: 'gatsby-source-s3-image',
//   options: {
//     bucketName: IS_DEV ? 'js-photos-dev' : 'jesse.pics',
//     domain: IS_DEV ? null : 'jesse.pics.s3.amazonaws.com',
//     protocol: 'http',
//   },
// }

const sentryPlugin = {
  resolve: 'gatsby-plugin-sentry',
  options: {
    dsn: 'https://5f7a25ceef2148bf946ffd3b8cd781c3@sentry.io/1340322',
    environment: GATSBY_ENV,
    version,
  },
}

const plugins = _.compact([
  // ====================================
  // Gotta load those sweet, sweet files.
  // ====================================
  sourceFilesystem,
  sourceFilesystemImages,
  // sourceS3,
  // =======================================================================
  // Add in React Helmet and React 16 support until Gatsby v2 is released.
  // =======================================================================
  'gatsby-plugin-react-helmet',
  // ========================
  // Styling-related plugins.
  // ========================
  'gatsby-plugin-styled-components',
  typographyPlugin,
  // ==========================================
  // Transformers for Markdown and image files.
  // ==========================================
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  transformerRemark,
  // ==========
  // Analytics.
  // ==========
  googleAnalyticsPlugin,
  IS_PROD ? sentryPlugin : null,
  // ===========
  // Miscellany.
  // ===========
  'gatsby-plugin-remove-trailing-slashes',
  'gatsby-plugin-feed',
  'gatsby-plugin-lodash',
  // 'gatbsy-plugin-postcss',
  // This ostensibly has to go at the end of the plugins declaration array.
  'gatsby-plugin-netlify',
])

module.exports = {
  siteMetadata,
  plugins,
}
