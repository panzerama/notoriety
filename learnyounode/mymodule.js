//once data is passed essentially the same thing as
//filted-ls.js

var fs = require('fs');
var path = require('path');

//module.exports sends data from this module to other class

module.exports = function (data, ext, callback) {

    var ext = '.' + ext;

    fs.readdir(data, function (err, list) {
        if (err) {
            return callback(err)
        }
        //The big difference is that this is not returning the data
        //The other class is.. need to create something to return..array?
        var arr = [];
        //Array add command push.. like stacks
        list.forEach(function(file) {
            if (path.extname(file) === ext) {
                //instead of printing here..push to array
                //console.log(file);
                arr.push(file);
            };
        });
        //funcation name, no error, array
        return callback(null, arr);
    });
};

//TODO: figure out why its throwing error