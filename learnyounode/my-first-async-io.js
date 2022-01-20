var fs = require('fs');
const file = process.argv[2]
fs.readFile(file, function (err, data) {
    //If there is no error
    if (!err) {
        var str = data.toString();
        var strArray = str.split('\n');
        console.log(strArray.length - 1);
    };
});
//learnyounode solution
/**
'use strict'
const fs = require('fs')
const file = process.argv[2]

fs.readFile(file, function (err, contents) {
    if (err) {
        return console.log(err)
    }
    // fs.readFile(file, 'utf8', callback) can also be used
    const lines = contents.toString().split('\n').length - 1
    console.log(lines)
})
**/