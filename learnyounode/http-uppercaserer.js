const port = process.argv[2]

const http = require('http')

const server = http.createServer(function(req, res) {
    if (req.method === 'POST') {
        let body = ''
        req.on('data', part => {
            body += part.toString()
        })
        req.on('end', () => {
            body = body.toUpperCase()
            res.end(body)
        })
    }
}).listen(port)