//required file system operation to read file
var fs = require('fs')
//file found at second index of array
var file = fs.readFileSync(process.argv[2])
//file return buffer.. need to turn buffer to string
var count = file.toString();
//Splitting from new line character
var linecount = count.split('\n');
console.log(linecount.length - 1);
//verify throw new file each time.. numbers never the same

