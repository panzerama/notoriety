let fs = require('fs');
let sizeOfNewEntries = 0;

fs.readFile(process.argv[2], 'utf8', function (err, data){
    sizeOfNewEntries = data.split('\n').length;
} )

console.log(sizeOfNewEntries);