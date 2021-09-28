/* eslint-disable prefer-regex-literals */
// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const Dotenv = require('dotenv-webpack')
const path = require('path')

module.exports = {
  devtool: 'source-map',
  output: {
    filename: 'app.bundle.js',
    publicPath: '/',
    clean: true
  },
  plugins: [
    new Dotenv({
      path: '.env',
      allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      silent: true, // hide any errors
      defaults: false
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new WebpackPwaManifest({
      name: 'PetGram tu app de fotos de mascotas',
      short_name: 'Petgram 🐶',
      description: 'Pegram, fotos de animales domesticos',
      background_color: '#fff',
      theme_color: '#b1a',
      orientation: 'portrait',
      display: 'standalone',
      start_url: '/',
      scope: '/',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        },
        {
          src: path.resolve('src/assets/maskable-icon.png'),
          size: '1024x1024',
          purpose: 'maskable'
        }
      ]
    })
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  }
}
