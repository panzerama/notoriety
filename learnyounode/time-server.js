var net = require('net')
var server = net.createServer(function(socket){
    
     //socket.connect(Number(proces.argv[2]))
     socket.end(timer() + "\n")
})
function timer(){
    var d = new Date()
        //return  d.getFullYear() + "-" + zeroFill(d.getMonth()) + "-" + zeroFill(d.getDay()) + " " + zeroFill(d.getHours()) + ":" + zeroFill(d.getMinutes());
        return  d.getFullYear() + "-" + d.getMonth() + "-" + d.getDay() + " " + d.getHours() + ":" + d.getMinutes();
}
server.listen(Number(process.argv[2]))

