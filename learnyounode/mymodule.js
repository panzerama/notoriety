module.exports = workhorse
const fs = require('fs')
const path = require('path')

function workhorse(dir, ext, callback) {
    fs.readdir(dir, function doneLooking(err, dirList) {
        if (err) { return callback(err, null) }
        const filtered = dirList.filter(file => path.extname(file) == "." + ext)
        callback(null, filtered)
    })
}