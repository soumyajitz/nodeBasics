const fs = require('fs');
const os = require('os');
const _ = require('lodash');

const notes = require('./notes');

console.log(os.userInfo().username);

//fs.appendFile('testFile.txt', 'Hello World ');
var note = notes.addNote();

console.log(note);
console.log(notes.addNumbers(2,3));
console.log(_.isString('ekfmel'));

var arr = [1,2,2,3,5,2,4,6,7,4,89,5];
var filteredArray = _.uniq(arr);

console.log(filteredArray);
//console.log('Hello Nodemon');