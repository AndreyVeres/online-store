/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const mode = process.env.NODE_ENV;
const isProduction = mode === 'production';
const devtool = isProduction ? undefined : 'source-map';

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

const getPath = (folder) => path.join('assets', `${folder}`, isProduction ? '[contenthash].[ext]' : '[name].[contenthash].[ext]');

const config = {
  devtool,
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isProduction ? 'static/js/[contenthash].js' : 'static/js/[name].[contenthash].js',
    publicPath: '/',
    clean: true,
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[contenthash].css',
    }),
  ],
  optimization: {
    minimize: isProduction,
    minimizer: [
      new TerserPlugin({
        terserOptions: { format: { comments: false } },
        extractComments: false,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: 'html-loader',
      },
      {
        test: /\.(tsx?|jsx?)$/i,
        exclude: ['/node_modules/'],
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.((s[ac])|c)ss$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: getPath('images'),
        },
      },
      {
        test: /\.(svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: getPath('images'),
        },
      },
      {
        test: /\.((t|o)tf|eot|woff2?)$/i,
        type: 'asset/resource',
        generator: {
          filename: getPath('fonts'),
        },
      },
      {
        test: /\.(ogg|mp3$|wav|mpe?g)$/i,
        type: 'asset/resource',
        generator: {
          filename: getPath('sounds'),
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};
