const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../result'),
  configs: path.join(__dirname, '../configs'),
  pages: path.join(__dirname, '../src/pages'),
  static: path.join(__dirname, '../src/static'),
  assets: 'assets',
};

const PAGES_DIR = `${PATHS.pages}`;
const PAGES = fs.readdirSync(PAGES_DIR).filter((fileName) => fileName.endsWith('.pug'));

module.exports = {
  // BASE config
  externals: {
    paths: PATHS,
  },
  entry: {
    app: PATHS.src,
  },
  output: {
    filename: `${PATHS.assets}/js/[name].js`,
    path: PATHS.dist,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env'],
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: `${PATHS.configs}/postcss.config.js`,
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'import-glob-loader',
          },
        ],
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              pretty: true,
            },
          },
          {
            loader: 'pug-bem-plain-loader',
            options: {
              b: 'BEM_',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      lib: 'static/lib/js',
      '@common': path.join(__dirname, '../src/js/common'),
    },
    extensions: ['.js', '.scss'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}/css/[name].css`,
    }),
    new CopyWebpackPlugin([
      {
        from: `${PATHS.static}/images`,
        to: `${PATHS.assets}/images`,
      },
      {
        from: `${PATHS.static}/svg`,
        to: `${PATHS.assets}/svg`,
      },
      {
        from: `${PATHS.static}/fonts`,
        to: `${PATHS.assets}/fonts`,
      },
      {
        from: `${PATHS.static}/video`,
        to: `${PATHS.assets}/video`,
      },
    ]),

    ...PAGES.map(
      (page) => new HtmlWebpackPlugin({
        template: `${PAGES_DIR}/${page}`,
        filename: `./${page.replace(/\.pug/, '.html')}`,
      }),
    ),
  ],
};
