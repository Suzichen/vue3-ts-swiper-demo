/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    port: 8889
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  }
}
