// webpack.config.js
const webpack = require('webpack')

const { merge } = require('webpack-merge')
const config = require('./webpack.config.js')

module.exports = merge(config, {
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  devtool: 'source-map',
  devServer: {
    static: './dist',
    historyApiFallback: true
  }
})
