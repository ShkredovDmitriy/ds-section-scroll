const paths = require('./_lib/paths');
const { merge } = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const clearBuildFolder = require('./_lib/clearBuildFolder');
const typescriptLoader = require('./_lib/typescriptLoader');

const productionPoints = merge([
  {
    // Set the mode to development or production
    mode: 'production',

    // Entery point
    entry: [paths.src + '/app/main.ts'],

    // Output js
    output: {
      path: paths.dist,
      filename: 'js/main.min.js?[hash]',
    },
  }
]);

// Transform pug to html
const exportHTMLfiles = merge([
  {
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: paths.src + '/pages/index.pug',
        inject: true,
      }),
    ],
    module: {
      rules: [
       {
          test: /\.pug$/,
          loader: 'pug-loader',
        },
      ],
    },
  }
]);

// copy static files to output folder
const copyStaticFiles = merge([
  {
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
]);

// export, minimize, autoprefix css to main.min.css
const exportCssToMainMinCss = merge([
  {
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
]);

const resolveTypescript = merge([
  {
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
  }
]);

module.exports = env => {
  return merge([
    productionPoints, 
    clearBuildFolder(),
    typescriptLoader(),
    exportHTMLfiles,
    copyStaticFiles,
    exportCssToMainMinCss,
    resolveTypescript
  ]);
};