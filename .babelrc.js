module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
    'babel-preset-gatsby',
  ],
  plugins: [
    'babel-plugin-styled-components',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-transform-runtime',
    'lodash',
    [
      'module-resolver',
      { root: ['./src'], extensions: ['.js', '.json', '.ts', '.tsx'] },
    ],
  ],
}
