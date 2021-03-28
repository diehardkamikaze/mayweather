const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniExtractCssPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };
  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin()];
  }
  return config;
};

function filename2(ext) {
  if (isDev) {
    return `[name]${ext}`;
  }
  return '[name].[contenthash]' + ext;
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index.js',
    analytics: './analytics.js',
  },
  output: {
    filename: filename2('.js'),
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'src/favicon.png'),
        to: path.resolve(__dirname, 'dist'),
      }],
    }),
    new MiniExtractCssPlugin({ filename: filename2('.css') }),
  ],
  optimization: optimization(),
  devServer: {
    port: 4200,
    hot: isProd,
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@models': path.resolve(__dirname, 'src/models'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [MiniExtractCssPlugin.loader, 'css-loader'],
    },
    {
      test: /\.less$/,
      use: [MiniExtractCssPlugin.loader, 'css-loader', 'less-loader'],
    },
    {
      test: /\.(png|jpg|svg|gif)$/,
      use: ['file-loader'],
    }, {
      test: /\.(ttf|eot|woff|woff2)$/,
      use: ['file-loader'],
    }, {
      test: /\.xml$/,
      use: ['xml-loader'],
    }, {
      test: /\.csv$/,
      use: ['csv-loader'],
    }],
  },
};
