/*
 * @Author: nieloong@aliyun.com
 * @Date: 2020-03-14 10:50:36
 * @LastEditors: Loong Nie
 * @LastEditTime: 2020-03-14 11:07:47
 * @FilePath: /StateGridKms/base-lear/vue.config.js
 * @Descripttion:
 * @version:
 */
// module.exports = {}
module.exports = {
  // 基本路径，vue.cli 3.3以前请使用baseUrl
  // publicPath: '/',
  // 输出文件目录
  // outputDir: 'dist',
  // 用于嵌套生成的静态资产（js，css，img，fonts）的目录
  // assetsDir: '',
  // 生成环境sourceMap
  // productionSourceMap: true,
  devServer: {
    host: '0.0.0.0',
    port: 9088,
    // proxy: {}, // 设置代理·
    open: true
  }
}