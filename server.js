// Node internal library
// import *everythng*
// import * as http from 'http'
// only import what you need

const http = require('http')

const requestHandler = (request, response) => {
    // incoming request's path
    // GET hello
    if (request.url === '/hello' && request.method === 'GET') {
        response.writeHead(200) // status code (success)
        response.end('Hello World!') // write content
    }
}

const server = http.createServer(requestHandler)
server.listen(8080) // often http servers

/**
 * Create listener process
 * ---
 *  |
 *  |
 * --- request on 8080
 * (Node Event Loop)
 */