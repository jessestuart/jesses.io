module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
    'babel-preset-gatsby',
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-transform-runtime',
    'babel-plugin-styled-components',
    'lodash',
    [
      'module-resolver',
      {
        root: ['./src', './static'],
        extensions: ['.js', '.json', '.png', '.ts', '.tsx'],
      },
    ],
  ],
}
