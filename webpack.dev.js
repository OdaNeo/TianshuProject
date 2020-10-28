const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'development',
  output: {
    // 多出口 dev环境下不启用hash
    filename: 'js/[name].js',
    // chunkFilename: 'js/[id]js', // 默认启用 NamedModulesPlugin，不使用id
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 7863,
    open: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() // HMR
  ],
  optimization: {
    namedModules: true // 替代 NamedModulesPlugin，固定moduleId，开发环境默认启用
  },
  module: {
    rules: [
      {
        test: /\.(css|styl)$/, // css-loader
        exclude: resolve('dist'),
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('postcss-px2rem')({
                    remUnit: 16 // 50px = 1rem
                  })
                ]
              }
            }
          },
          'stylus-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        exclude: [/node_modules/, /dist/],
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: 'img',
              limit: 8192,
              name: '[path]_[name].[ext]'
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
