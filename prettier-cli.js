var fs = require('fs');
var prettier = require('prettier');
var process = require('process');

// node prettier-cli-XXX.js a.js b.js c.js
var filePaths = process.argv.slice(2);
filePaths.forEach(format);

function format(filePath) {
  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      throw new Error(err);
    }

    const result = prettier.format(data);

    fs.writeFile(filePath, result, 'utf8', function (err) {
      if (err) {
        throw new Error(err);
      }

      console.log(filePath);
    });
  });
}