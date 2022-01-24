'use strict'
let fs = require('fs')
let path = process.argv[2]
let fileExt = process.argv[3]

fs.readdir(path, (err, files) => {
    if (err) throw err;
    files.forEach(
       (element) => {
           if (element.includes('.'+fileExt)){
               console.log(element)
           }
       }
    );
});