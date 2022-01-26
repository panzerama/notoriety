const fs = require('fs')
const filePath = process.argv[2]

function readFromFile(callback) {
    fs.readFile(filePath, function doneReading(err, fileContents) {
        callback(fileContents.toString().split('\n').length - 1)
    })
}

function display(output) { console.log(output) }

readFromFile(display)