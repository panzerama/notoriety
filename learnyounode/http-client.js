const http = require('http')

const url = process.argv[2]

http.get(url, function callback(response) {
    response.setEncoding('utf8')
        // response -> node stream object
    response.on('data', function(data) {
        // do stuff with data
        console.log(data)
    })
    response.on('error', function(err) {
        console.error(err)
    })
    response.on('end', function(end) {
        return
    })
})