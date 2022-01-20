var fs = require('fs');
var path = require('path');
//directory found at [2], type found at [3]
var file = process.argv[2];
//process.argv[3] return txt -- '.' needs to be added
var ext = '.' + process.argv[3];

fs.readdir(file, function callback(err, list) {
    if (err) {
        console.log(err);
    }
    //javascript uses 3x= to mean strictly
    // 1===1 true -- '1' === 1 -- false
    //path.extname returns txt/html ext..
    list.forEach(function(file) {
        if (path.extname(file) == ext) {
            console.log(file);
        };
    });
});

//Node solution
/**
'use strict'
const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
    if (err) return console.error(err)
    files.forEach(function (file) {
        if (path.extname(file) === ext) {
            console.log(file)
        }
    })
})
/**
