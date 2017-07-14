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
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  plugins: [
    new WebpackNotifierPlugin({
      title: 'web-worker'
    }),
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
      { from: 'src/shared-worker.js', to: 'shared-worker.js' },
      { from: 'src/shared.html', to: 'shared.html' },

      { from: 'src/Basics1.html', to: 'Basics1.html' },
      { from: 'src/Basics1.js', to: 'Basics1.js' },

      { from: 'src/w3c1.html', to: 'w3c1.html' },
      { from: 'src/w3c1.js', to: 'w3c1.js' },

      { from: 'src/w3c2.html', to: 'w3c2.html' },
      { from: 'src/w3c2-io.js', to: 'w3c2-io.js' },
      { from: 'src/w3c2-searcher.js', to: 'w3c2-searcher.js' },
      { from: 'src/w3c2-ticker.js', to: 'w3c2-ticker.js' },

      { from: 'src/w3c3-1.html', to: 'w3c3-1.html' },
      { from: 'src/w3c3-1.js', to: 'w3c3-1.js' },
      { from: 'src/w3c3-2.html', to: 'w3c3-2.html' },
      { from: 'src/w3c3-2.js', to: 'w3c3-2.js' },
      { from: 'src/w3c3-3.html', to: 'w3c3-3.html' },
      { from: 'src/w3c3-3-iframe.html', to: 'w3c3-3-iframe.html' },
      { from: 'src/w3c3-3.js', to: 'w3c3-3.js' },
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