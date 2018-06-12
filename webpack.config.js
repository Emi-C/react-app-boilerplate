const path = require('path');
const webpack = require('webpack');

const bundlePath = path.resolve(__dirname, 'dist/');

module.exports = {
  entry: './src/index.jsx',
  devtool: 'cheap-module-source-map', //prevents cors errors in console
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader', //transpiles js and jsx files
        options: {
          presets: ['env', 'react'],
          plugins: ['transform-class-properties'], //used to write functions without explicit binding inside classes
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    publicPath: bundlePath,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 8080,
    publicPath: 'http://localhost:8080/dist',
    open: true,
    historyApiFallback: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()], //HMR, on save reloads view
};
