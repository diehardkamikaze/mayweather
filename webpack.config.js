const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniExtractCssPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
//const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const pluginsL = () => {
  const base = [
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
  ];
  /*if (isProd)
  {
    base.push(new BundleAnalyzerPlugin());
  }*/
  return base;
};

const jsLoaders = () => {
  const config = [{
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
      plugins: ['@babel/plugin-proposal-class-properties'],
    },
  }];
  if (isDev) {
   // config.push('eslint-loader');
  }
  return (config);
};

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
  return `[name].[contenthash]${ext}`;
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: ['@babel/polyfill', './index.js'],
    analytics: './analytics.ts',
  },
  output: {
    filename: filename2('.js'),
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: isDev ? 'source-map' : false,
  plugins: pluginsL(),
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
    },
    {
      test: /\.js$/,
      exclude: '/node_modules/',
      use: jsLoaders(),
    },
    {
      test: /\.ts$/,
      exclude: '/node_modules/',
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-typescript'],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    }],
  },
};
