const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const appRoot = './app';
const outputPath = './dev';

console.log('env', process.env.NODE_ENV);

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(appRoot, 'main.js'),
  },
  output: {
    filename: 'js/index.bundle.js',
    path: path.resolve(outputPath, '')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(outputPath, ''),
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: ['babel-loader'], include: path.resolve(appRoot) },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: path.relative(outputPath, '')
            }
          },
          {
            loader: 'css-loader'
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
              publicPath: path.relative(outputPath, '')
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
      {
        test: /\.(eot|svg|ttf|woff)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'font/'
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/'
            }
          }
        ]
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
      filename: 'css/[name].css',
    }),
  ],
};