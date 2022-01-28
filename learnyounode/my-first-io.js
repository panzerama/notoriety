const fs = require('fs'); // imported library
let file = process.argv[2];

let x = fs.readFileSync(file, "utf8"); //printing the text file

console.log(x.split("\n").length-1);
//console.log(x.toString());