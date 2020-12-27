const { merge } = require('webpack-merge');
const modeProduction = require('./_lib/_modeProductions');             // webpack mode, entry and output points
const clearBuildFolder = require('./_lib/_clearBuildFolder');          // clear "build" folder for clear building
const typescriptLoaderProd = require('./_lib/_typescriptLoaderProd');  // transform ts to js, use babel, use uglify, export to main.min.js
const pugToHTMLLoader = require('./_lib/_pugToHTMLLoader');            // transform pug to html, export to index.html
const scssToCssLoader = require('./_lib/_scssToCssLoader');            // minimize styles, autoprefix styles, export to main.min.css
const copyStaticFilesProd = require('./_lib/_copyStaticFilesProd');    // copy images, fonts, from src to build

module.exports = env => {
  return merge([
    modeProduction(), 
    clearBuildFolder(),
    typescriptLoaderProd(),
    pugToHTMLLoader(),
    copyStaticFilesProd(),
    scssToCssLoader(),
  ]);
};