let fs = require('fs');

fs.readdir(process.argv[2], function(err, list){
    for(let i = 0; i < list.length; i++){
        if(list[i].includes('.' + process.argv[3]))
        console.log(list[i]);
    }
})
