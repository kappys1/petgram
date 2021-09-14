/* eslint-disable prefer-regex-literals */
// const webpack = require('webpack')
const { merge } = require('webpack-merge')
const config = require('./webpack.config.js')
const WorkBoxWebpackPlugin = require('workbox-webpack-plugin')

module.exports = merge(config, {
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify('production')
    // }),
    new WorkBoxWebpackPlugin.GenerateSW({
      mode: 'development',
      skipWaiting: true,
      clientsClaim: true,
      maximumFileSizeToCacheInBytes: 5000000,
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: new RegExp('https://petgram-kappys1.vercel.app/'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })

  ],
  mode: 'production'
})
