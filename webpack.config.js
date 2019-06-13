const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const appRoot = './app';
const devPath = './dev';

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(appRoot, 'main.js'),
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(devPath),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(devPath),
    port: 3000,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: path.resolve(devPath)
            }
          },
          {
            loader: 'css-loader',
          }
        ],
        include: path.resolve(appRoot, './css/base.css'),
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: path.resolve(devPath)
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]-[hash:base64:5]',
            }
          }
        ],
        include: path.resolve(appRoot),
        exclude: path.resolve(appRoot, './css/base.css'),
      },
      { test: /\.(js|jsx)$/, use: ['babel-loader'] ,include: path.resolve(appRoot) },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(appRoot, 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
      chunkFilename: 'index[id].css'
    })
  ],
};