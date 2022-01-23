const mymodule = require('./mymodule.js');
const dir = process.argv[2];
const filter = process.argv[3];

mymodule(dir, filter, function(err, data) {
    if (err) {
        return console.error(err);
    }
    data.forEach(function(file) {
        console.log(file);
    });
}
);
