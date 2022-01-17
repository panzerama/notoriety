let http = require('http');

http.get(process.argv[2], function(response){
    let body = '';
    response.on('data', function (data){
        body += data;
    })

    response.on('end', function (){
        console.log(body.length);
        console.log(body);
    })
    
})