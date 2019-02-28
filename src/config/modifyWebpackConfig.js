// const atImport = require('postcss-import')
// const cssnested = require('postcss-nested')
// const cssnext = require('postcss-cssnext')
const PacktrackerPlugin = require('@packtracker/webpack-plugin')
const path = require('path')

module.exports = ({ actions, getConfig, stage }) => {
  const config = getConfig()
  switch (stage) {
    case 'build-javascript':
      actions.setWebpackConfig({
        // postcss: () => [atImport(), cssnested, cssnext()],
        resolve: {
          modules: [path.resolve('./src'), 'node_modules'],
        },
        plugins: [
          new PacktrackerPlugin({
            project_token: 'b3b5c11a-1bcd-4887-8068-ca217ee99ef7',
            upload: true, // process.env.CI === 'true',
          }),
        ],
      })
  }

  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    }
  }
}
