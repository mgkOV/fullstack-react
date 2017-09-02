const path = require('path');
const webpack = require('webpack');

const config = {
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./lib')],
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  // entry: ['babel-polyfill', './lib/renderers/dom.js'],
  entry: {
    vendor: [
      'babel-polyfill',
      'preact',
      'preact-compat',
      // 'react',
      // 'react-dom',
      'prop-types',
      'axios',
      'lodash.debounce',
      'lodash.pickby'
    ],
    app: ['./lib/renderers/dom.js']
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env', 'stage-2']
          }
        }
      }
    ]
  },
  // plugins: {
  //   new webpack.NamedModulesPlugin(),
  //   new webpack.HotModuleReplacementPlugin()
  // }
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ]
};

module.exports = config;
