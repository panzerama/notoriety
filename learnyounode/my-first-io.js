// Jeremy Ward AD320
// Learn you node solution
// Problem: 3 MY FIRST I/O!

const fs = require('fs');

let file = process.argv[2];
let inputData = null;

inputData = fs.readFileSync(process.argv[2]).toString().split('\n');
console.log(inputData.length - 1);


