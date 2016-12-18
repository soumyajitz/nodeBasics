const fs = require('fs');
const os = require('os');
const notes = require('./notes');

console.log(os.userInfo().username);

//fs.appendFile('testFile.txt', 'Hello World ');
var note = notes.addNote();

console.log(note);
console.log(notes.addNumbers(2,3));