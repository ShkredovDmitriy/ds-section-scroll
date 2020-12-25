const paths = require('./_paths');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

module.exports = function() {
  return {
    plugins: 
      [new MiniCssExtractPlugin({
        filename: './css/main.min.css?[hash]',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: { sourceMap: false, }
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: false }
            },
          ],
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: paths.project,
              },
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    autoprefixer()
                  ],
                },
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: false, },
            },
          ],
        },
      ],
    },
  }
}
