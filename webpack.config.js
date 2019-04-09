var path = require('path');

module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve('./build'),
    publicPath: "/build"
  },
  devServer: {
    port: 9000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader"
        }
      }
    ]
  },
  performance: {
    hints: "dev" ? false : "warning"
  }
};