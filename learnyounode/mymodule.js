'use strict'
module.exports = function modFunc(pathtofile, ext, callback){
    const fs = require('fs')
    const path = require('path')
    let output = []
    fs.readdir(pathtofile, (err, files) => {
        if (err) {return callback(err)}
        files.forEach(
            (file) => {
                if (path.extname(file) == '.'+ext){
                    output.push(file)
                }
            }
        )
        callback(null,output)
    })
}