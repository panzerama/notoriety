const http = require('http');
const url = process.argv[2];
http.get(url, response =>{
    let result = '';
    response.setEncoding('utf8');
    response.on('error', (err) => {
        console.error(err)
    });
    response.on('data', (data) =>{
        result += data;
    })
    response.on('end', () =>{
        console.log(result.length);
        console.log(result);
    })
})