var fs = require("fs")
var path = require("path")

var folder = process.argv[2]
var extension = '.' + process.argv[3]

fs.readdir(folder, function (err, arrayOfFiles) {
    
  arrayOfFiles.forEach(function(file) {
      if(err){
        return callback(console.error)
      }
      if (path.extname(file) === extension) {
          console.log(file)
      }
  })
})
