const _ = require('lodash')

const AWS = require('aws-sdk')

// If we detect if we're running in a CI environment, only a few sample
// photos will be downloaded from a test bucket, rather the the full
// high-resolution photos displayed in production. This is simply to
// save on AWS costs :)
const GatsbyEnv = {
  Development: 'Development',
  Production: 'Production',
  Staging: 'Staging',
}

const getSourceS3ConfigForEnvironment = env => {
  switch (_.startCase(env)) {
    // TODO: Re-add this after minio.jesses.io is set back up.
    case GatsbyEnv.Development:
      return {
        bucketName: 'js-photos-dev',
        domain: 'minio.jesses.io',
        protocol: 'http',
      }
    case GatsbyEnv.Staging: {
      return { bucketName: 'js-photos-dev' }
    }
    case GatsbyEnv.Production: {
      return { bucketName: 'jesse.pics', protocol: 'http' }
    }
  }
}

const GATSBY_ENV = _.startCase(GatsbyEnv[process.env.GATSBY_ENV])
const AUTHOR_NAME = 'Jesse Stuart'
const SITE_NAME = 'jesses.io'

const IS_LOCAL = GATSBY_ENV === GatsbyEnv.Development

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

const googleAnalyticsPlugin = {
  resolve: 'gatsby-plugin-google-analytics',
  options: {
    trackingId: 'UA-113515971-1',
  },
}

const ACCESS_KEY_ID = IS_LOCAL
  ? process.env.MINIO_ACCESS_KEY
  : process.env.AWS_ACCESS_KEY
const SECRET_KEY_ID = IS_LOCAL
  ? process.env.MINIO_SECRET_KEY
  : process.env.AWS_SECRET_KEY
AWS.config.update({
  accessKeyId: ACCESS_KEY_ID,
  secretAccessKey: SECRET_KEY_ID,
})
const sourceS3 = {
  resolve: 'gatsby-source-s3-image',
  options: getSourceS3ConfigForEnvironment(GATSBY_ENV),
}

const layoutPlugin = {
  resolve: 'gatsby-plugin-layout',
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

let plugins = _.compact([
  'gatsby-plugin-typescript',
  'gatsby-plugin-theme-ui',
  'gatsby-plugin-root-import',
  // ====================================
  // Gotta load those sweet, sweet files.
  // ====================================
  sourceFilesystem,
  sourceFilesystemImages,
  sourceS3,
  layoutPlugin,
  // =======================================================================
  // Add in React Helmet and React 16 support until Gatsby v2 is released.
  // =======================================================================
  'gatsby-plugin-react-helmet',
  // ========================
  // Styling-related plugins.
  // ========================
  'gatsby-plugin-styled-components',
  // typographyPlugin,
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
  'gatsby-plugin-lodash',
])

if (!IS_LOCAL) {
  //=================================
  // Production/Staging-only plugins.
  //=================================
  plugins = _.concat(plugins, [
    // 'gatsby-plugin-offline',
    manifestPlugin,
    'gatsby-plugin-netlify',
    'gatsby-plugin-netlify-cache',
  ])
}

module.exports = {
  siteMetadata,
  plugins,
}
