// Jeremy Ward AD320
// Learn you node solution
// Problem: 4 my-first-async-io

const fs = require('fs');
const file = process.argv[2];

try {
    fs.readFile(file, function(err, data) {
        if (err) {
            return console.error(err);
        }
        console.log(data.toString().split('\n').length - 1);
    });
}
catch (err) {
    console.log(err);
}