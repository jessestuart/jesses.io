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
  resolve: 'gatsby-source-s3',
  options: {
    bucketName: 'js-photos',
    domain: 'dsud7k9s6taft.cloudfront.net',
    protocol: 'https',
  },
}

const sentryPlugin = {
  resolve: 'gatsby-plugin-sentry',
  options: {
    dsn: 'https://08ceff9135074b54882d704b4af1eec0@sentry.jessecod.es/2',
  },
}

const plugins = [
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
  sentryPlugin,
  // ===========
  // Miscellany.
  // ===========
  'gatsby-plugin-remove-trailing-slashes',
  'gatsby-plugin-feed',
  'gatsby-plugin-lodash',
  // This ostensibly has to go at the end of the plugins declaration array.
  'gatsby-plugin-netlify',
]

module.exports = {
  siteMetadata,
  plugins,
}
