let fs = require('fs');

let data = fs.readFileSync(process.argv[2]).toString().split('\n');


console.log(data.length - 1);