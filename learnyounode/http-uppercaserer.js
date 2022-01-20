const http = require('http')
const map = require('through2-map')

let port = process.argv[2]

http.createServer(function (request, response) {
  if (request.method === 'POST') {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    request.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase()
    })).pipe(response)
  } else {
    response.writeHead(405)
  }
}).listen(+port, function () {
  console.log('Server listening on http://localhost:%s', port)
})