const http = require('http')
const fs = require('fs')

let port = process.argv[2]
let file = process.argv[3]

http.createServer(function (request, response) {
  fs.createReadStream(file).pipe(response)
}).listen(+port, function () {
  console.log('Server listening on http://localhost:%s', port)
})