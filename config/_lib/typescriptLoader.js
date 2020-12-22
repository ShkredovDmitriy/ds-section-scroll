const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// Typescript loader
module.exports = function() {
  return {
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          test: /\.js(\?.*)?$/i,
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: [/node_modules/, /config/],
          use: 'ts-loader',
        },
      ],
    },
  }
}
