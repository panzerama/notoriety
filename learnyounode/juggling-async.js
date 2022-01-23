const async = require('async');
const http = require('http');
const url = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];


const get = function(url, callback) {
    http.get(url, function(response) {
        response.setEncoding('utf-8');
        response.on('data', function(data) {
        callback(null, data);
        });
        response.on('error', function(error) {
        callback(error);
        });
    });
}

for (i=0; i< 3; i++) {
    if (i == 0) {
        get(url, function(err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        });
    } else if (i == 1) {
        get(url2, function(err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        });
    } else if (i == 2) {
        get(url3, function(err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        });
    }
}