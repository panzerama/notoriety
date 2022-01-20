// Jeremy Ward AD320
// Learn you node solution
// Problem 5: filtered-ls

const fs = require('fs');
const fileS = process.argv[2];
const fileType = process.argv[3];

try {
    fs.readdir(fileS, function(err, data) {
        if (err) {
            return console.error(err);
        }
        for (let i = 0; i < data.length; i++) {
            if (data[i].includes(fileType)) {
                console.log(data[i]);
            }
        }
    });
}
catch (err) {
    console.log(err);
}
