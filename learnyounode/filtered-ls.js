const fs = require('fs')
const directory = process.argv[2]
const extension = "." + process.argv[3]

function filesInDir(callback) {

    fs.readdir(directory, function doneLooking(err, dirList) {
        callback(dirList)
    })
}

function filterByExtension(arr) {
    // filter array by extension
    const filtered = arr.filter(file => file.toString().endsWith(extension))
    filtered.forEach(elem => console.log(elem))
}

filesInDir(filterByExtension)