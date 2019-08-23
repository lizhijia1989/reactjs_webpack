const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const appRoot = path.resolve('app');
const outputPath = path.resolve('dev');
console.log('env', process.env.NODE_ENV, '\n', path.relative(appRoot, ''), path.relative(outputPath, ''));

module.exports = {
  mode: 'development',
  entry: {
    index: path.join(appRoot, 'main.js'),
  },
  output: {
    filename: 'js/bundle.[hash:5].js',
    path: outputPath
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: outputPath,
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: ['babel-loader'], include: appRoot },
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
        include: path.join(appRoot, 'css/base.css'),
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
              localIdentName: '[name]__[local]-[hash:5]',
            }
          },
          {
            loader: 'postcss-loader',
          }
        ],
        include: appRoot,
        exclude: path.join(appRoot, 'css/base.css'),
      },
      {
        test: /\.(eot|svg|ttf|woff)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'font/[name].[hash:5].[ext]'
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
              name: 'img/[name].[hash:5].[ext]',
            }
          }
        ]
      },
    ],
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(appRoot, 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:5].css'
    }),
  ],
  optimization: {
    splitChunks: {
      // chunks: 'async',
      // minSize: 30000,
      // maxSize: 0,
      // minChunks: 1, // 被entry引入的次数
      // maxAsyncRequests: 5,
      // maxInitialRequests: 3,
      // automaticNameDelimiter: '~',
      // name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        }
      }
    },
    // runtimeChunk: true
  }
};