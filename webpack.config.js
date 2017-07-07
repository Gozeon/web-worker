const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const webpack = require('webpack');

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
    new WebpackNotifierPlugin({
      title: 'Web Worker'
    }),
    new HtmlWebpackPlugin({
      title: 'web-worker',
      template: 'src/index.html'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        worker: {
          output: {
            filename: "hash.worker.js",
            chunkFilename: "[id].hash.worker.js"
          }
        }
      }
    })
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