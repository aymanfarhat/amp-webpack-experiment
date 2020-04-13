const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const APP_DIR = path.resolve(__dirname, 'src');
const PUBLIC_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  entry: {
    app: APP_DIR + '/index.tsx',
  }, 
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }
      },
    ]
  },
  output: {
    path: PUBLIC_DIR,
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.ejs',
      inject: false
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 4000
  },
  mode: 'development',
};
