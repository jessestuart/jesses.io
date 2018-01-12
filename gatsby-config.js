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

const transformerRemark = {
  resolve: 'gatsby-transformer-remark',
  options: {
    plugins: [
      {
        resolve: 'gatsby-remark-images',
        options: {
          maxWidth: 590,
        },
      },
      {
        resolve: 'gatsby-remark-responsive-iframe',
        options: {
          wrapperStyle: 'margin-bottom: 1.0725rem',
        },
      },
      'gatsby-remark-prismjs',
      'gatsby-remark-copy-linked-files',
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

const plugins = [
  // ====================================
  // Gotta load those sweet, sweet files.
  // ====================================
  sourceFilesystem,
  // =======================================================================
  // Add in React Helmet, and React 16 support until Gatsby HEAD catches up.
  // =======================================================================
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-react-next',
  // ========================
  // Styling-related plugins.
  // ========================
  'gatsby-plugin-sass',
  'gatsby-plugin-styled-components',
  typographyPlugin,
  // ==========================================
  // Transformers for Markdown and image files.
  // ==========================================
  transformerRemark,
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  // ===========
  // Miscellany.
  // ===========
  'gatsby-plugin-feed',
  'gatsby-plugin-netlify',
  'gatsby-plugin-offline',
]

module.exports = {
  siteMetadata,
  plugins,
}
