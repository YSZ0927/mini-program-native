const { resolve } = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  context: resolve('src'),
  entry: {
    'app': './app.js',
    'pages/index/index': './pages/index/index.js',
    'pages/logs/logs': './pages/logs/logs.js',
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js',
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: '**/*',
        to: './',
        ignore: ['**/*.js', '**/*.less']
      },
    ]),
  ],
  mode: 'none',
}