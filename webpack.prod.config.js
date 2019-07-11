const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const appRoot = './app';
const outputPath = './prod';

console.log('env', process.env.NODE_ENV);

module.exports = {
  mode: 'production',
  entry: {
    index: path.resolve(appRoot, 'main.js'),
  },
  output: {
    filename: 'index.js',
    path: path.resolve(outputPath, ''),
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: path.resolve(outputPath, '/')
            }
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
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
              publicPath: path.resolve(outputPath, '/')
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]-[hash:base64:5]',
            }
          },
          {
            loader: 'postcss-loader',
          }
        ],
        include: path.resolve(appRoot),
        exclude: path.resolve(appRoot, './css/base.css'),
      },
      { test: /\.(js|jsx)$/, use: ['babel-loader'], include: path.resolve(appRoot) },
      {
        test: /\.(eot|svg|ttf|woff)$/,
        use: ['file-loader']
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(appRoot, 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
      chunkFilename: 'index[id].css'
    }),
  ],
};