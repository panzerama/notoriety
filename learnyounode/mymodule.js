
module.exports = function (directory,extension,callback){
    var fs = require("fs")
    var path = require("path")
    fs.readdir(directory, function (err, arrayOfFiles) {
        arrayOfFiles.forEach(function(file) {
            if(err)
                return callback(err)
            
            else if (path.extname(file) === extension) {
                console.log(file)
            }else{
                callback(null,arrayOfFiles)
            }
        })
    })


}

