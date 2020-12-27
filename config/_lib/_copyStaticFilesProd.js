const paths = require('./_paths');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function() {
  return {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: paths.images,
            to: 'images',
          },
        ],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(jpg|jpeg|png|svg)$/, type: 'asset/resource'
        },
        {
          test: [/\.woff$/, /\.woff2$/, /\.eot$/, /\.ttf$/],
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: 'docs',
            outputPath: './fonts',
          },
        },
      ],
    },
  }
}
