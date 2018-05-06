const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    carousel: './src/carousel.js'
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      { parser: { amd: false } },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ] },
      {
        test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist', {}),
    new WriteFilePlugin(),
    new CopyWebpackPlugin([
      { from: 'src/favicon.ico', to: 'favicon.ico' },
      { from: 'src/images', to: 'images' },
      { from: 'src/index.html', to: 'index.html' },
      { from: 'src/bgs', to: 'bgs' },
      { from: 'src/vendor', to: 'vendor' }
    ]),
    new UglifyJSPlugin()
  ]
};
