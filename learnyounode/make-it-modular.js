var sol = require('./mymodule.js')

var path = process.argv[2]
var extension = process.argv[3]

sol(path, extension, function(err,arrayOfFiles){
    if(err){
        return callback(err)
    }else{
        arrayOfFiles.forEach(element => {
            console.log(element)
        });
    }
})

