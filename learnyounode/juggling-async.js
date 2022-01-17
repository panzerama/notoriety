let http = require('http');
let bl = require('bl');
let dataString = [];
let countOfData = 0;

function printData(){
    dataString.forEach(element =>{
        console.log(element);
    })
}

function getCallBack (currentURL) {
    http.get(process.argv[2 + currentURL], function (response){
        response.pipe(bl (function (err, data) {
            if (err){ return console.error(err)};
        dataString[currentURL] = data.toString();
        countOfData++;
        if(countOfData == 3){
            printData();
        }
    }))
    })
}

for(let i = 0; i < 3; i++){
    getCallBack(i);
}