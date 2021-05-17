const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: resolve('dist'), // default
    publicPath: ''
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: './dist',
    port: 5050,
    open: true,
    hot: true
  },
  stats: 'errors-only', // friendly-errors-webpack-plugin
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // HMR
    new FriendlyErrorsWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(css|styl)$/, // css-loader
        include: [/node_modules/, /src/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2 // setups number of loaders applied before CSS loader
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('postcss-px2rem')({
                    remUnit: 100, // 100px = 1rem
                    remPrecision: 2
                  })
                ]
              }
            }
          },
          'stylus-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        include: /\\src\\/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[path][name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: /\\src\\/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/, /dist/],
        use: 'eslint-loader'
      }
    ]
  }
})
