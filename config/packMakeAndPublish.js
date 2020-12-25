const fs = require('fs');
var rimraf = require("rimraf");
const { exec } = require('child_process');

function message(msg) {
  console.log("\x1b[32m", msg, "\x1b[0m");
}

function messerr(msg) {
  console.log("\x1b[31m", msg, "\x1b[0m");
}

function directoryRemove(dirName) {
  return new Promise((resolve) => {
    rimraf(dirName, function () { 
      message("Done! Folder pack removed");
      resolve();
    })
  });
}

async function directoryCreate(dirName) {
  return new Promise((resolve) => {
    fs.mkdir(dirName, (err) => {
      if (err) throw err;
      else {
        message(`Done! Folder ${dirName} created`);
        resolve();
      }
    });
  });
}

async function fileCopy(fromFile, toFile) {
  return new Promise((resolve) => {
    fs.copyFile(fromFile, toFile, (err) => {
      if (err) throw err;
      else {
        message(`Done! File ${fromFile} copied to ${toFile}`);
        resolve();
      }
    });
  }); 
}

async function execCommand(command) {
  return new Promise((resolve) => {
    exec(command, function (error, stdout, stderr) {
      if (error) {
        messerr(error.stack);
        messerr('Error code: '+error.code);
        messerr('Signal received: '+error.signal);
      } else {
        message('Child Process STDOUT: '+stdout);
        resolve();
      }
    });
  })
}

(async function(){
  await directoryRemove("pack")
  await directoryCreate("pack")
  await directoryCreate("pack/dist")
  await fileCopy('index.js', 'pack/index.js')
  await fileCopy('README.md', 'pack/README.md')
  await fileCopy('package-pack.json', 'pack/package.json')
  await fileCopy('docs/js/main.min.js', 'pack/dist/ds-section-scroll.min.js')
  await fileCopy('docs/css/main.min.css', 'pack/dist/ds-section-scroll.min.css')
  await execCommand('cd pack && npm publish')
})()