const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// Clean output folder
module.exports = function() {
  return {
    plugins: [
      new CleanWebpackPlugin(),
    ],
  }
}