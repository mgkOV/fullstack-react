const path = require('path');
const webpack = require('webpack');

const config = {
  entry: ['babel-polyfill', './lib/components/Index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }]
  }
  // ,
  // plugins: {
  //   new webpack.NamedModulesPlugin(),
  //   new webpack.HotModuleReplacementPlugin()
  // }
};

module.exports = config;
