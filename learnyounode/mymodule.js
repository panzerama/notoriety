let fs = require('fs');
let path = require('path');

module.exports =  function test(directory, pathExtension, callback){
    pathExtension = pathExtension.replace(/(^\.+|\.+$)/mg, '');

    fs.readdir(directory, function (err, data){
        if(err) { return callback(err);}
        let dataToReturn = [];
        data.forEach(element =>{
            let fixedSuffix = path.extname(element);
            fixedSuffix = fixedSuffix.replace(/(^\.+|\.+$)/mg, '');
            if(fixedSuffix === pathExtension){
                dataToReturn.push(element);
            }
        })
        callback(null, dataToReturn);
    })
};

 