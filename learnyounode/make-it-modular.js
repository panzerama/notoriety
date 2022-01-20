var mymodule = require('./mymodule');
var file = process.argv[2];
var ext = process.argv[3];

//pass arguments to mymodule function
mymodule(file, ext, function(err, data) {
    if (err) {
        return console.log(err);
    }
    data.forEach(function(file){
        console.log(file);
    });
});