const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
  }
}
