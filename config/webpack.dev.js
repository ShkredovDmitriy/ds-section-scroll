const { merge } = require('webpack-merge');
const modeDevelopment = require('./_lib/_modeDevelopment');          // webpack mode, entry and output points
const developmentServer = require('./_lib/_developmentServer');      // http://localhost:8080
const typescriptLoaderDev = require('./_lib/_typescriptLoaderDev');  // transform ts to js, use babel, insert to head
const pugToHTMLLoader = require('./_lib/_pugToHTMLLoader');          // transform pug to html, export to index.html
const scssToCssToHead = require('./_lib/_scssToCssToHead');          // autoprefix styles, insert to head
const copyStaticFilesDev = require('./_lib/_copyStaticFilesDev');    // copy images, fonts, from src to temp

module.exports = env => {
  return merge([
    modeDevelopment(),
    developmentServer(),
    pugToHTMLLoader(),
    scssToCssToHead(),
    typescriptLoaderDev(),
    copyStaticFilesDev(),
  ]);
};