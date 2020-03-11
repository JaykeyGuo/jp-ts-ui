const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}
console.log(process.env.NODE_ENV);
process.env.BASE_URL = 'ddd';

module.exports = {
  entry: {
    index: './src/main.ts',
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /.js$/,
        use: 'babel-loader',
        // include: [resolve('src')],
      },
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
            },
          },
        ],
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.vue', '.json', '.css', 'scss'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../index.html'),
      filename: 'index.html',
      chunks: ['index'],
      inject: true,
      // minify: {
      //   html5: true,
      //   collapseWhitespace: true,
      //   preserveLineBreaks: false,
      //   minifyCSS: true,
      //   minifyJS: true,
      //   removeComments: false,
      // },
    }),
    new VueLoaderPlugin(),
  ],
};
