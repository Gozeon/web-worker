const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  devtool: 'eval',
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader','eslint-loader']
      }
    ]
  },
  plugins: [
    new WebpackNotifierPlugin({
      title: 'Web Worker'
    }),
    new HtmlWebpackPlugin()
  ],
  devServer: {
    port: 9000,
    contentBase: path.join(__dirname, "dist"),
    overlay: {
      warnings: true,
      errors: true
    }
  }
};