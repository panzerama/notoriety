let http = require('http')
let map = require('through2-map')
let directory = process.argv[2]

http.createServer(function (request, response) {
  if (request.method === 'POST') {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    request.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase()
    })).pipe(response)
  } else {
    response.writeHead(405)
  }
}).listen(+directory, function () {
  console.log('Server listening on http://localhost:%s', directory)
})