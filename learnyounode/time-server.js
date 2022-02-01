const net = require('net')
const server = net.createServer(function(socket) {
    // socket handling logic
    let date = new Date()
    let month = date.getMonth() + 1
    if (month < 10) { month = "0" + month }
    let min = date.getMinutes()
    if (min < 10) { min = "0" + min }
    let str = date.getFullYear() +
        "-" + month +
        "-" + date.getDate() +
        " " + date.getHours() +
        ":" + min + "\n"
    socket.end(str)
})
server.listen(process.argv[2])