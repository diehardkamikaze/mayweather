const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  plugins: [new ESLintPlugin({
    extensions: ['js'],
  }), new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src/index.html'),
  }), /* new CopyPlugin({
    patterns: [{
      from: path.resolve(__dirname, 'src/assets/images'), to: path.resolve(__dirname, 'dist'),
    },
    ],
  }) */ ],
  devServer: {
    port: 1480,
    contentBase: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: path.resolve(__dirname, 'dist/fonts'),
            },
          },
        ],
      },
    ],
  },
};
