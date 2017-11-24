var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './client/App.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {}
      },
      { 
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      }
    ]
  },
  stats: {
    colors: true
  },
  devServer: {
    host: "192.168.1.100",
    port: 8080
  },
  devtool: 'source-map'
};