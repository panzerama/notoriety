function mymodule(dirname, filter, callback) {
    const fs = require('fs');
    const path = require('path');
    fs.readdir(dirname, function(err, list) {
        try {
            if (err) {
                return callback(err);
            }
            const filteredList = list.filter(function(file) {
                return path.extname(file) === '.' + filter;
            });
            callback(null, filteredList);
        }
        catch (err) {
            callback(err);
        }
    });
}
module.exports = mymodule;

