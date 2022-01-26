const mymodule = require('./mymodule.js')

const directory = process.argv[2]
const extension = process.argv[3]

function display(err, arr) {
    if (err) {
        console.error(err)
        return
    }
    arr.forEach(element => {
        console.log(element)
    });
}

mymodule(directory, extension, display)