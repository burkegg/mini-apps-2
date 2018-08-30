const path = require('path');

module.exports = {
  mode: "development",
  entry: "./client/app.jsx",

  output: {
    path: path.resolve(__dirname, './public'),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
        path.resolve(__dirname, './client'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
          },
        },
      },     
    ],
  },
}