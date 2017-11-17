const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const paths = require('./paths.js');

module.exports = merge(common, {

  devtool: 'inline-source-map',

  devServer: {
    contentBase: paths.build,
    compress: true,
    hot: true,
    useLocalIp: true,
    host: '0.0.0.0',
    port: 3000,
    clientLogLevel: 'none',
    noInfo: true,
    open: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      DEVELOPMENT: JSON.stringify(true),
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]

});
