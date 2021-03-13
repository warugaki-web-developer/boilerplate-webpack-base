const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js')
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack base',
      template: path.resolve(__dirname, './src/template.html'),
      filename: 'index.html'
    })
  ]
}
