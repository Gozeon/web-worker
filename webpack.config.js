const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    modules: [
      path.join(__dirname, "src"),
      "node_modules"
    ],
    extensions: ['.js']
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
    new HtmlWebpackPlugin({
      title: 'web-worker',
      template: 'src/index.html'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        worker: {
          output: {
            filename: "[hash].worker.js",
            chunkFilename: "[id].worker.js"
          }
        }
      }
    }),
    new CopyWebpackPlugin([
      { 
        from: 'src/shared-worker.js',
        to: 'shared-worker.js'
      },
      { 
        from: 'src/shared.html',
        to: 'shared.html'
      }
    ])
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