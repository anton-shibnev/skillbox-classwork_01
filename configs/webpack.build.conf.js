const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');

const buildWebpackConfig = merge(baseWebpackConfig, {
  // BUILD config
  devtool: false,
  mode: 'production',
  module: {
    rules: [{
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name][hash].[ext]',
        },
      }],
    }],
  },

  plugins: [
    new CleanWebpackPlugin(),
  ],
});

module.exports = new Promise((resolve) => {
  resolve(buildWebpackConfig);
});
