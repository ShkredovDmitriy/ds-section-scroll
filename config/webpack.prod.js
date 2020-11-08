const paths = require('./_lib/paths');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const { merge } = require("webpack-merge");

const commonProd = merge([
{
  mode: 'production',
  entry: [paths.src + '/app/main.ts'],
  output: {
    path: paths.dist,
    filename: 'js/main.min.js?[hash]',
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: paths.src + '/pages/index.pug',
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: './css/main.css?[hash]',
    }),
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
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: ['babel-loader'],
      // },
      {
        test: /\.ts$/,
        exclude: [/node_modules/, /config/],
        use: 'ts-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader', options: {sourceMap: true, importLoaders: 1 }
          },
          { 
            loader: 'postcss-loader', options: {sourceMap: true}
          },
          { 
            loader: 'sass-loader', options: {sourceMap: true}
          },
        ],
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/, type: 'asset/resource'
      },
      {
        test: [/\.woff$/, /\.woff2$/, /\.eot$/, /\.ttf$/],
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash:8]',
          outputPath: 'fonts',
        },
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
          'css-loader',
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
}]);

// const commonPack = merge([
//   {
//     plugins: [
//       new CopyPlugin([
//         {
//           from: "main.css",
//           context: `${paths.pack}/docs/css/main.css`,
//           to: `${paths.pack}/dist/ds-modal.min.css`
//         },
//         {
//           from: "main.js",
//           context: `${paths.pack}/docs/js/main.js`,
//           to: `${paths.pack}/dist/ds-modal.min.js`
//         },
//         {
//           from: "LICENSE",
//           to: `${paths.pack}/`
//         },
//         {
//           from: "package-pack.json",
//           to: `${paths.pack}/package.json`
//         },
//         {
//           from: "README.md",
//           to: `${paths.pack}`
//         },
//         {
//           from: "package-index.js",
//           to: `${paths.pack}/index.js`
//         }
//       ]),
//     ]
//   }
// ]);

module.exports = function(env, argv) {
  return merge([commonProd]);
};