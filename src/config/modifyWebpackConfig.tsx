import path from 'path'
import cssnext from 'postcss-cssnext'
import atImport from 'postcss-import'
import cssnested from 'postcss-nested'

const modifyWebpackConfig = ({ config }, stage) => {
  config.merge({
    postcss: () => [atImport(), cssnested, cssnext()],
    resolve: {
      root: [path.resolve('./src')],
    },
  })

  return config
}

module.exports = modifyWebpackConfig
