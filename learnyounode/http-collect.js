var http = require('http');

//bl .. lower case L .. is a bufferlist collector
var bl = require('bl');

var url = process.argv[2];

// calls responce function
http.get(url, function (response) {


    response.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err);
        }
        //return length
        console.log(data.toString().length);
        //return data
        console.log(data.toString());
    }));
});