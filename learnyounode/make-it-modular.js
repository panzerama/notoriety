const mymodule = require('./mymodule')
let path = process.argv[2]
let ext = process.argv[3]

function output (err, data) {
    if (err) {console.log(err)}
    data.forEach((file) => {
        console.log(file)
    })
}

mymodule(path, ext, output)