const _ = require('lodash')

// If we detect if we're running in a CI environment, only a few sample
// photos will be downloaded from a test bucket, rather the the full
// high-resolution photos displayed in production. This is simply to
// save on AWS costs :)
const IS_CI = process.env.GATSBY_ENV === 'ci'

// We use `NODE_ENV` to disable Sentry logging in development.
const IS_PROD = process.env.NODE_ENV === 'production'

const siteMetadata = {
  author: 'Jesse Stuart',
  description: '',
  siteUrl: 'https://jessestuart.com',
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

const sourceS3 = {
  resolve: 'gatsby-source-s3-image',
  options: {
    bucketName: IS_CI ? 'js-photos-dev' : 'jesse.pics',
    domain: IS_CI ? null : 'jesse.pics.s3.amazonaws.com',
    protocol: 'http',
  },
}

const sentryPlugin = {
  resolve: 'gatsby-plugin-sentry',
  options: {
    dsn: 'https://7f22c2cad4c847429110f1657836e280@sentry.jesses.io/2',
  },
}

const plugins = _.compact([
  // ====================================
  // Gotta load those sweet, sweet files.
  // ====================================
  sourceFilesystem,
  sourceFilesystemImages,
  sourceS3,
  // =======================================================================
  // Add in React Helmet and React 16 support until Gatsby v2 is released.
  // =======================================================================
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-react-next',
  // Typescript
  'gatsby-plugin-typescript',
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
  // This ostensibly has to go at the end of the plugins declaration array.
  'gatsby-plugin-netlify',
])

module.exports = {
  siteMetadata,
  plugins,
}
