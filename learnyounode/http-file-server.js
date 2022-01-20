let http = require('http');
let fs = require('fs');
let directory = process.argv[2];
let data = process.argv[3];

http.createServer(function (request, response) {
    fs.createReadStream(data).pipe(response)}).listen(+directory, function () {
        console.log('Server listening on http://localhost:%s', directory);
    })
