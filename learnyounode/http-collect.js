const http = require('http')
let full = ""

http.get(process.argv[2], function(response) {
    response.on('data', function(data) {
        full += data
    })
    response.on('error', console.error)
    response.on('end', function(end) {
        console.log(full.length)
        console.log(full)
    })
}).on('error', console.error)