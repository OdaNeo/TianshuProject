const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)
const HtmlWebpackPlugin = require('html-webpack-plugin')

const glob = require('glob') // glob 动态生成entry与html模板
const pagesName = glob.sync('src/pages/*') // [ 'src/pages/index', 'src/pages/page1', 'src/pages/page2' ]
const entryFile = {}
const htmlFile = []

for (const i of pagesName) {
  const _name = i.split('/').pop().toString()
  entryFile[_name] = `./src/pages/${_name}/app.js`
  htmlFile.push(
    new HtmlWebpackPlugin({
      title: `${_name}`,
      filename: `${_name}.html`,
      template: resolve(`src/pages/${_name}/app.html`),
      chunks: [`${_name}`],
      favicon: 'src/assets/favicon.ico'
    })
  )
}

module.exports = {
  entry: entryFile,
  resolve: {
    alias: {
      '@': resolve('src') // 配置别名
    }
  },
  plugins: htmlFile,
  module: {
    rules: []
  }
}
