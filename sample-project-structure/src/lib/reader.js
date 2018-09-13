'use strict';

const fs = require('fs');

const reader = module.exports = {};

const fileOnePath = `${__dirname}/data/fileOne.txt`;
const fileTwoPath = `${__dirname}/data/fileTwo.txt`;
const fileThreePath = `${__dirname}/data/fileThree.txt`;

const CHARS_TO_READ = 5;

const printString = (string) => {
  console.log(string);
  console.log('------------------------------------------');
};

reader.readAsync = function (paths, chars, callback) {
  return fs.readFile(paths, (error, data) => {
    if (error) {
      return error;
    }
    return callback(data.toString('utf8', 0, chars));
  });
};

reader.readAsync(fileOnePath, CHARS_TO_READ, (one) => {
  printString(one);
  reader.readAsync(fileTwoPath, CHARS_TO_READ, (two) => {
    printString(two);
    reader.readAsync(fileThreePath, CHARS_TO_READ, (three) => {
      printString(three);
    });
  });
});
