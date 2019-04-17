module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-flow',
    '@babel/preset-react',
    'babel-preset-gatsby',
  ],
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    'babel-plugin-styled-components',
    'lodash',
  ],
}
