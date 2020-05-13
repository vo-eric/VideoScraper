const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: ['./src/index.jsx'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [new Dotenv()],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  node: {
    fs: 'empty',
  },
  devtool: 'source-map',
};
