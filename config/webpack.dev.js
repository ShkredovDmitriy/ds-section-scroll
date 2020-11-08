const paths = require('./_lib/paths');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  // Set the mode to development or production
  mode: 'development',

  // Start a server for quick development
  devServer: {
    historyApiFallback: true,
    contentBase: paths.dist,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
    host: '0.0.0.0',
    compress: false,
  },

  // Entery point
  entry: [paths.src + '/app/main.ts'],

  // Output folder
  output: {
    path: paths.dist,
    filename: 'js/main.min.js?[hash]',
  },

  plugins: [

    // Transform pug to html
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: paths.src + '/pages/index.pug',
      inject: true,
    }),
  ],

  module: {
    rules: [

      // // Javascript loader
      // {
      //   test: /\.js$/,
      //   exclude: [/node_modules/, /config/],
      //   use: ['babel-loader'],
      // },

      // Typescript loader
      {
        test: /\.ts$/,
        exclude: [/node_modules/, /config/],
        use: 'ts-loader',
      },

      // Inject css into the head with source maps
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

      // Transform pug to html
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },

      // copy image files to build folder
      {
        test: /\.(jpg|jpeg|png|svg)$/, type: 'asset/resource'
      },

      // Inline fonts
      {
        test: /\.(woff|woff2)$/, type: 'asset/inline'
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
}