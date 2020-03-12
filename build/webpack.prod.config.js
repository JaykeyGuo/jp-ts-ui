// eslint-disable-next-line import/no-extraneous-dependencies
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config');

const clear;

const proWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
});

module.exports = proWebpackConfig;
