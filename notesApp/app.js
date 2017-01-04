const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

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

const argv = yargs.argv;
var command = process.argv[2];
console.log(command);

if(command === 'add') {
    console.log('Add Notes');
} else if(command === 'list') {
    console.log('Listing Notes');
} else if(command === 'remove') {
    console.log('Remove Notes');
} else {
    console.log('Command Not Recognized');
}

// Utils inherits method

var inherits = require('util').inherits;

function A(){}
function B(){}

var b = new B(); // var b = Object.create(B);
inherits(B,A);

console.log(b instanceof B);
console.log(b instanceof A);