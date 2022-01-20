'use strict'

const fs = require('fs');
let buf;
fs.readFile(process.argv[2], (err, data) => {
   if (err) throw err;
   buf = data;
});
let str = buf.toString();
let lines = str.split('\n');
console.log(lines.length - 1)
