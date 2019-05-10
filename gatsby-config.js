const _ = require('lodash')

const AWS = require('aws-sdk')

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
})

// If we detect if we're running in a CI environment, only a few sample
// photos will be downloaded from a test bucket, rather the the full
// high-resolution photos displayed in production. This is simply to
// save on AWS costs :)
const GatsbyEnv = {
  Development: 'Deveopment',
  Production: 'Production',
  Staging: 'Staging',
}

const GATSBY_ENV = GatsbyEnv[process.env.GATSBY_ENV]
const AUTHOR_NAME = 'Jesse Stuart'
const SITE_NAME = 'jesses.io'

const IS_DEV = GATSBY_ENV !== 'Production'

const siteMetadata = {
  author: AUTHOR_NAME,
  description: 'I build things and thoughts.',
  siteUrl: `https://${SITE_NAME}`,
  title: AUTHOR_NAME,
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
    bucketName: IS_DEV ? 'js-photos-dev' : 'jesse.pics',
    domain: IS_DEV ? null : 'jesse.pics.s3.amazonaws.com',
    protocol: 'http',
  },
}

/* eslint-disable @typescript-eslint/camelcase */
const manifestPlugin = {
  resolve: 'gatsby-plugin-manifest',
  options: {
    name: 'Jesse Stuart',
    short_name: 'jesses.io',
    start_url: '/',
    background_color: '#373b46',
    theme_color: '#673ab7',
    display: 'standalone',
    icon: './src/components/Icons/logo_dark.svg',
  },
}
/* eslint-enable @typescript-eslint/camelcase */

const plugins = _.compact([
  'gatsby-plugin-typescript',
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
  // ===========
  // Miscellany.
  // ===========
  'gatsby-plugin-remove-trailing-slashes',
  // 'gatsby-plugin-feed',
  'gatsby-plugin-lodash',
  'gatsby-plugin-offline',
  'gatsby-plugin-netlify-cache',
  // This ostensibly has to go at the end of the plugins declaration array.
  'gatsby-plugin-netlify',
])

module.exports = {
  siteMetadata,
  plugins,
}
