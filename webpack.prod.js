const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 从js中提取css

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') // cssnano
const TerserJSPlugin = require('terser-webpack-plugin') // 压缩js代码

const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

// const CompressionPlugin = require('compression-webpack-plugin') // gzip

module.exports = merge(common, {
  mode: 'production', // 防止控制台报错
  output: {
    // 多出口 prod环境下启用contenthash
    filename: 'js/[name].[contenthash:8].js',
    path: resolve('dist'),
    publicPath: '/'
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        terserOptions: {
          compress: {
            drop_console: true // 移除console
          },
          output: {
            comments: false // 移除js中的注释
          }
        }
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ['default'] // 默认移除css注释
        }
      })
    ],
    splitChunks: {
      chunks: 'all', // 异步模块和入口模块
      minSize: 30000,
      minChunks: 1, // 最少有多少chunks共用的模块
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          minChunks: 1,
          priority: 20 // 权重
        },
        default: {
          name: 'utils',
          test: resolve('src/utils'),
          minChunks: 1,
          priority: 5,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css' // prod启用contenthash
    })
    // new CompressionPlugin({
    //   test: /\.(js|css)$/i,
    //   algorithm: 'gzip',
    //   deleteOriginalAssets: true
    // })
  ],
  module: {
    rules: [
      {
        test: /\.(css|styl)$/, // css-loader
        exclude: [/dist/],
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer'),
                  require('postcss-px2rem')({
                    remUnit: 50 // 50px = 1rem
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
              limit: 8192,
              outputPath: 'img',
              name: '[name]-[hash:8].[ext]'
              // publicPath: '../img'
            }
          },
          {
            loader: ImageMinimizerPlugin.loader,
            options: {
              severityError: 'warning', // Ignore errors on corrupted images
              minimizerOptions: {
                plugins: [
                  ['mozjpeg', { progressive: true, quality: 50 }],
                  ['pngquant', { quality: [0.65, 0.75], speed: 4 }],
                  [
                    'imagemin-svgo',
                    {
                      plugins: [
                        {
                          removeViewBox: false
                        }
                      ]
                    }
                  ]
                ]
              }
            }
          }
        ]
      },
      {
        enforce: 'pre', // 保证 eslint 优先 babel 执行
        test: /\.js$/,
        exclude: [/node_modules/, /dist/],
        use: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/, /dist/],
        use: 'babel-loader'
      }
    ]
  }
})
