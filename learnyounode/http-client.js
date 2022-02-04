const { errorMonitor } = require("events")
var url = require("http")
url.get(process.argv[2],function(response){
    response.setEncoding("utf-8")
    response.on("data",function(data){
        console.log(data)})
    response.on("error",function(err){
        console.log(console.error)})
    response.on("",function(end){
        console.log("")
    })           
})