const net = require('net');

function zeroFill (i) {
    return (i < 10 ? '0' : '') + i
  }
  
const server = net.createServer(function(socket) {

    const date = new Date();
    const year = date.getFullYear();
    const month = zeroFill(date.getMonth() + 1);
    const day = zeroFill(date.getDate());
    const hour = zeroFill(date.getHours());
    const min = zeroFill(date.getMinutes());

    const output = '' + year + '-' + month + '-' + day + ' ' + hour +':' + min + '\n';
    socket.write(output.toString());
    socket.end();
});
server.listen(process.argv[2]);