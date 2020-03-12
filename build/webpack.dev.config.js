/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.config');

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, '../dist/'),
    publicPath: '/',
    host: 'localhost',
    port: 5050,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  devtool: 'cheap-module-eval-source-map',
});

module.exports = devWebpackConfig;
