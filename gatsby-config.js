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

const cssModulesPlugin = {
  resolve: `gatsby-plugin-react-css-modules`,
  options: {
    // *.css files are included by default. To support SCSS, add
    // `postcss-scss` to your project's devDependencies and add the
    // following option here:
    filetypes: {
      '.css': { syntax: `postcss` },
      '.scss': { syntax: `postcss-scss` },
    },

    // Exclude global styles from the plugin using a RegExp:
    // eslint-disable-next-line
    exclude: `\/global\/`,
  },
}

const typographyPlugin = {
  resolve: 'gatsby-plugin-typography',
  options: {
    pathToConfigModule: 'src/utils/typography',
  },
}

module.exports = {
  siteMetadata: {
    author: 'Jesse Stuart',
    description: '',
    siteUrl: 'https://jessestuart.com',
    title: 'Jesse Stuart',
  },
  plugins: [
    sourceFilesystem,
    transformerRemark,
    'gatsby-plugin-styled-components',
    cssModulesPlugin,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-feed',
    'gatsby-plugin-netlify',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-plugin-sass',
    typographyPlugin,
  ],
}
