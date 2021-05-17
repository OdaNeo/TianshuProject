const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin') // inline runtime to html，to reduce http-request
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 从js中提取css
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') // cssnano
const TerserJSPlugin = require('terser-webpack-plugin') // 压缩js代码

// const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
// const CompressionPlugin = require('compression-webpack-plugin') // gzip

module.exports = merge(common, {
  mode: 'production', // 防止控制台报错
  output: {
    // 多出口 prod环境下启用contenthash
    filename: 'js/[name]_[contenthash:8].bundle.js', // output path, [name]_[-hash] from prod environment
    chunkFilename: 'js/[name]_[contenthash:8].chunk.js', // chunkFilename for no-enter chunk-file
    path: resolve('dist'),
    publicPath: ''
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        cache: true, // 开启缓存
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
          preset: ['default', { discardComments: { removeAll: true } }] // cssnano
        }
      })
    ],
    runtimeChunk: true, // html.js cache
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
        utils: {
          name: 'utils',
          test: /\\src\\utils\\/,
          minChunks: 1,
          priority: 10,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name]_[contenthash:8].css', // prod contenthash
      chunkFilename: 'css/[name]_[contenthash:8].chunk.css'
    }),
    new ScriptExtHtmlWebpackPlugin({
      inline: /runtime~.*\.js/ // inline runtimeChunk to html
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
        include: [/node_modules/, /src/],
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2 // setups number of loaders applied before CSS loader, enable to import tailwind-css-file from tailwind-css-file
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer'),
                  require('postcss-px2rem')({
                    remUnit: 100, // 50px = 1rem,
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
              outputPath: '/img/',
              name: '[name]_[contenthash:8].[ext]'
              // publicPath: '../img'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              webp: {
                quality: 75
              },
              imageminSvgo: {
                plugins: [{ removeViewBox: false }]
              }
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
              limit: 8192,
              outputPath: '/css/font/',
              name: '[name].[ext]'
              // publicPath: '../css/font'
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
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true // 开启缓存
            }
          }
        ]
      }
    ]
  }
})
