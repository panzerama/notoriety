const http = require('http')
const url = require('url')

const server = http.createServer(function(req, res) {
    if (req.method !== 'GET') {
        return res.end('send a GET')
    }

    let thing = new URL("localhost:" + process.argv[2] + req.url)
    let date = new Date(thing.searchParams.get('iso'))


    if (req.url.startsWith('/api/parsetime')) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        let ret = { 'hour': date.getHours(), 'minute': date.getMinutes(), 'second': date.getSeconds() }
        return res.end(JSON.stringify(ret))
    } else if (req.url.startsWith('/api/unixtime')) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        let ret = { 'unixtime': date.getTime() }
        return res.end(JSON.stringify(ret))
    } else { return res.end('wrong url') }

}).listen(process.argv[2])