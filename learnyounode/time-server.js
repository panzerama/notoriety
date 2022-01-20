let net = require('net');
let directory = process.argv[2];

function addZero(index){
    return (index < 10 ? '0' : '') + index;
}

function callBackWork () {
    let date = new Date();
    return date.getFullYear() + '-' + addZero(date.getMonth() + 1) + '-' +
    addZero(date.getDate()) + ' ' + addZero(date.getHours()) + ':' +
    addZero(date.getMinutes());
}

let server = net.createServer(function (socket) {
    socket.end(callBackWork() + '\n');
})

server.listen(Number(directory));
