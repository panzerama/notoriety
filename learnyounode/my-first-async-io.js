const fs = require("fs")
fs.readFile(process.argv[2], function (err, content){
        const lines = content.toString().split('\n').length - 1  
        console.log(lines) 
}) 

