let http = require('http')
let url = require('url')
let directory = process.argv[2]

let timer = function (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unitaryTime (time) {
  return {unixtime: time.getTime()}
}

let query = function (url) {
  switch (url.pathname) {
    case '/api/parsetime':
      return timer(new Date(url.query.iso))
    case '/api/unixtime':
      return unitaryTime(new Date(url.query.iso))
    default: return 'please enter a valid endpoint url'
  }
}

http.createServer(function (request, response) {
  if (request.method === 'GET') {
    response.writeHead(200, {'Content-Type': 'application/json'}) 
    url = url.parse(request.url, true)
    response.end(JSON.stringify(query(url)))
  } else { response.writeHead(405)
    response.end()
  }
}).listen(+directory, function () {
  console.log('Server listening on http://localhost:%s', directory)
})