let directory = process.argv[2];
let pathExtension = '.' + process.argv[3];
let mymodule = require('./mymodule.js');


mymodule(directory, pathExtension, function (err, data) {
    if(err) {
        console.log(err);
    }
    
    data.forEach(element => {
        console.log(element);
    })
})
    




