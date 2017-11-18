const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const paths = require('./paths.js');

const protocol = process.env.PROTOCOL || 'http';
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

module.exports = merge(common, {

  devtool: 'inline-source-map',

  devServer: {
    publicPath: '/',
    contentBase: paths.build,
    compress: true,
    hot: true,
    host: host,
    port: port,
    clientLogLevel: 'none',
    noInfo: true,
    open: true,
    quiet: true,
    https: protocol === 'https',

    after: () => {
      console.log('Accessing the application');
      console.log('=================================');
      console.log('\nIn your machine:');
      console.log(`${protocol}://${host}:${port}/`);
      console.log(`${protocol}://localhost:${port}/`);
      console.log('\nIn your network:')
      console.log(`${protocol}://{youLocalExternalIp}:${port}`);
    }
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
